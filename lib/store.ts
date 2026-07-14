'use client';

import {useCallback, useSyncExternalStore} from 'react';

import {migrateLegacyStorage} from './migrate';

/**
 * The whole "backend" of this app is localStorage — same as the legacy site.
 * This is a prototype, not a real product: there is no server, no session, and
 * no security. Keys are kept byte-identical to the old site so a returning
 * user's cart and purchases survive the rebuild.
 *
 * SSR is the trap here. localStorage does not exist on the server, so every
 * store MUST hand React a stable server snapshot and only reach for real
 * storage in the browser. Reading localStorage in getSnapshot during SSR is
 * the classic hydration-mismatch crash; getServerSnapshot below never does.
 */

type Listener = () => void;

export type Store<T> = {
  key: string;
  get(): T;
  set(next: T | ((prev: T) => T)): void;
  subscribe(cb: Listener): () => void;
  getServerSnapshot(): T;
};

/**
 * Cache of parsed values. useSyncExternalStore demands getSnapshot be
 * referentially stable between changes — parsing JSON on every call would
 * return a fresh object each time and spin React into an infinite re-render.
 */
const cache = new Map<string, unknown>();
const listeners = new Map<string, Set<Listener>>();

/**
 * The legacy-storage migration MUST run before the first value is read and
 * cached — if it ran in an effect (i.e. after render) the cache would already
 * hold the pre-migration data and the merge would be invisible until reload.
 * Gate it on the first browser read instead.
 */
let migrationDone = false;
function ensureMigrated() {
  if (migrationDone) return;
  migrationDone = true;
  migrateLegacyStorage();
}

function readRaw<T>(key: string, seed: T): T {
  if (typeof window === 'undefined') return seed;
  ensureMigrated();
  if (cache.has(key)) return cache.get(key) as T;
  try {
    const raw = window.localStorage.getItem(key);
    const value = raw === null ? seed : (JSON.parse(raw) as T);
    cache.set(key, value);
    return value;
  } catch {
    // Corrupt JSON or storage disabled (private mode). Fall back to the seed
    // rather than taking the whole page down.
    cache.set(key, seed);
    return seed;
  }
}

function emit(key: string) {
  listeners.get(key)?.forEach((cb) => cb());
}

export function createStore<T>(key: string, seed: T): Store<T> {
  return {
    key,
    get: () => readRaw(key, seed),
    set(next) {
      const prev = readRaw(key, seed);
      const value =
        typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
      cache.set(key, value);
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // Quota or private mode — keep the in-memory value so the UI still works.
      }
      emit(key);
    },
    subscribe(cb) {
      if (!listeners.has(key)) listeners.set(key, new Set());
      listeners.get(key)!.add(cb);

      // Keep tabs in sync, and pick up writes made by another tab.
      const onStorage = (e: StorageEvent) => {
        if (e.key === key) {
          cache.delete(key);
          cb();
        }
      };
      window.addEventListener('storage', onStorage);

      return () => {
        listeners.get(key)?.delete(cb);
        window.removeEventListener('storage', onStorage);
      };
    },
    getServerSnapshot: () => seed,
  };
}

/**
 * Reads a store. During SSR and the first client render this returns `seed`,
 * so server and client markup agree; the real localStorage value arrives on
 * the next tick. Anything that would visibly differ (cart badge, auth avatar)
 * must therefore tolerate a first paint showing the seed — see useHasMounted.
 */
export function useStore<T>(store: Store<T>): [T, Store<T>['set']] {
  const subscribe = useCallback((cb: Listener) => store.subscribe(cb), [store]);
  const value = useSyncExternalStore(
    subscribe,
    store.get,
    store.getServerSnapshot,
  );
  return [value, store.set];
}
