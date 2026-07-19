// GENERATED from meu.edu.vn (production) on 2026-07-20 — Vietnamese copy is
// verbatim. Do not "improve" the strings; this is the client's live content.
import type {Course} from '@/lib/types';

/**
 * The catalogue, synced 1:1 from the production site meu.edu.vn:
 *   - c1 (livestream-ai-master) is the one real video course (33 lessons,
 *     1h59m, one free-preview lesson).
 *   - c2-c6 are the production [COMING SOON] courses — real prices and full
 *     curricula, no published video yet.
 * Slugs are production's verbatim (including its "comming-soon" spelling) so
 * course URLs stay consistent across both sites.
 * Category slugs/labels are ours: production exposes no category taxonomy
 * (its categories API returns an empty list), but the catalog filter needs one.
 */
export const seedCourses: Course[] = [
  {
    id: 'c1',
    slug: 'livestream-ai-master',
    title: 'KHOÁ HỌC LIVESTREAM A.I MASTER',
    category: 'Chiến lược Livestream',
    categorySlug: 'livestream',
    price: 699000,
    oldPrice: 800000,
    purchases: 8,
    status: 'active',
    image:
      'https://cqdcllggrqxavzgjexxp.supabase.co/storage/v1/object/public/thumbnails/1782353226-untitled-design-5.png',
    description:
      'Giữa bối cảnh TMĐT cạnh tranh gay gắt, việc livestream thủ công đang khiến nhiều nhà bán hàng bế tắc vì tốn chi phí nhưng kém hiệu quả. Khóa học LIVESTREAM A.I ra đời giúp doanh nghiệp, nhà bán và KOC đập tan lối mòn "làm theo cảm tính", ứng dụng A.I để tự động hóa quy trình từ sản xuất kịch bản, visual đến tối ưu vận hành phiên live.',
    longDescription:
      'Trong bối cảnh TikTok Shop và các nền tảng TMĐT ngày càng cạnh tranh, mỗi phiên live giờ đây là một hệ thống vận hành tổng hợp giữa chiến lược nội dung, tối ưu chuyển đổi, điều phối vận hành và khả năng scale doanh thu theo thời gian thực. Tuy nhiên, phần lớn nhà bán hiện nay vẫn đang livestream thủ công, chưa biết cách tối ưu hoá, tạo hệ thống automation để tối ưu hoá về chi phí, nguồn lực, không phụ thuộc vào con người mà lại tăng năng suất, hiệu suất bán hàng\n\nHệ quả là rất nhiều phiên live tiêu tốn hàng giờ chuẩn bị nhưng không giữ được người xem, không tạo chuyển đổi ổn định và khó nhân rộng doanh thu một cách bền vững. Không ít doanh nghiệp liên tục thay đổi kịch bản, đổi host, tăng ngân sách quảng cáo nhưng vẫn không tìm ra công thức livestream hiệu quả thực sự.\n\nTrong khi đó, A.I đang mở ra một cách tiếp cận hoàn toàn mới cho ngành Livestream Commerce. Và A.I sẽ làm đòn bẩy, xúc tiến về năng suất, tăng hiệu quả đáng kể về doanh số bán hàng, nhà bán giờ đây có thể sử dụng A.I để xây dựng kịch bản bán hàng, phân tích hành vi người xem, tối ưu cấu trúc livestream, tự động hóa quy trình sản xuất nội dung và nâng cao hiệu suất vận hành toàn phiên live.\n\nKhóa học LIVESTREAM A.I được xây dựng nhằm giúp nhà bán, doanh nghiệp, KOC và đội ngũ vận hành hiểu đúng bản chất của một phiên livestream hiệu quả trong thời đại mới, đồng thời biết cách ứng dụng A.I như một “đòn bẩy tăng trưởng” để tối ưu doanh thu và scale hệ thống livestream chuyên nghiệp.\n\nKhóa học không chỉ tập trung vào công cụ, mà đi sâu vào tư duy chiến lược vận hành livestream:\n - Hiểu đúng cấu trúc của một phiên livestream chuyển đổi cao\n - Biết cách xây dựng flow livestream giữ chân người xem\n - Ứng dụng A.I để sản xuất kịch bản, tối ưu vận hành và hơn hết là triển khai A.I Livestream\n - Tăng tốc quy trình triển khai livestream với chi phí tối ưu hơn\n - Xây dựng hệ thống livestream A.I có khả năng phủ nhiều khung giờ\n\nThông qua framework triển khai thực chiến, học viên sẽ được hướng dẫn:\n - Live Content Strategy: Xây dựng chiến lược nội dung livestream chuyển đổi cao\n - AI-powered Production: Ứng dụng A.I vào sản xuất kịch bản, visual, hook và flow bán hàng\n - Optimize & Scale: Tối ưu hiệu suất Livestream A.I và mở rộng hệ thống vận hành\n\nKhóa học được dẫn dắt bởi chị Trần Thị Hồng Vân – Head of Meta Ecom Uni, 1 trong 5 giảng viên được TikTok Shop Việt Nam chứng nhận, từng hỗ trợ hơn 2000 nhà bán, KOC và hơn 600 thương hiệu lớn đạt GMV hàng triệu USD qua Mega Livestream. Với kinh nghiệm dày dặn và tư duy chiến lược, Vân sẽ giúp bạn nhìn rõ nguyên lý đằng sau mỗi phiên live hiệu quả, để không còn làm theo cảm tính, mà làm trúng, ra số thật.\n\nĐây không chỉ là khóa học về livestream. Đây là cách xây dựng một hệ thống tăng trưởng doanh thu bằng Livestream A.I trong kỷ nguyên thương mại điện tử mới.',
    instructor: 'META ECOM UNI',
    lessonsLabel: '33 bài',
    durationLabel: '1h 59m',
    curriculum: [
      {
        id: 'm1',
        title: 'TỔNG QUAN KHOÁ HỌC',
        lessons: [
          {
            id: 'l1',
            title: 'BÀI 0: TỔNG QUAN KHOÁ HỌC',
            duration: '1m',
            isPreview: true,
          },
          {
            id: 'l2',
            title:
              'HANDOUT 01: TỔNG HỢP PROMPT & TEMPLATE MẪU TRONG LIVESTREAM A.I',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm2',
        title: 'GIẢI MÃ LIVESTREAM A.I: SỰ THẬT & ĐỊNH NGHĨA',
        lessons: [
          {
            id: 'l3',
            title: 'BÀI 1: TỔNG QUAN MODULE 01',
            duration: '1m',
            isPreview: false,
          },
          {
            id: 'l4',
            title:
              'BÀI 2: VÉN MÀN LIVESTREAM A.I: ĐÂU LÀ "LONG MẠCH" THỰC CHIẾN NĂM 2026?',
            duration: '14m',
            isPreview: false,
          },
          {
            id: 'l5',
            title:
              'HANDOUT 02: BẢN ĐỒ LIVESTREAM A.I: BÀI HỌC TRUNG QUỐC & THỜI CƠ VÀNG TẠI VIỆT NAM',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l6',
            title:
              'BÀI 3: ĐẰNG SAU PHIÊN LIVESTREAM A.I HIỆU QUẢ: BẠN CẦN CHUẨN BỊ NHỮNG GÌ ?',
            duration: '8m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm3',
        title: 'NẮM CHẮC CÔNG THỨC X3 DOANH SỐ LIVESTREAM',
        lessons: [
          {
            id: 'l7',
            title: 'BÀI 4: TỔNG QUAN MODULE 02',
            duration: '1m',
            isPreview: false,
          },
          {
            id: 'l8',
            title:
              'BÀI 5: CÔNG THỨC TĂNG TRƯỞNG DOANH THU LIVESTREAM 2026: GIẢI MÃ CHỈ SỐ ERR ?',
            duration: '6m',
            isPreview: false,
          },
          {
            id: 'l9',
            title:
              'BÀI 6: MẬT MÃ THỊ GIÁC: NẮM CHẮC BỐ CỤC PHÒNG LIVE A.I THỰC CHIẾN',
            duration: '5m',
            isPreview: false,
          },
          {
            id: 'l10',
            title: 'BÀI 7: 3 BƯỚC KHAI PHÁ KHÔNG GIAN LIVESTREAM ĐA NGÀNH HÀNG',
            duration: '6m',
            isPreview: false,
          },
          {
            id: 'l11',
            title:
              'BÀI 8: BỨT PHÁ CHỈ SỐ AOV: TỐI ƯU CHIẾN LƯỢC SẢN PHẨM VÀ GIÁ BÁN BẰNG A.I',
            duration: '5m',
            isPreview: false,
          },
          {
            id: 'l12',
            title:
              'BÀI 9: THỰC HÀNH: TẠO TRỢ LÝ A.I CẤU TRÚC GIÁ & SẢN PHẨM TRONG 5 PHÚT',
            duration: '4m',
            isPreview: false,
          },
          {
            id: 'l13',
            title: 'BÀI TẬP THỰC HÀNH',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm4',
        title: 'SỞ HỮU BỘ KỊCH BẢN LIVESTREAM ĐA NGÀNH HÀNG TRONG 5 PHÚT ?',
        lessons: [
          {
            id: 'l14',
            title: 'BÀI 10: TỔNG QUAN MODULE 03',
            duration: '1m',
            isPreview: false,
          },
          {
            id: 'l15',
            title:
              'BÀI 11: CÔNG THỨC TĂNG TRƯỞNG DOANH THU LIVESTREAM 2026: CHỈ SỐ CTR VÀ CO LÀ GÌ ?',
            duration: '4m',
            isPreview: false,
          },
          {
            id: 'l16',
            title:
              'BÀI 12: ĐÂU LÀ 5 YẾU TỐ CỐT LÕI TRONG BỘ KỊCH BẢN LIVESTREAM A.I ?',
            duration: '2m',
            isPreview: false,
          },
          {
            id: 'l17',
            title:
              'BÀI 13: 3 BƯỚC CHUYỂN HÓA DỮ LIỆU THÔ THÀNH KỊCH BẢN LIVESTREAM BẰNG A.I',
            duration: '6m',
            isPreview: false,
          },
          {
            id: 'l18',
            title:
              'HANDOUT 03: CHATBOT: TỔNG HỢP QUY ĐỊNH LIVESTREAM TIKTOK & SHOPEE',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l19',
            title:
              'BÀI 14: THỰC HÀNH: ỨNG DỤNG A.I TẠO BỘ KỊCH BẢN CHO HOST LIVESTREAM',
            duration: '6m',
            isPreview: false,
          },
          {
            id: 'l20',
            title:
              'BÀI 15: THỰC HÀNH: ỨNG DỤNG A.I TẠO BỘ KỊCH BẢN CHO HOST LIVESTREAM A.I',
            duration: '3m',
            isPreview: false,
          },
          {
            id: 'l21',
            title: 'BÀI TẬP THỰC HÀNH',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm5',
        title: 'QUY TRÌNH TRIỂN KHAI LIVESTREAM A.I TỪ A→Z',
        lessons: [
          {
            id: 'l22',
            title: 'BÀI 16: TỔNG QUAN MODULE 04',
            duration: '1m',
            isPreview: false,
          },
          {
            id: 'l23',
            title: 'BÀI 17: LIVESTREAM A.I: 5 GIAI ĐOẠN VẬN HÀNH CỐT LÕI',
            duration: '4m',
            isPreview: false,
          },
          {
            id: 'l24',
            title: 'BÀI 18: QUY TRÌNH WHITELIST CHO PHIÊN LIVESTREAM A.I',
            duration: '4m',
            isPreview: false,
          },
          {
            id: 'l25',
            title:
              'HANDOUT 04: FORM KHAI BÁO WHITELIST LIVESTREAM A.I [SHOPEE]',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l26',
            title: 'HANDOUT 05: QUY TRÌNH WHITELIST LIVESTREAM A.I',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l27',
            title: 'BÀI 19: THỰC HÀNH: QUY TRÌNH SET UP LIVESTREAM A.I',
            duration: '10m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm6',
        title: 'HÃY ĐỂ A.I HỖ TRỢ BẠN TỐI ƯU SAU LIVESTREAM ?',
        lessons: [
          {
            id: 'l28',
            title: 'BÀI 20: TỔNG QUAN MODULE 05',
            duration: '1m',
            isPreview: false,
          },
          {
            id: 'l29',
            title:
              'BÀI 21: 3 BƯỚC ỨNG DỤNG A.I ĐỂ ĐO LƯỜNG & TỐI ƯU SAU LIVESTREAM',
            duration: '7m',
            isPreview: false,
          },
          {
            id: 'l30',
            title:
              'BÀI 22: THỰC HÀNH: TẠO BÁO CÁO PHÂN TÍCH TOÀN PHIÊN LIVESTREAM BẰNG A.I',
            duration: '4m',
            isPreview: false,
          },
          {
            id: 'l31',
            title:
              'BÀI 23: THỰC HÀNH: TẠO TRANG WEB HTML QUẢN LÝ KOC BẰNG A.I TRONG 5 PHÚT',
            duration: '3m',
            isPreview: false,
          },
          {
            id: 'l32',
            title: 'BÀI 24: LỘ TRÌNH SCALE 30 NGÀY CÙNG LIVESTREAM A.I',
            duration: '1m',
            isPreview: false,
          },
          {
            id: 'l33',
            title: 'BÀI TẬP THỰC HÀNH',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: 'c2',
    slug: 'comming-soon-ecom-foundation-duong-dan-toi-su-nghiep-ecom',
    title: '[COMING SOON] ECOM FOUNDATION - ĐƯỜNG DẪN TỚI SỰ NGHIỆP ECOM',
    category: 'Ecom Foundation',
    categorySlug: 'ecom-foundation',
    price: 799000,
    oldPrice: 1200000,
    purchases: 0,
    status: 'active',
    image:
      'https://cqdcllggrqxavzgjexxp.supabase.co/storage/v1/object/public/thumbnails/1782353459-untitled-design-6.png',
    description:
      'ECOM Foundation – Đường dẫn tới sự nghiệp Ecom là khóa học nền tảng dành cho sinh viên, người mới ra trường hoặc người mới muốn gia nhập ngành Thương mại điện tử nhưng chưa có định hướng rõ ràng. Khóa học giúp học viên hiểu tổng quan ngành Ecommerce, nhận diện các cơ hội nghề nghiệp, xây dựng tư duy – kỹ năng nền tảng và tự thiết kế lộ trình phát triển sự nghiệp cá nhân trong 3–5 năm tới.',
    longDescription:
      '🚀 ECOM Foundation – Đường dẫn tới sự nghiệp Ecom\nECOM Foundation – Đường dẫn tới sự nghiệp Ecom là khóa học nền tảng dành cho sinh viên ngành Thương mại điện tử, sinh viên trái ngành, người mới ra trường hoặc những bạn đang muốn gia nhập lĩnh vực Ecommerce nhưng chưa có định hướng rõ ràng.\nKhóa học giúp học viên hiểu đúng về ngành, nhận diện các cơ hội nghề nghiệp, đánh giá mức độ phù hợp của bản thân và từng bước xây dựng lộ trình phát triển sự nghiệp cá nhân trong ngành Thương mại điện tử.\n\n🎯 Lộ trình khóa học\nKhóa học được thiết kế theo hành trình:\nHiểu ngành → Hiểu mình → Học nền tảng → Thực hành lập kế hoạch\nThông qua lộ trình này, học viên không chỉ nắm được bức tranh tổng quan về Ecommerce mà còn biết cách ứng dụng kiến thức vào định hướng nghề nghiệp, phát triển năng lực cá nhân và chuẩn bị tốt hơn cho công việc thực tế.\n\n📌 Nội dung chi tiết khóa học\n🔹 Buổi 1: Tổng quan ngành Thương mại điện tử & Cơ hội nghề nghiệp\nHọc viên sẽ được tìm hiểu tổng quan về ngành Thương mại điện tử, xu hướng phát triển của Ecommerce trong thời đại số, các nguyên tắc cốt lõi khi tham gia ngành và bức tranh tổng thể về hệ sinh thái Ecommerce tại Việt Nam.\nBên cạnh đó, học viên cũng được giới thiệu các nhóm vị trí công việc phổ biến trong ngành như:\n🛒 Vận hành sàn TMĐT\n📢 Marketing & Content\n🎥 Livestream Commerce\n🤝 Affiliate/KOL/KOC\n📊 Performance Ads\n💼 Business Development\nTừ đó, học viên có cái nhìn rõ ràng hơn về những cơ hội nghề nghiệp có thể theo đuổi trong ngành Ecommerce.\n\n🔹 Buổi 2: Định hướng nghề nghiệp & Xây dựng lộ trình cá nhân\nHọc viên được hướng dẫn cách phân tích một vị trí công việc trong ngành TMĐT, bao gồm yêu cầu về kiến thức, kỹ năng, tư duy và năng lực cần có.\nThông qua mô hình phân tích và hoạt động self-reflection, học viên có thể tự đánh giá bản thân để xác định:\n✅ Mình có phù hợp với ngành Ecommerce hay không?\n✅ Mình phù hợp với nhóm vị trí nào trong ngành?\n✅ Mình đang thiếu kiến thức, kỹ năng hoặc trải nghiệm gì?\n✅ Mình cần học và rèn luyện như thế nào để theo đuổi mục tiêu nghề nghiệp?\nTừ đó, học viên biết cách xây dựng kế hoạch phát triển bản thân, kế hoạch học tập và lộ trình hành động để tiến gần hơn tới vị trí công việc mong muốn trong ngành TMĐT.\n📍 Sau 2 buổi đầu, học viên sẽ có nền tảng quan trọng để hiểu ngành, hiểu mình và biết cách xây dựng kế hoạch phát triển sự nghiệp trong ngành Thương mại điện tử.\n\n🔹 Buổi 3: Ecommerce Strategy – Chiến lược TMĐT\nHọc viên được tiếp cận tư duy xây dựng chiến lược Ecommerce thông qua mô hình RSTPMM, bao gồm cách phân tích thị trường, khách hàng mục tiêu, định vị, kênh bán, sản phẩm, thông điệp và các yếu tố nền tảng để xây dựng chiến lược phát triển TMĐT hiệu quả.\nBuổi học giúp học viên hiểu rằng Ecommerce không chỉ là “bán hàng trên sàn”, mà là một hệ thống cần có chiến lược rõ ràng để tăng trưởng bền vững.\n\n🔹 Buổi 4: Implementation & Control – Thực thi và kiểm soát TMĐT\nBuổi học giúp học viên hiểu cách triển khai kế hoạch Ecommerce vào thực tế, từ phân bổ công việc, theo dõi hiệu quả, kiểm soát tiến độ đến đánh giá các chỉ số vận hành.\nHọc viên sẽ nắm được tư duy thực thi, tối ưu và kiểm soát hoạt động TMĐT để đảm bảo kế hoạch không chỉ dừng lại trên giấy, mà có thể được triển khai hiệu quả trong môi trường thực tế.\n\n🔹 Buổi 5: Ecommerce Planning – Lập kế hoạch TMĐT\nHọc viên được hướng dẫn cách xây dựng một bản kế hoạch TMĐT cơ bản, bao gồm:\n📌 Mục tiêu\n📌 Chiến lược\n📌 Hoạt động triển khai\n📌 Timeline thực hiện\n📌 Nguồn lực cần có\n📌 Chỉ số đo lường\n📌 Phương án kiểm soát và tối ưu\nĐây là buổi học giúp học viên hệ thống hóa toàn bộ kiến thức đã học và chuyển hóa thành một bản kế hoạch có thể trình bày, áp dụng hoặc phát triển tiếp trong công việc thực tế.\n\n🔹 Buổi 6: Thuyết trình & Chữa kế hoạch\nHọc viên sẽ thực hành thuyết trình bản kế hoạch TMĐT đã xây dựng, nhận góp ý từ trainer và cùng phân tích điểm mạnh, điểm yếu, tính khả thi của kế hoạch.\nThông qua hoạt động này, học viên được rèn luyện:\n🎤 Kỹ năng trình bày\n🧠 Tư duy phản biện\n📊 Khả năng bảo vệ ý tưởng\n🔍 Tư duy phân tích và tối ưu kế hoạch\n🚀 Khả năng chuyển hóa kiến thức thành hành động thực tế\n🌟 Kết quả sau khóa học\nSau khi hoàn thành khóa học, học viên sẽ:\n✅ Có cái nhìn tổng quan về ngành Ecommerce và xu hướng phát triển của TMĐT tại Việt Nam.\n✅ Hiểu các nhóm vị trí nghề nghiệp trong ngành và lựa chọn được hướng đi phù hợp hơn với bản thân.\n✅ Nắm được kiến thức nền tảng về chiến lược, thực thi, kiểm soát và lập kế hoạch TMĐT.\n✅ Biết cách tự đánh giá năng lực cá nhân và xây dựng lộ trình phát triển sự nghiệp trong 3–5 năm tới.\n✅ Có khả năng xây dựng và thuyết trình một bản kế hoạch TMĐT cơ bản.\n✅ Được kết nối với trainer giàu kinh nghiệm thực chiến, cộng đồng bạn học cùng mục tiêu và network doanh nghiệp thuộc hệ sinh thái Meta Ecom.\n💡 Giá trị cốt lõi của khóa học\nECOM Foundation không chỉ giúp học viên “biết thêm về Ecommerce”, mà còn giúp người học có một điểm bắt đầu rõ ràng hơn cho sự nghiệp trong ngành.\nKhóa học là nền tảng để học viên từng bước chuyển từ trạng thái mơ hồ – chưa biết bắt đầu từ đâu sang trạng thái hiểu ngành – hiểu mình – có định hướng – có kế hoạch hành động cụ thể.',
    instructor: 'META ECOM UNI',
    badge: 'Mới',
    lessonsLabel: '39 bài',
    durationLabel: '0m',
    curriculum: [
      {
        id: 'm1',
        title: 'MODULE 01: MARKET DYNAMIC & E-COMMERCE INSIGHT',
        lessons: [
          {
            id: 'l1',
            title: '1. Tổng quan Module',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l2',
            title:
              '2. Bản chất TMĐT & Value Chain trong ngành TMĐT & Customer Journey TMĐT',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l3',
            title: '3. Các mô hình TMĐT phổ biến',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l4',
            title:
              '4. Bối cảnh tuyển dụng hiện nay & Cơ hội nào cho nhân sự làm Ecommerce?',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l5',
            title: '5. 3 nhánh sự nghiệp trong ngành Ecommerce',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l6',
            title: '6. Các nhóm vị trí tiêu biểu',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l7',
            title: '7. 4 loại hình công ty phổ biến',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l8',
            title: 'BÀI TẬP THỰC HÀNH',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm2',
        title:
          'MODULE 02: THE GUIDE TO E-COMMERCE - ĐƯỜNG ĐẾN SỰ NGHIỆP ECOMMERCE',
        lessons: [
          {
            id: 'l9',
            title: '1. Tổng quan Module',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l10',
            title:
              '2. Self-reflection - Thấu hiểu bản thân & lựa chọn nghề nghiệp phù hợp',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l11',
            title: '3. Xây dựng kế hoạch phát triển',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l12',
            title: 'BÀI TẬP THỰC HÀNH',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm3',
        title: 'MODULE 03: ECOMMERCE STRATEGY (FRAMEWORK RSTPMMIC)',
        lessons: [
          {
            id: 'l13',
            title: '1. Tổng quan Module',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l14',
            title: '2. Tổng quan Flow chiến lược kinh doanh TMĐT',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l15',
            title: '3. Flow chiến lược kinh doanh TMĐT: Thị trường',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l16',
            title: '4. Flow chiến lược kinh doanh TMĐT: Sản phẩm',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l17',
            title: '5. Flow chiến lược kinh doanh TMĐT: Thương hiệu & Định vị',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l18',
            title: '6. Flow chiến lược kinh doanh TMĐT: Kênh truyền thông',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l19',
            title: '7. Flow chiến lược kinh doanh TMĐT: Key Message - Big Idea',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l20',
            title: '8. Công cụ hỗ trợ chiến lược',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l21',
            title: 'BÀI TẬP THỰC HÀNH',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm4',
        title:
          'MODULE 04: IMPLEMENTATION & CONTROL (IC) - THỰC THI, KIỂM SOÁT TMĐT',
        lessons: [
          {
            id: 'l22',
            title: '1. Implementation: Công thức bán hàng Thương Mại Điện Tử',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l23',
            title:
              '2. Implementation: Khởi tạo & thiết lập gian hàng TiktokShop',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l24',
            title: '3. Implementation: Khởi tạo & thiết lập gian hàng Shopee',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l25',
            title: '4. Implementation: Thế nào là 1 gian hàng chuẩn BSS ?',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l26',
            title:
              '5. Implementation: Đặt tiêu đề sản phẩm chuẩn & Tối ưu từ khoá tìm kiếm',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l27',
            title:
              '6. Implementation: Tiêu chuẩn về tối ưu hình ảnh & Video trên sàn',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l28',
            title: '7. Implementation: Các công cụ marketing trên sàn Shopee',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l29',
            title: '8. Implementation: Traffic nội sàn & Traffic ngoại sàn',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l30',
            title: '9. Control: Theo dõi - Đo lường - Kiểm soát - Tối ưu',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l31',
            title: 'BÀI TẬP THỰC HÀNH',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm5',
        title: 'MODULE 05: ECOMMERCE PLANNING: LẬP KẾ HOẠCH TMĐT',
        lessons: [
          {
            id: 'l32',
            title: '1. Xác định mục tiêu SMART',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l33',
            title: '2. Dự báo nhu cầu & tồn kho',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l34',
            title: '3. Commercial plan & Content calendar',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l35',
            title: '4. Phân bổ ngân sách & ROI kỳ vọng',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l36',
            title: '5. Phân công trách nhiệm & timeline',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l37',
            title: '6. Đánh giá rủi ro & Contingency plan',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l38',
            title: 'BÀI TẬP THỰC HÀNH',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l39',
            title: 'TỔNG KẾT',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: 'c3',
    slug: 'zoom-tiktok-livestream-strategy-chien-luoc-livestream-chuyen-doi-cao',
    title:
      '[COMING SOON] TIKTOK LIVESTREAM STRATEGY - CHIẾN LƯỢC LIVESTREAM CHUYỂN ĐỔI CAO',
    category: 'Chiến lược Livestream',
    categorySlug: 'livestream',
    price: 3990000,
    oldPrice: 4990000,
    purchases: 0,
    status: 'active',
    image:
      'https://cqdcllggrqxavzgjexxp.supabase.co/storage/v1/object/public/thumbnails/1782352931-untitled-design-4.png',
    description:
      'Khóa học giúp học viên hiểu toàn diện về xu hướng Livestream TikTok 2026, xây dựng chiến lược livestream bài bản, thiết kế kịch bản chuyển đổi cao, nắm rõ chính sách nền tảng và các yếu tố ảnh hưởng đến hiệu quả livestream để tự tin triển khai hoạt động bán hàng, xây dựng thương hiệu cá nhân hoặc phát triển sự nghiệp trong lĩnh vực Livestream Commerce.',
    longDescription:
      '🎯 BẠN SẼ ĐẠT ĐƯỢC GÌ SAU KHÓA HỌC?\n • Hiểu rõ xu hướng phát triển của ngành Livestream Commerce và cơ hội tăng trưởng trong giai đoạn 2026 - 2027.\n • Nắm vững tư duy xây dựng chiến lược Livestream bài bản từ định vị mục tiêu, khách hàng đến mô hình vận hành thực tế.\n • Biết cách xây dựng kịch bản livestream chuyên nghiệp giúp tăng tương tác, giữ chân người xem và nâng cao tỷ lệ chuyển đổi.\n • Hiểu rõ các chính sách, quy định và thuật toán nền tảng TikTok liên quan đến hoạt động livestream.\n • Nhận diện các yếu tố ảnh hưởng trực tiếp đến hiệu suất livestream như nội dung, nhân sự, thiết bị, sản phẩm và vận hành.\n • Có khả năng tự triển khai hoặc quản lý hoạt động livestream cho cá nhân, doanh nghiệp hoặc thương hiệu.\n • Tự tin livestream trên TikTok và các nền tảng mạng xã hội khác với quy trình chuyên nghiệp và bài bản.\n\n👥 KHÓA HỌC NÀY DÀNH CHO AI?\n • Người mới bắt đầu muốn học Livestream từ nền tảng để phát triển nghề nghiệp hoặc kinh doanh online.\n • Sinh viên và người đi làm quan tâm đến lĩnh vực Livestream, Social Commerce và thương mại điện tử.\n • Người muốn trở thành Freelancer Livestream hoặc ứng tuyển vào các Agency, Media Agency, MCN và doanh nghiệp thương mại điện tử.\n • Chủ shop, nhà bán hàng hoặc doanh nghiệp muốn xây dựng đội ngũ livestream nội bộ nhằm gia tăng doanh số bán hàng.\n • Người đã từng livestream nhưng chưa xây dựng được quy trình vận hành hoặc chưa đạt hiệu quả chuyển đổi mong muốn.\n • Cá nhân muốn phát triển thương hiệu cá nhân thông qua Livestream trên TikTok.\n\n📚 LỘ TRÌNH 5 BUỔI HỌC THỰC CHIẾN QUA ZOOM\n - Buổi 1: Tổng Quan Xu Hướng Livestream 2026\n - Buổi 2: Chiến Lược Livestream\n - Buổi 3: Kịch Bản Livestream Chuyển Đổi Cao\n - Buổi 4: Chính Sách Nền Tảng Và Các Yếu Tố Ảnh Hưởng Đến Livestream Trên TikTok\n - Buổi 5: Tối ưu & Đo lường sau phiên Livestream\n\n🎁 KẾT QUẢ ĐẦU RA SAU KHÓA HỌC\n • Xây dựng được chiến lược Livestream phù hợp với ngành hàng hoặc thương hiệu cá nhân.\n • Hoàn thiện bộ kịch bản Livestream thực chiến có thể triển khai ngay.\n • Hiểu rõ chính sách nền tảng và giảm thiểu rủi ro vi phạm.\n • Nắm được quy trình vận hành Livestream từ A-Z.\n • Sẵn sàng triển khai Livestream bán hàng hoặc xây dựng thương hiệu một cách chuyên nghiệp.\n • Tự tin phát triển nghề nghiệp trong lĩnh vực Livestream Commerce và TikTok Shop.',
    instructor: 'META ECOM UNI',
    lessonsLabel: '23 bài',
    durationLabel: '0m',
    curriculum: [
      {
        id: 'm1',
        title: 'BUỔI 01: TỔNG QUAN XU HƯỚNG LIVESTREAM 2026',
        lessons: [
          {
            id: 'l1',
            title: '1. Giới thiệu tổng quan về Livestream',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l2',
            title:
              '2. Tại sao Livestream trở thành xu hướng dẫn đầu trong TMĐT',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l3',
            title:
              '3. Phân biệt và Xác định mục tiêu phù hợp cho các loại hình Livestream',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l4',
            title: '4. Case Study',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l5',
            title: '5. Thực hành: Xác định mục tiêu Livestream cá nhân',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm2',
        title: 'BUỔI 02: CHIẾN LƯỢC LIVESTREAM',
        lessons: [
          {
            id: 'l6',
            title: '1. Mục tiêu Livestream',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l7',
            title: '2. Hiểu thuật toán để xây dựng chiến lược Livestream',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l8',
            title: '3. Chiến lược sản phẩm',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l9',
            title: '4. Chiến lược giá bán',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l10',
            title: '5. Chiến lược xúc tiến',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l11',
            title: '6. Chiến lược xây dựng concept Livestream theo Campaign',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l12',
            title: '7. Case Study',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm3',
        title: 'BUỔI 03: KỊCH BẢN LIVESTREAM',
        lessons: [
          {
            id: 'l13',
            title: '1. Xây dựng kịch bản Livestream',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l14',
            title: '2. Phân bổ nguồn lực & Ngân sách Livestream',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l15',
            title: '3. Phân tích Case Study: Biểu mẫu Livestream chi tiết',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l16',
            title: '4. Chuẩn bị & Xử lý vấn đề trong Livestream',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l17',
            title: '5. Quản lý rủi ro Livestream',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm4',
        title:
          'BUỔI 04: CHÍNH SÁCH NỀN TẢNG VÀ CÁC YẾU TỐ ẢNH HƯỞNG ĐẾN LIVESTREAM',
        lessons: [
          {
            id: 'l18',
            title: '1. Tổng quan chính sách Livestream trên Tiktok',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l19',
            title: '2. Cập nhật thay đổi chính sách Livestream Tiktok 2026',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l20',
            title: '3. Những lưu ý khi Livestream Tiktok tránh vi phạm',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm5',
        title: 'BUỔI 05: TỐI ƯU, ĐO LƯỜNG VÀ CẢI THIỆN SAU LIVESTREAM',
        lessons: [
          {
            id: 'l21',
            title: '1. Bộ chỉ số Livestream quan trọng cần theo dõi',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l22',
            title: '2. Đánh giá hiệu quả phiên Livestream qua Tiktok Analytics',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l23',
            title: '3. Cải thiện chiến lược Livestream',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: 'c4',
    slug: 'zoom-chien-luoc-xay-kenh-tiktok-duong-toi-top-kolkoc-tu-con-so-0',
    title:
      '[COMING SOON] CHIẾN LƯỢC XÂY KÊNH TIKTOK - ĐƯỜNG TỚI TOP KOL/KOC TỪ CON SỐ 0',
    category: 'TikTok',
    categorySlug: 'tiktok',
    price: 4990000,
    oldPrice: 7990000,
    purchases: 0,
    status: 'active',
    image:
      'https://cqdcllggrqxavzgjexxp.supabase.co/storage/v1/object/public/thumbnails/1782352669-untitled-design-3.png',
    description:
      'Khóa học giúp bạn hiểu rõ thuật toán TikTok để tiếp cận người xem miễn phí, xây dựng hồ sơ kênh chuẩn thương hiệu, xác định ngách nội dung phù hợp, viết kịch bản video triệu view, tự quay dựng video chuyên nghiệp bằng điện thoại và triển khai TikTok Ads hiệu quả nhằm gia tăng độ phủ và phát triển thương hiệu cá nhân bền vững.',
    longDescription:
      '🎯 BẠN SẼ ĐẠT ĐƯỢC GÌ SAU KHÓA HỌC?\n\n• Hiểu rõ cách TikTok vận hành: Nắm vững thuật toán phân phối nội dung, hành vi người dùng và cơ chế giúp video tiếp cận hàng nghìn người xem hoàn toàn miễn phí.\n\n• Xây dựng kênh TikTok chuẩn thương hiệu cá nhân: Biết cách định vị bản thân, tối ưu tên kênh, avatar, bio và tạo nền tảng vững chắc để phát triển lâu dài.\n\n• Xác định đúng ngách nội dung & khách hàng mục tiêu: Tìm ra chủ đề phù hợp với năng lực, sở thích và nhu cầu thị trường để xây dựng kênh bền vững.\n\n• Làm chủ công thức xây dựng nội dung triệu view: Biết cách lên ý tưởng, viết kịch bản, tạo Hook thu hút, giữ chân người xem và gia tăng tương tác hiệu quả.\n\n• Tự quay dựng video chuyên nghiệp bằng điện thoại: Thành thạo các nguyên tắc quay phim, ánh sáng, góc máy và chỉnh sửa video bằng CapCut.\n\n• Biết cách triển khai TikTok Ads hiệu quả: Tăng lượt xem, lượt theo dõi và độ nhận diện thương hiệu với chi phí tối ưu.\n\n• Xây dựng tư duy phát triển kênh KOL/KOC bài bản: Có lộ trình rõ ràng để phát triển thương hiệu cá nhân, mở rộng cơ hội kinh doanh và tạo nguồn thu trên TikTok.\n\n👥 KHÓA HỌC NÀY DÀNH CHO AI?\n\n• Người mới bắt đầu muốn xây dựng kênh TikTok từ con số 0 nhưng chưa biết bắt đầu từ đâu.\n\n• Chủ doanh nghiệp, chủ shop hoặc người kinh doanh muốn tăng nhận diện thương hiệu và tìm kiếm khách hàng mới trên TikTok.\n\n• Chuyên gia, nhà đào tạo, người làm dịch vụ muốn xây dựng thương hiệu cá nhân và khẳng định vị thế trong lĩnh vực của mình.\n\n• KOL, KOC hoặc Content Creator muốn phát triển nội dung chuyên nghiệp và gia tăng sức ảnh hưởng trên nền tảng.\n\n• Nhân sự Marketing, Truyền thông hoặc Digital Marketing muốn bổ sung kỹ năng xây dựng và phát triển kênh TikTok thực chiến.\n\n📚 LỘ TRÌNH 5 BUỔI HỌC THỰC CHIẾN QUA ZOOM\n\n• Buổi 1: Khám phá nền tảng TikTok & Xây dựng hồ sơ kênh chuẩn Brand\n\n• Buổi 2: Định hướng nội dung, xác định ngách & khách hàng mục tiêu\n\n• Buổi 3: Công thức xây dựng kịch bản triệu view & phát triển Content Viral\n\n• Buổi 4: Thực chiến quay dựng video chuyên nghiệp bằng điện thoại và CapCut\n\n• Buổi 5: Triển khai TikTok Ads tăng lượt xem, lượt theo dõi & quảng bá thương hiệu hiệu quả',
    instructor: 'META ECOM UNI',
    lessonsLabel: '32 bài',
    durationLabel: '0m',
    curriculum: [
      {
        id: 'm1',
        title: 'BUỔI 01: KHÁM PHÁ NỀN TẢNG TIKTOK',
        lessons: [
          {
            id: 'l1',
            title: '1. So sánh Tiktok - Shopee - Facebook',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l2',
            title: '2. Những cách kiếm tiền trên Tiktok',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l3',
            title: '3. Tìm hiểu về thuật toán phân phối của Tiktok',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l4',
            title: '4. Tư duy setup tài khoản kênh chuẩn chỉnh',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l5',
            title: '5. Phân tích hai loại tài khoản',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm2',
        title: 'BUỔI 2: ĐỊNH HƯỚNG NỘI DUNG KÊNH TIKTOK',
        lessons: [
          {
            id: 'l6',
            title: '1. Những hướng đi trong xây dựng nội dung kênh',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l7',
            title: '2. Top 20 chủ đề phổ biến',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l8',
            title: '3. Phác hoạ chân dung khách hàng mục tiêu',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l9',
            title: '4. Xác định dung lượng thị trường bằng Tiktok Ads',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l10',
            title: '5. Xác định USP',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l11',
            title: '6. Tìm hiểu về Key Person',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l12',
            title: '7. Top 6 định dạng dễ lên xu hướng',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm3',
        title: 'BUỔI 3: CÔNG THỨC KỊCH BẢN TRIỆU VIEWS',
        lessons: [
          {
            id: 'l13',
            title: '1. Content là gì ?',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l14',
            title: '2. Thế nào là một Content hiệu quả ?',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l15',
            title: '3. Yếu tố tạo nên kênh thương hiệu viral',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l16',
            title: '4. Bộ thông tin cần có của một kịch bản chuẩn chỉnh',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l17',
            title: '5. Signature - Yếu tố không thể thiếu',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l18',
            title: '6. Những sai lầm khi viết content',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l19',
            title: '7. Những nguồn cung cấp ý tưởng',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm4',
        title: 'BUỔI 4: QUAY VIDEO VÀ EDIT VIDEO CHUYÊN NGHIỆP',
        lessons: [
          {
            id: 'l20',
            title: '1. Giới thiệu thiết bị quay cơ bản và chuyên nghiệp',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l21',
            title:
              '2. Phân biệt các loại Camera: Camera Tiktok hay Camera thường',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l22',
            title: '3. Ánh sáng - Yếu tố quan trọng nhất',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l23',
            title: '4. Tổng hợp bộ quy tắc quay dựng cho bộ video chuẩn chỉnh',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l24',
            title: '5. Những phần mềm edit phổ biến',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l25',
            title: '6. Quy trình edit Video cơ bản',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm5',
        title: 'BUỔI 5: QUẢNG BÁ THƯƠNG HIỆU BẰNG TIKTOK ADS',
        lessons: [
          {
            id: 'l26',
            title: '1. Tiktok Ads là gì ?',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l27',
            title: '2. Cách chạy quảng cáo bằng điện thoại',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l28',
            title: '3. Cách chạy quảng cáo bằng trình duyệt',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l29',
            title: '4. Các loại tài khoản Tiktok Ads',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l30',
            title: '5. Đăng ký tài khoản Tiktok Ads & Nạp tiền',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l31',
            title: '6. Hiểu về mục tiêu & chiến dịch',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l32',
            title: '7. Chiến lược chạy Ads bài bản',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: 'c5',
    slug: 'zoom-ban-hang-shopee-tu-amateur-den-top-seller',
    title: '[COMING SOON] BÁN HÀNG SHOPEE - TỪ AMATEUR ĐẾN TOP SELLER',
    category: 'Shopee',
    categorySlug: 'shopee',
    price: 5990000,
    oldPrice: 8990000,
    purchases: 0,
    status: 'active',
    image:
      'https://cqdcllggrqxavzgjexxp.supabase.co/storage/v1/object/public/thumbnails/1782287263-untitled-design-2.png',
    description:
      'Khóa học thực chiến qua Zoom từ A-Z giúp làm chủ nền tảng Shopee, xây dựng gian hàng chuẩn SEO, tối ưu công cụ marketing nội sàn và thiết lập quy trình vận hành tự động bùng nổ doanh số.',
    longDescription:
      '🎯 BẠN SẼ ĐẠT ĐƯỢC GÌ SAU KHÓA HỌC?\n• Hiểu rõ bản chất nền tảng Shopee: Nắm vững cơ chế vận hành, thuật toán phân phối và hành vi mua sắm của khách hàng trên sàn.\n• Thực chiến xây dựng gian hàng: Tự tin thiết lập, tối ưu hóa giao diện và vận hành một shop chuyên nghiệp (từ tạo tài khoản, đăng sản phẩm chuẩn SEO, viết nội dung đến quản lý đơn hàng).\n• Làm chủ công cụ Marketing & Tăng trưởng doanh số: Nắm vững kiến thức SEO sàn, các công cụ quảng cáo, marketing nội sàn để kéo traffic và chuyển đổi tối đa.\n• Đột phá doanh thu với xu hướng mới: Biết cách triển khai Livestream và Video Marketing (Shopee Video), đồng thời tuân thủ đúng các chính sách cốt lõi để bảo vệ gian hàng.\n• Tư duy chiến lược dài hạn: Sở hữu tư duy bán hàng bài bản, xây dựng kế hoạch kinh doanh, đọc hiểu báo cáo và chuẩn hóa quy trình vận hành tối ưu chi phí.\n\n👥 KHÓA HỌC NÀY DÀNH CHO AI?\n• Người mới bắt đầu muốn khởi nghiệp kinh doanh online trên Shopee từ con số 0.\n• Nhà bán hàng đã có gian hàng trên Shopee nhưng doanh số còn thấp, chưa biết cách tối ưu để bứt phá.\n• Chủ shop Offline muốn dịch chuyển, mở rộng kênh bán hàng lên Online để đa dạng hóa nguồn thu.\n• Nhân sự vận hành thương mại điện tử muốn nâng cao chuyên môn, chuẩn hóa nghiệp vụ phòng ban.\n• Người kinh doanh tự do muốn xây dựng một hệ thống bán hàng bài bản, vận hành ổn định và bền vững trên Shopee.\n\n📚 LỘ TRÌNH 5 BUỔI HỌC THỰC CHIẾN QUA ZOOM:\n• Buổi 1: Tổng quan Shopee & Thuật toán nền tảng\n• Buổi 2: Xây dựng gian hàng chuẩn Brand - SEO - Sale\n• Buổi 3: Bán hàng trên Shopee - Tối ưu Công cụ Marketing nội sàn\n• Buổi 4: Xây dựng kế hoạch kinh doanh & Đọc hiểu Báo cáo tài chính\n• Buổi 5: Thực chiến Livestream & Video Shopee / Cập nhật Chính sách nền tảng',
    instructor: 'META ECOM UNI',
    lessonsLabel: '18 bài',
    durationLabel: '0m',
    curriculum: [
      {
        id: 'm1',
        title: 'BUỔI 01: TỔNG QUAN SHOPEE',
        lessons: [
          {
            id: 'l1',
            title: '1. Tổng quan Shopee 2026',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l2',
            title: '2. Hướng dẫn Đăng ký & Xác minh tài khoản',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l3',
            title: '3. Thiết lập Seller Center',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l4',
            title: '4. Cập nhật chính sách Shopee 2026',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm2',
        title: 'BUỔI 02: XÂY DỰNG GIAN HÀNG CHUẨN BRAND - SEO - SALE',
        lessons: [
          {
            id: 'l5',
            title: '1. Thiết lập hồ sơ gian hàng chuẩn Brand',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l6',
            title:
              '2. Tối ưu tên sản phẩm lên top tìm kiếm/ Viết mô tả sản phẩm bán hàng',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l7',
            title: '3. Chụp ảnh & Dàn dựng hình ảnh sản phẩm',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l8',
            title: '4. Chiến lược định giá cạnh tranh',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm3',
        title: 'BUỔI 03: BÁN HÀNG TRÊN SHOPEE - CÔNG CỤ MARKETING NỘI SÀN',
        lessons: [
          {
            id: 'l9',
            title: '1. Tổng quan hệ thống công cụ Marketing Shopee',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l10',
            title: '2. Thiết lập Voucher & Mã giảm giá',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l11',
            title: '3. Đăng ký Flash Sale Shopee Official',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l12',
            title: '4. Shopee Ads - GMV MAX',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l13',
            title: '5. Lịch khuyến mãi theo mùa & sự kiện lớn',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm4',
        title: 'BUỔI 04: XÂY DỰNG KẾ HOẠCH & BÁO CÁO',
        lessons: [
          {
            id: 'l14',
            title: '1. Bộ KPIs quan trọng cần theo dõi hàng tuần',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l15',
            title: '2. Phân tích sản phẩm & Tối ưu danh mục',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l16',
            title: '3. Xây dựng kế hoạch bán hàng theo tháng',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm5',
        title: 'BUỔI 05: LIVESTREAM & VIDEO SHOPEE',
        lessons: [
          {
            id: 'l17',
            title: '1. Tổng quan Livestream & Video Shopee 2026',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l18',
            title: '2. Setup Live và Thiết bị cơ bản',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: 'c6',
    slug: 'ban-hang-tiktok-shop-tu-amateur-den-top-seller',
    title: '[COMING SOON] BÁN HÀNG TIKTOK SHOP - TỪ AMATEUR ĐẾN TOP SELLER',
    category: 'TikTok',
    categorySlug: 'tiktok',
    price: 4990000,
    oldPrice: 6990000,
    purchases: 0,
    status: 'active',
    image:
      'https://cqdcllggrqxavzgjexxp.supabase.co/storage/v1/object/public/thumbnails/1782286128-jkjkj.png',
    description:
      'Khóa học thực chiến từ A-Z giúp chuẩn hóa vận hành TikTok Shop, làm chủ video/livestream doanh thu đột phá và tối ưu chi phí cho chủ doanh nghiệp, KOC/KOL.',
    longDescription:
      '🎯 BẠN SẼ ĐẠT ĐƯỢC GÌ SAU KHÓA HỌC?\n• Thiết lập gian hàng TikTok Shop đúng chuẩn, sẵn sàng bùng nổ đơn hàng ngay sau buổi đầu tiên.\n• Xây dựng kênh TikTok có định hướng rõ ràng, sở hữu công thức sản xuất video bán hàng chuyển đổi cao.\n• Tự tin lên kịch bản, vận hành phiên Livestream chuyên nghiệp từ khâu chuẩn bị, chốt đơn đến xử lý hậu kỳ.\n• Đọc hiểu chỉ số báo cáo, làm chủ dòng tiền, đối soát tài chính và thiết lập kế hoạch tăng trưởng doanh thu bền vững.\n\n👥 KHÓA HỌC NÀY DÀNH CHO AI?\n• Người mới bắt đầu muốn khởi nghiệp kinh doanh online trên TikTok Shop bài bản.\n• Chủ shop, chủ doanh nghiệp (Offline & Online) muốn mở rộng kênh, đa dạng hóa nguồn thu nhập.\n• Nhân sự vận hành TMĐT muốn chuẩn hóa kiến thức chuyên môn và nâng cao hiệu suất phòng ban.\n• Content Creator / KOC / KOL muốn chuyển hóa lượng follow thành doanh số thực tế qua Affiliate hoặc tự bán hàng.\n\n📚 LỘ TRÌNH 5 BUỔI HỌC THỰC CHIẾN:\n• Buổi 1: Tổng quan & Thiết lập TiktokShop từ A - Z\n• Buổi 2: Xây dựng kênh Tiktok & Hệ sinh thái nội dung bán hàng\n• Buổi 3: Vận hành Livestream bán hàng chuyên nghiệp\n• Buổi 4: TikTok Ads & Chiến lược Quảng cáo Hiệu Quả\n• Buổi 5: Phân tích dữ liệu, Đối soát tài chính & Tối ưu doanh thu',
    instructor: 'META ECOM UNI',
    lessonsLabel: '18 bài',
    durationLabel: '0m',
    curriculum: [
      {
        id: 'm1',
        title: 'BUỔI 01: TỔNG QUAN & THIẾT LẬP TIKTOKSHOP A - Z',
        lessons: [
          {
            id: 'l1',
            title:
              '1. Xu hướng kinh doanh trên TiktokShop 2026 - Cơ hội & Thách thức',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l2',
            title:
              '2. Tổng hợp mô hình kinh doanh phổ biến trên TiktokShop 2026',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l3',
            title:
              '3. Đăng ký xác minh tài khoản trên TiktokShop [Cá nhân & Doanh nghiệp]',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l4',
            title:
              '4. Thiết lập gian hàng chuẩn chỉnh: Logo - Banner - Danh mục - Chính sách Shop',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l5',
            title:
              '5. Các chính sách quan trọng & Lỗi vi phạm cần tránh ngay từ đầu',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm2',
        title: 'BUỔI 02: XÂY DỰNG KÊNH TIKTOK & HỆ SINH THÁI NỘI DUNG BÁN HÀNG',
        lessons: [
          {
            id: 'l6',
            title: '1. Thiết lập hồ sơ gian hàng chuẩn Brand',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l7',
            title:
              '2. Định hướng nội dung kênh: Chọn ngách - Xác định USP - Chân dung khách hàng',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l8',
            title:
              '3. Công thức viết kịch bản video bán hàng: Hook 3s - Nội dung - CTA',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l9',
            title:
              '4. Xây dựng hệ sinh thái: Short Video - Livestream - Affiliate phối hợp',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm3',
        title: 'BUỔI 3: VẬN HÀNH LIVESTREAM BÁN HÀNG CHUYÊN NGHIỆP',
        lessons: [
          {
            id: 'l10',
            title: '1. Giới thiệu về Livestream Tiktok',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l11',
            title: '2. Tất tần tật về kỹ thuật Setup phòng Livestream bài bản',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l12',
            title: '3. Kỹ năng Livestream ngàn đơn',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l13',
            title:
              '4. Chiến lược kéo Traffic vào phiên Livestream: Seeding, hẹn giờ, Quảng cáo,....',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l14',
            title: '5. Đọc báo cáo sau Live & Tối ưu phiên tiếp theo',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm4',
        title: 'BUỔI 4: TIKTOK ADS & CHIẾN LƯỢC QUẢNG CÁO HIỆU QUẢ',
        lessons: [
          {
            id: 'l15',
            title:
              '1. Phân biệt quảng cáo qua điện thoại (Promote) & Tiktok Ads Manager',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l16',
            title: '2. Tiktok Ads - GMV MAX',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
      {
        id: 'm5',
        title:
          'BUỔI 5: PHÂN TÍCH DỮ LIỆU, ĐỐI SOÁT TÀI CHÍNH & TỐI ƯU DOANH THU',
        lessons: [
          {
            id: 'l17',
            title: '1. Nắm chắc bộ KPIs cốt lõi: Views, CVR, AOV, ROAS,...',
            duration: '0m',
            isPreview: false,
          },
          {
            id: 'l18',
            title: '2. Phân tích hiệu suất sản phẩm từng phiên Livestream',
            duration: '0m',
            isPreview: false,
          },
        ],
      },
    ],
  },
];

export const courseCategories = [
  {
    slug: 'all',
    label: 'Tất cả khóa học',
  },
  {
    slug: 'livestream',
    label: 'Chiến lược Livestream',
  },
  {
    slug: 'tiktok',
    label: 'TikTok',
  },
  {
    slug: 'shopee',
    label: 'Shopee',
  },
  {
    slug: 'ecom-foundation',
    label: 'Ecom Foundation',
  },
] as const;

export const priceRange = {
  min: 0,
  max: 15000000,
  step: 500000,
};

export function findCourse(
  courses: Course[],
  slug: string,
): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
