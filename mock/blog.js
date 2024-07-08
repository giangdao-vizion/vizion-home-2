export const categoryUrlMock = {
  DIGITAL_MARKETING: "digital-marketing",
  STORIES: "stories"
}

export const blogListMock = [
  {
    id: 1,
    category: 'Digital Marketing',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/9-5-bai-chuyen-doi-so.jpg',
    linkBlogUrl: `/bai-viet/${categoryUrlMock.DIGITAL_MARKETING}/1`,
    linkCategoryUrl: `/${categoryUrlMock.DIGITAL_MARKETING}`,
    tag: '',
    title: 'Chuyển đổi số - Nâng tầm trải nghiệm bức phá doanh thu',
    desc: 'Trong thời đại công nghệ phát triển như vũ bão, chuyển đổi số đã trở thành xu hướng tất yếu cho mọi lĩnh vực, mang đến những thay đổi to lớn trong cách thức hoạt động và cách tiếp cận. Nắm bắt xu hướng này, các doanh nghiệp đang đẩy mạnh ứng dụng công nghệ',
  },
  {
    id: 2,
    category: 'Digital Marketing',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/Screenshot-2024-04-25-111647-2.png',
    linkBlogUrl: `/bai-viet/${categoryUrlMock.DIGITAL_MARKETING}/2`,
    linkCategoryUrl: `/${categoryUrlMock.DIGITAL_MARKETING}`,
    tag: '',
    title: 'Showroom 3D mở ra bước ngoặc mới trong nghành',
    desc: 'Thị trường xe hơi đang thay đổi từng ngày, và các đối thủ cạnh tranh luôn tìm kiếm những cách mới để tiếp cận khách hàng. Trong những năm gần đây, các tour tham quan ảo nổi lên như một giải pháp mang đến trải nghiệm toàn diện và chân thực hơn về xe cho',
  },
  {
    id: 3,
    category: 'Digital Marketing',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/MARCH-1.png',
    linkBlogUrl: `/bai-viet/${categoryUrlMock.DIGITAL_MARKETING}/3`,
    linkCategoryUrl: `/${categoryUrlMock.DIGITAL_MARKETING}`,
    tag: '',
    title: 'VIRTUAL TOUR 360 - TỐI ƯU HÓA CHIẾN LƯỢC SALES & MARKETING',
    desc: 'Cùng khám phá chìa khóa mở ra tương lai của lĩnh vực Sales & Marketing với công nghệ Virtual tour 360 độc đáo. Một cách thức mới giúp doanh nghiệp thu hút khách hàng thay vì những hình ảnh 2D tĩnh, thời đại công nghệ số đã mang đến một công cụ thông minh giúp',
  },
  {
    id: 4,
    category: 'Digital Marketing',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/xe.png',
    linkBlogUrl: `/bai-viet/${categoryUrlMock.DIGITAL_MARKETING}/4`,
    linkCategoryUrl: `/${categoryUrlMock.DIGITAL_MARKETING}`,
    tag: '',
    title: 'Showroom 3D: A Game Changer for Car Dealerships and Agents',
    desc: 'The automotive industry is constantly evolving, and businesses are always looking for new ways to reach their customers. In recent years, virtual tours have become increasingly popular as a way to provide potential buyers with a comprehensive and immersive experience of a dealership’s inventory. The Challenges of Traditional Showrooming. Traditional showrooming can be a',
  },
  {
    id: 5,
    category: 'Stories',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/Screenshot-104-1.png',
    linkBlogUrl: `/bai-viet/${categoryUrlMock.STORIES}/5`,
    linkCategoryUrl: `/${categoryUrlMock.STORIES}`,
    tag: '',
    title: 'The Benefits of Virtual Tours in Manufacturing and Factory Management',
    desc: 'In today’s competitive marketplace, building trust with customers is a major challenge for businesses. This is especially true when customers cannot physically experience a company’s products or production processes. That’s where virtual tours come in. By using modern 3D technology, virtual tours can provide customers with a realistic and immersive experience that is',
  },
  {
    id: 6,
    category: 'Stories',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/Picture12.jpg',
    linkBlogUrl: `/bai-viet/${categoryUrlMock.STORIES}/6`,
    linkCategoryUrl: `/${categoryUrlMock.STORIES}`,
    tag: '',
    title: 'WHY SUCCESS SOFTWARE CHOSE VIZION AS ITS TRUSTED PARTNER FOR BRANDING JOURNEY?',
    desc: 'In today’s increasingly diverse business world, with new companies popping up like mushrooms in different forms, it is inevitable that some will be overshadowed. This highlights the importance of a strong branding strategy. Success Software Services was founded in 2012 and has over 12 years of experience providing effective software services to clients',
  },
  {
    id: 7,
    category: 'Stories',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/blog-3.png',
    linkBlogUrl: `/bai-viet/${categoryUrlMock.STORIES}/7`,
    linkCategoryUrl: `/${categoryUrlMock.STORIES}`,
    tag: '',
    title: 'VIRTUAL TOUR 360 – OPTIMIZE YOUR SALES & MARKETING STRATEGY',
    desc: 'Embark on the future of marketing and sales with virtual tours, reshaping the way businesses captivate their audience. Moving beyond static 2D images, innovative technology has revolutionized the realm of sales and marketing, enhancing customer experiences through unique interactive features.   Discover a new era of showcasing products and spaces that goes beyond the ordinary, capturing',
  },
];

/**
 * {
 *  [SECTION_TYPE]: "any value"
 *  extra: {
 *    [SECTION_TYPE]: "any value"
 *  }
 * }
 */
export const blogDetailPagesMock = [
  {
    id: 1,
    title: "Chuyển đổi số - Nâng tầm trải nghiệm bức phá doanh thu",
    bannerImg: "/assets/images/vizion/blogs/9-5-bai-chuyen-doi-so.jpg",
    category: 'Digital Marketing',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    sections: [
      {
        p: "Trong thời đại công nghệ phát triển như vũ bão, chuyển đổi số đã trở thành xu hướng tất yếu cho mọi lĩnh vực, mang đến những thay đổi to lớn trong cách thức hoạt động và cách tiếp cận. Nắm bắt xu hướng này, các doanh nghiệp đang đẩy mạnh ứng dụng công nghệ vào hoạt động kinh doanh, tạo ra những đột phá mang đến hiệu quả và năng suất."
      },
      {
        p: "Trong khi đó, Virtual Tour (Tour thực tế ảo) nổi lên như một công nghệ đột phá, đóng vai trò quan trọng trong quá trình chuyển đổi số, đặc biệt là trong việc <strong>số hóa không gian.<\/strong>"
      },
      {
        img: "/assets/images/vizion/blogs/chueyern-doi-so.png"
      },
      {
        h1: "Virtual Tour Là Gì?",
      },
      {
        p: "Virtual Tour là công nghệ mô phỏng thực tế ảo cho phép người dùng trải nghiệm một địa điểm thực tế. Tour ảo được tạo bằng cách chụp ảnh 360 độ hoặc quay video 360 độ của địa điểm, sau đó kết hợp với các kỹ thuật lập trình để tạo ra môi trường tương tác."
      },
      {
        h1: "Xu Hướng Ứng Dụng Virtual Tour Trong Chuyển Đổi Số",
      },
      {
        p: "Virtual Tour đóng vai trò quan trọng trong quá trình chuyển đổi số, giúp số hóa không gian một cách chân thực và sống động. Doanh nghiệp có thể ứng dụng Virtual Tour vào nhiều lĩnh vực khác nhau, bao gồm:",
      },
      {
        ul: [
          {
            p: "<strong>Bất động sản:<\/strong> Giới thiệu nhà cửa, chung cư, biệt thự người mua một cách thuận tiện, không cần đến trực tiếp nhưng vẫn đảm bảo tính chân thực.",
          },
          {
            p: "<strong>Sản xuất:<\/strong> Giúp khách hàng, đối tác và nhà đầu tư tham quan nhà máy từ xa mà không cần di chuyển trực tiếp. Không gian thông minh hổ trợ đào tạo nhân viên, giám sát hoạt động sản xuất, giới thiệu nhà máy đến khách hàng.",
          },
          {
            p: "<strong>Giáo dục:<\/strong> Hổ trợ trong việc tuyển sinh của trường, người học có thể tham quan trường học trực tuyến trước khi chọn ngôi trường mong muốn. Đồng thời giúp nhà trường thể hiện thế mạnh của trường, từ đó thu hút học viên một cách ấn tượng.",
          },
          {
            p: "<strong>Showroom 3D:<\/strong> Giúp khách hàng trải nghiệm sản phẩm tại showroom qua góc nhìn 360 độ, Virtual Tour mang đến trải nghiệm tương tác và chân thực, giúp khách hàng hiểu rõ hơn về sản phẩm, dịch vụ và đưa ra quyết định mua hàng dễ dàng hơn."
          }
        ]
      },
      {
        h1: "Lợi Ích Của Virtual Tour",
      },
      {
        ul: [
          {
            p: "<strong>Nâng cao trải nghiệm khách hàng:<\/strong> Virtual Tour mang đến trải nghiệm tương tác và độc đáo, giúp khách hàng hiểu rõ hơn về sản phẩm, dịch vụ và đưa ra quyết định mua hàng dễ dàng hơn. Trải nghiệm Virtual Tour độc đáo và ấn tượng sẽ giúp tăng sự hài lòng của khách hàng, từ đó giữ chân khách hàng và thúc đẩy họ quay lại."
          },
          {
            p: "<strong>Tiết kiệm chi phí:<\/strong> Virtual Tour thay thế cho các ấn phẩm truyền thống như brochure, catalogue, bản đồ, v.v., giúp doanh nghiệp tiết kiệm chi phí in ấn, thiết kế và phân phối. Cho phép khách hàng tham quan nhà máy, showroom, hoặc bất kỳ địa điểm nào từ xa mà không cần di chuyển trực tiếp, giúp doanh nghiệp tiết kiệm chi phí di chuyển."
          },
          {
            p: "<strong>Tăng hiệu quả marketing:<\/strong> Virtual Tour mang đến trải nghiệm chân thực, giúp thu hút khách hàng tiềm năng đến với sản phẩm, dịch vụ của doanh nghiệp. Khách hàng có thể dễ dàng tìm hiểu thông tin chi tiết về sản phẩm, dịch vụ thông qua Virtual Tour, từ đó tăng khả năng mua hàng. Ngoài ra, Virtual Tour giúp giới thiệu hình ảnh và uy tín của doanh nghiệp một cách chuyên nghiệp và ấn tượng, góp phần nâng cao thương hiệu trên thị trường."
          },
        ],
        extra: {
          img: "/assets/images/vizion/blogs/Screenshot_2024-05-07_165915-removebg-preview-1.png",
        }
      },
      {
        p: "Hãy bắt đầu hành trình chuyển đổi số của bạn ngay hôm nay cùng Virtual Tour!"
      },
    ]
  },
  {
    id: 2,
    category: 'Digital Marketing',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    bannerImg: '/assets/images/vizion/blogs/Screenshot-2024-04-25-111647-2.png',
    title: 'Showroom 3D mở ra bước ngoặc mới trong nghành',
    sections: [
      {
        p: "Thị trường xe hơi đang thay đổi từng ngày, và các đối thủ cạnh tranh luôn tìm kiếm những cách mới để tiếp cận khách hàng. Trong những năm gần đây, các tour tham quan ảo nổi lên như một giải pháp mang đến trải nghiệm toàn diện và chân thực hơn về xe cho khách hàng tiềm năng."
      },
      {
        h1: "Những Thách Thức Của Phòng Trưng Bày Truyền Thống"
      },
      {
        ul: [
          {
            p: "Rào cản về thời gian & khoảng cách địa lý: sự ràng buộc khiến khách hàng mất đi sự linh hoạt khi phải sắp xếp thời gian đi một quãng đường dài để đến đại lý xe. Từ đó dẫn đến việc mất cơ hội bán hàng."
          },
          {
            p: "Không gian giới hạn: Phòng trưng bày truyền thống thường bị hạn chế về mặt diện tích. Điều này dẫn đến việc trưng bày đa dạng các mẫu mã của xe trở nên vô cùng khó khăn."
          }
        ]
      },
      {
        img: "/assets/images/vizion/blogs/Screenshot-2024-04-25-111647.png"
      },
      {
        h1: "Showroom 3D – Giải Pháp Đột Phá"
      },
      {
        p: "Chính vì những thách thức đó mà ngành công nghiệp ô tô đang trải qua một cuộc cách mạng kỹ thuật số, và các đại lý xe hơi là những người đi đầu trong sự thay đổi này. Qua rồi cái thời chỉ dựa vào các phòng trưng bày truyền thống, đến với Showroom 3D – một bước ngoặt lớn trong ngành công nghiệp ô tô. Bằng cách tạo ra một trải nghiệm tương tác độc đáo trong không gian trực tuyến, giúp khách hàng làm chủ hành trình của mình, đồng thời các đại lý xe hơi cũng tiếp cận được nhiều khách hàng hơn và cuối cùng là thúc đẩy doanh số bán hàng."
      },
      {
        h1: "Như Vậy, Showroom 3D Là Gì?",
      },
      {
        p: "Phòng trưng bày 3D là một bản sao kỹ thuật số của một không gian thực tế. Nó được tạo ra bằng cách kết hợp hình ảnh hoặc video 360 độ. Khách hàng có thể truy cập vào các tour tham quan ảo trên nhiều thiết bị khác nhau, bao gồm máy tính, điện thoại, ipads,…"
      },
      {
        img: "/assets/images/vizion/blogs/Screenshot-2024-04-25-110344.png"
      },
      {
        h1: "Làm Thế Nào Để Tạo Ra Một Showroom 3D?",
      },
      {
        p: "Một phương pháp phổ biến là sử dụng camera 360 độ để chụp ảnh không gian. Những hình ảnh này sau đó được ghép lại với nhau để tạo thành một tour tham quan liền mạch."
      },
      {
        h1: "Những Lợi Ích Của Showroom 3D",
      },
      {
        ul: [
          {
            p: "Tiết kiệm chi phí với phòng trưng bày vô tận: giúp đại lý tiết kiệm một khoảng chi phí lớn để mở rộng diện tích khi có thể trưng bày toàn bộ kho xe trong một không gian kỹ thuật số chuyên nghiệp. Khách hàng có thể khám phá đa dạng các mẫu mã xe, từ sedan phổ biến đến SUV hạng sang dù ở bất cứ đâu."
          },
          {
            p: "Tương tác cao hơn: Vượt xa hình ảnh và video tĩnh, showroom 3D cho phép khách hàng tương tác với các tiện nghi của xe một cách chân thực. Có thể mở cửa khám phá nội thất, tùy chỉnh các tính năng, tùy thuộc vào nhu cầu của khách hàng."
          },
          {
            p: "Độ tiếp cận toàn cầu: Phá vỡ rào cản địa lý và tiếp cận khách hàng ở bất cứ đâu. Bằng cách cung cấp trải nghiệm hấp dẫn và tiện lợi hơn, phòng trưng bày 3D có thể dẫn đến tỷ lệ chuyển đổi cao hơn và tạo ra nhiều khách hàng tiềm năng hơn."
          },
          {
            p: "Nổi bật so với đối thủ cạnh tranh: Bắt kịp công nghệ tiên tiến và tạo sự khác biệt so với các đại lý khác. Showroom 3D thể hiện sự nhạy bén với cái mới, hướng tới tương lai và cam kết cung cấp trải nghiệm khách hàng tuyệt vời."
          }
        ]
      },
      {
        img: "/assets/images/vizion/blogs/Screenshot-2024-04-25-111450.png"
      },
      {
        p: "Tương lai của showroom xe chắc chắn là 3D. Bằng cách nắm bắt công nghệ này, các đại lý và nhân viên bán hàng có thể mở khóa kỷ nguyên mới về thu hút khách hàng, thúc đẩy doanh số và dẫn đầu trong bối cảnh ngành công nghiệp ô tô luôn phát triển."
      },
      {
        p: "Vậy, bạn đã sẵn sàng bước vào tương lai của showroom xe chưa?"
      }
    ]
  },
  {
    id: 3,
    category: 'Digital Marketing',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/MARCH-1.png',
    title: 'VIRTUAL TOUR 360 - TỐI ƯU HÓA CHIẾN LƯỢC SALES & MARKETING',
    sections: [
      {
        p: "Cùng khám phá chìa khóa mở ra tương lai của lĩnh vực Sales & Marketing với công nghệ Virtual tour 360 độc đáo. Một cách thức mới giúp doanh nghiệp thu hút khách hàng thay vì những hình ảnh 2D tĩnh, thời đại công nghệ số đã mang đến một công cụ thông minh giúp nâng cao trải nghiệm của khách hàng thông qua các tính năng tương tác vô cùng bắt mắt."
      },
      {
        img: "/assets/images/vizion/blogs/MARCH.png"
      },
      {
        p: "Vượt xa những điều thường thấy, khơi dậy sự tò mò theo những cách mà các phương pháp truyền thống không thể làm được. Đắm chìm trong không gian thực tế ảo khiến việc tham quan không đơn thuần chỉ là những hình ảnh tĩnh mà còn là một hành trình tương tác được cá nhân hóa với đa dạng góc nhìn, tạo nền tảng cho một hành trình khám phá vô song về những gì doanh nghiệp của bạn có thể mang lại."
      },
      {
        h1: "VIRTUAL TOUR 360 LÀ GÌ?"
      },
      {
        p: "Chuyến tham quan 360 áp dụng công nghệ tiên tiến để tạo ra một showcase có thể đáp ứng nhu cầu thực tế và tiện lợi cho khách hàng. Không giống những hình ảnh 2D tĩnh, bằng các thiết bị thông dụng như điện thoại, ipads, laptop,.. công nghệ này cho phép người dùng tùy ý điều hướng và khám phá mọi thứ như thể họ đang có mặt trực tiếp. Đây là một công cụ mạnh mẽ cho các doanh nghiệp muốn giới thiệu không gian của họ lên các nền tảng xã hội, dù đó là bất động sản, nhà máy, địa điểm du lịch, khách sạn hay bán lẻ,.."
      },
      {
        img: "/assets/images/vizion/blogs/Picture3.png"
      },
      {
        h1: "CÁCH THỨC HOẠT ĐỘNG",
      },
      {
        p: "Có thể hiểu đơn giản, Tour tham quan 3D được tạo ra bằng cách kết hợp những hình ảnh panorama lại với nhau. Những bức ảnh này có thể được chụp bằng máy ảnh hoặc điện thoại ở nhiều góc độ và sau đó sẽ được ghép lại với nhau để tạo ra một chuyến tham quan liền mạch."
      },
      {
        h1: "CÁC TÍNH NĂNG CHÍNH CỦA MỘT TOUR 3D"
      },
      {
        p: "<strong>Góc nhìn 360 độ thực tế:<\/strong> Đưa bạn vào một hành trình khám phá toàn diện và trọn vẹn với các góc nhìn khác nhau. Chuyến thamm quan 360 độ cho phép khách hàng tùy ý điều chỉnh xoay, nghiêng, phóng to và thu nhỏ không gian theo ý muốn."
      },
      {
        img: "/assets/images/vizion/blogs/Picture5.jpg"
      },
      {
        p: "<strong>Hotspot cung cấp thông tin:<\/strong> Đây là những điểm mà người xem có thể nhấp chuột hoặc chạm để tương tác với các thông tin hoặc di chuyển đến các vị trí khác trong tour, tạo ra một trải nghiệm đắm chìm với các thông tin hữu ích."
      },
      {
        img: "/assets/images/vizion/blogs/Picture6.png"
      },
      {
        p: "<strong>Tích hợp đa phương tiện:<\/strong> Giúp chuyến tham quan của bạn thêm thú vị với những hình ảnh, video và âm thanh được tích hợp, nhằm tạo ra một trải nghiệm đa dạng và ý nghĩa."
      },
      {
        img: "/assets/images/vizion/blogs/Screenshot-2024-04-11-102755.png"
      },
      {
        p: "<strong>Khả năng tương thích đa thiết bị:<\/strong> Chuyến tham quan 360 có thể sử dụng trên nhiều thiết bị khác nhau, bao gồm điện thoại thông minh, máy tính, iPad,.. đảm bảo khả năng tiếp cận rộng hơn với nhiều đối tượng người dùng."
      },
      {
        img: "/assets/images/vizion/blogs/Picture8.png"
      },
      {
        h1: "LỢI ÍCH MANG LẠI CHO DOANH NGHIỆP"
      },
      {
        p: "Chuyến tham quan 3D thông minh mang lại nhiều lợi ích cho doanh nghiệp, bao gồm:"
      },
      {
        ul: [
          {
            p: "<strong>Tăng khả năng tiếp cận khách hàng:<\/strong> Sự bất tiện về thời gian cũng như vị trí địa lý sẽ không còn là rào cản với khách hàng trong việc tiếp cận sản phẩm của bạn, điều này sẽ giúp doanh nghiệp thu hút được nhiều đối tượng hơn, nhất là ở thời kì các nền tảng mạng xã hôi đang không ngừng phát triển như hiện nay"
          },
          {
            p: "<strong>Tăng tỷ lệ chuyển đổi:<\/strong> Việc tham quan ở môi trường 3D hấp dẫn hơn so với các hình ảnh truyền thống như ảnh và video, từ đó giúp tăng lượt tiếp cận và giữ chân khách hàng ở lại lâu hơn trên trang web của bạn."
          },
          {
            p: "<strong>Tăng doanh thu:<\/strong> Bằng cách giúp khách hàng đưa ra quyết định dễ dàng hơn nhờ những thông tin chi tiết và góc nhìn đa dạng về sản phẩm mà Tour 360 đem lại, từ đó tăng độ tin tưởng của khách hàng với doanh nghiệp của bạn và doanh nghiệp sẽ tăng doanh thu từ đây."
          },
          {
            p: "<strong>Phân tích hành vi khách hàng:<\/strong> Doanh nghiệp có thể theo dõi cách khách hàng di chuyển trong tour ảo, biết được những khu vực họ quan tâm và thời gian họ dành cho từng khu vực. Từ đó, phân tích sở thích của khách hàng để hiểu rõ hơn về nhu cầu cũng như cải thiện trải nghiệm của khách hàng bằng cách tối ưu hóa tour ảo và cung cấp những nội dung phù hợp."
          }
        ]
      },
      {
        img: "/assets/images/vizion/blogs/Picture9.png"
      },
      {
        h1: "ỨNG DỤNG TOUR 360 TRONG CÁC LĨNH VỰC:"
      },
      {
        p: "<strong>Quản lý sản xuất & nhà máy:<\/strong> Virtual Tour là một cách thức độc đáo để giới thiệu nhà máy và sản phẩm của doanh nghiệp đến khách hàng tiềm năng. Cho phép khách hàng, đối tác hoặc nhà đầu tư tham quan nhà máy mà không cần di chuyển trực tiếp. Điều này đặc biệt hữu ích khi khách hàng ở xa, giúp tiết kiệm chi phí và thời gian cho cả hai bên. Ngoài ra, tour ảo có thể được sử dụng trong việc đào tạo nhân viên thông qua các mô phỏng thực tế về quy trình sản xuất, an toàn lao động hoặc giới thiệu sản phẩm mới."
      },
      {
        img: "/assets/images/vizion/blogs/anh1.png"
      },
      {
        p: "<strong>Bất động sản:<\/strong> Doanh nghiệp trong lĩnh vực này có thể sử dụng các chuyến tham quan 3D nhằm tạo điều kiện cho khách hàng tiềm năng xem các bất động sản mà không cần đến tận nơi. Vừa có thể mang lại sự tiện lợi cho cả người mua và người bán, vừa giúp khách hàng đánh giá tiềm năng và đưa ra quyết định chắc chắn hơn."
      },
      {
        img: "/assets/images/vizion/blogs/Picture10.png"
      },
      {
        p: "<strong>Thương mại & Bán lẻ:<\/strong> Các doanh nghiệp thương mại & bán lẻ hiện nay sử dụng các tour 3D nhằm tiếp cận rộng rãi các đối tượng khách hàng, giúp họ hình dung một cách thực tế địa điểm bán hàng, các mặt hàng trưng bày và thông tin chi tiết của sản phẩm. Điều này có thể giúp họ đưa ra lựa chọn, giảm thời gian phân vân trong quá trình tìm hiểu và đưa ra quyết định."
      },
      {
        img: "/assets/images/vizion/blogs/Picture11.png"
      },
      {
        p: "<strong>Nhà hàng và khách sạn:<\/strong> Nhà hàng, khách sạn và các khu nghỉ dưỡng có thể sử dụng các tour ảo để giới thiệu với khách hàng về tiềm năng, dịch vụ và các tiện nghi của họ. Điều này có thể giúp khách có cái nhìn tổng quan hơn về những gì họ có thể mong đợi trước khi đặt phòng/ đặt chỗ."
      },
      {
        img: "/assets/images/vizion/blogs/Screenshot-2023-11-27-113219.png"
      },
      {
        p: "Tóm lại, 360 VR Tours là một công cụ mạnh mẽ được sử dụng rộng rãi để cải thiện hiệu quả tiếp thị và bán hàng trong nhiều ngành nghề, lĩnh vực khác nhau. Nếu bạn đang tìm kiếm cách để đưa doanh nghiệp và sản phẩm, dịch của bạn đến gần hơn với khách hàng, thì 360 VR Tours là một lựa chọn tuyệt vời."
      },
      {
        p: "Để hiểu hơn về cách mà 360 VR Tours mang lại lợi ích cho doanh nghiệp của bạn, hãy liên hệ với chúng tôi ngay hôm nay!"
      }
    ]
  },
  {
    id: 4,
    category: 'Digital Marketing',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/xe.png',
    title: 'Showroom 3D: A Game Changer for Car Dealerships and Agents',
    sections: [
      {
        p: "The automotive industry is constantly evolving, and businesses are always looking for new ways to reach their customers. In recent years, virtual tours have become increasingly popular as a way to provide potential buyers with a comprehensive and immersive experience of a dealership’s inventory."
      },
      {
        h1: "The Challenges Of Traditional Showrooming"
      },
      {
        p: "Traditional showrooming can be a challenge for car dealerships and agents. Customers often have to travel long distances to visit a dealership, and they may not have the time or flexibility to do so. This can lead to lost sales opportunities. Additionally, traditional showrooms are limited in terms of the amount of space they have. This can make it difficult to display all of the vehicles that a dealership or agent has to offer."
      },
      {
        p: "This is exactly why the automotive industry is undergoing a digital revolution, and car dealerships and agents are at the forefront of this change. Gone are the days of relying solely on brick-and-mortar showrooms. Enter the virtual showroom, a game-changer in the automotive industry. By creating an immersive, interactive online experience, car dealerships can reach a wider audience, engage potential buyers more effectively, and ultimately boost their sales."
      },
      {
        img: "/assets/images/vizion/blogs/xe-1.png"
      },
      {
        h1: "What Is A Virtual Tour – Showroom 3D?"
      },
      {
        p: "A virtual tour is a digital representation of a real-world space. It is created using a combination of photography, videography, and computer software. Virtual tours can be accessed on a variety of devices, including computers, smartphones, and tablets."
      },
      {
        img: "/assets/images/vizion/blogs/Picture3-2.png"
      },
      {
        h1: "How To Create A Showroom 3D?"
      },
      {
        p: "There are a number of different ways to create a virtual tour. One common method is to use a 360-degree camera to capture images of the space. These images can then be stitched together using computer software to create a seamless virtual tour. Another option is to use a combination of 2D and 3D images and video to create a more immersive experience."
      },
      {
        img: "/assets/images/vizion/blogs/Picture4.jpg"
      },
      {
        img: "/assets/images/vizion/blogs/Picture6-2.png"
      },
      {
        h1: "3D Showrooms Shatter These Barriers"
      },
      {
        p: "By leveraging virtual reality (VR) and 3D modeling, they create:"
      },
      {
        ul: [
          {
            p: "<strong>Endless Aisle:<\/strong> Showcase your entire inventory, no matter how vast it is, within a virtual space. Customers can explore an unlimited range of vehicles, from popular sedans to luxurious SUVs, all under one roof (or headset!)."
          },
          {
            p: "<strong>Global Reach:<\/strong> Break down geographical barriers and reach customers anywhere in the world. Potential buyers from across the globe can virtually walk through your showroom, eliminating the need for physical travel."
          },
          {
            p: "<strong>Enhanced Engagement:<\/strong> Go beyond static images and videos. 3D showrooms allow customers to interact with vehicles in a lifelike manner. They can open doors, explore interiors, customize features, and even take virtual test drives – all from the comfort of their homes."
          }
        ]
      },
      {
        img: "/assets/images/vizion/blogs/Picture7-2.png"
      },
      {
        h1: "The Power Of 3D: Benefits For Dealerships And Agents"
      },
      {
        p: "The advantages of 3D showrooms extend far beyond just wowing customers. They translate into tangible benefits for dealerships and agents:"
      },
      {
        ul: [
          {
            p: "<strong>Increased Sales and Leads:<\/strong> By providing a more engaging and convenient car buying experience, 3D showrooms can lead to higher conversion rates and generate more qualified leads."
          },
          {
            p: "<strong>Reduced Costs:<\/strong> Eliminate the need for expansive physical showrooms and associated maintenance costs. 3D showrooms offer a cost-effective way to reach a wider audience."
          },
          {
            p: "<strong>Improved Customer Satisfaction:<\/strong> By offering a unique and interactive experience, 3D showrooms can boost customer satisfaction and loyalty, leading to repeat business and positive word-of-mouth referrals."
          },
          {
            p: "<strong>Stand Out from the Competition:<\/strong> Embrace cutting-edge technology and differentiate yourself from traditional dealerships. 3D showrooms showcase your forward-thinking approach and commitment to providing an exceptional customer experience."
          }
        ]
      },
      {
        img: "/assets/images/vizion/blogs/Picture8-2.png"
      },
      {
        h1: "Beyond The Hype: Real-World Success Stories"
      },
      {
        p: "The potential of 3D showrooms isn’t just theoretical. Several dealerships and agents are already reaping the rewards of this technology:"
      },
      {
        p: "<strong>One example is Lexus “OMAKASE” Virtual Showroom:<\/strong> Back in 2016, Lexus unveiled a concept called “OMAKASE,” which envisioned a future where customers could personalize their car buying experience through a virtual showroom. This immersive experience would utilize 3D technology to allow customers to explore different models, customize features, and even virtually test drive cars."
      },
      {
        img: "/assets/images/vizion/blogs/Picture10-1.png"
      },
      {
        p: "<strong>Another example is Tesla:<\/strong> Tesla uses virtual tours to showcase its showrooms and vehicles. Customers can use the virtual tours to explore Tesla’s showrooms in real time, as well as to learn more about the company’s vehicles."
      },
      {
        img: "/assets/images/vizion/blogs/Picture9-2.png"
      },
      {
        p: "<strong>BMW:<\/strong> The luxury carmaker has implemented 3D showrooms in select dealerships, allowing customers to virtually configure their dream BMW and even take a virtual test drive on a racetrack."
      },
      {
        img: "/assets/images/vizion/blogs/Picture12.png"
      },
      {
        p: "The future of car showrooms is undoubtedly 3D. By embracing this technology, dealerships and agents can unlock a new era of customer engagement, boost sales, and stay ahead of the curve in the ever-evolving automotive landscape."
      },
      {
        p: "So, are you ready to step into the future of car showrooms?"
      }
    ]
  },
  {
    id: 5,
    category: 'Stories',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/Screenshot-104-1.png',
    title: 'The Benefits of Virtual Tours in Manufacturing and Factory Management',
    sections: [
      {
        p: "In today’s competitive marketplace, building trust with customers is a major challenge for businesses. This is especially true when customers cannot physically experience a company’s products or production processes."
      },
      {
        p: "That’s where virtual tours come in. By using modern 3D technology, virtual tours can provide customers with a realistic and immersive experience that is just like being there in person. This gives customers a comprehensive and informative overview of a company, helping to increase trust and drive sales."
      },
      {
        img: "/assets/images/vizion/blogs/Screenshot-104.png"
      },
      {
        p: "Virtual tours are now being widely used in factories and manufacturing facilities to connect businesses with customers and to help manage production remotely."
      },
      {
        h1: "WHAT IS VIRTUAL TOUR 360?"
      },
      {
        p: "A virtual tour is a digital tour of a physical location. It is created by taking a series of photographs or videos and then stitching them together to create a 360-degree view."
      },
      {
        p: "Virtual tours can be accessed on a variety of devices, including computers, smartphones, tablets or virtual reality headset. This makes them accessible to a wide range of people, regardless of their location or device."
      },
      {
        img: "/assets/images/vizion/blogs/Screenshot-2023-12-06-140529.png"
      },
      {
        h1: "HOW DO VIRTUAL TOURS WORK?"
      },
      {
        p: "Virtual tours work by using a variety of technologies, including:"
      },
      {
        p: "<strong>Panoramic photography:<\/strong> Panoramic photography allows photographers to capture a wide-angle view of a scene. This can be done using a specialized camera or by stitching together a series of photos."
      },
      {
        p: "<strong>360-degree video:<\/strong> 360-degree video allows viewers to look around a scene in any direction. This is done by using a special camera that captures video from all sides."
      },
      {
        img: "/assets/images/vizion/blogs/AdobeStock_412787549_Editorial_Use_Only-1536x768.jpeg",
        extra: {
          p: "MINSK, BELARUS – MAY 2020: Full seamless hdri panorama 360 near rows of large offset printing press of polymerr label conveyor typography facility in equirectangular projection, for VR AR content"
        }
      },
      {
        p: "These images and videos are then stitched together to create a seamless 360-degree view."
      },
      {
        p: "Virtual tours can also include <strong>computer graphics<\/strong> to add additional detail and interactivity. This can help to create a more realistic and engaging experience for users."
      },
      {
        h1: "Benefits Of Virtual Tours For Factory And Manufacturing Management:"
      },
      {
        ul: [
          {
            p: "<strong>Increased customer engagement:<\/strong> Virtual tours can help businesses to engage with customers in a more meaningful way. By giving customers a behind-the-scenes look at the factory, businesses can build trust and credibility."
          },
          {
            p: "<strong>Improved sales:<\/strong> Virtual tours can help businesses to increase sales by providing customers with more information about the company’s products and services."
          },
          {
            p: "<strong>Reduced travel costs:<\/strong> Virtual tours can help businesses to reduce travel costs by allowing customers to visit the factory virtually."
          },
          {
            p: "<strong>Improved efficiency:<\/strong> Virtual tours can help businesses to improve efficiency by allowing employees to view factory operations from anywhere."
          }
        ]
      },
      {
        h1: "How Virtual Tours Helped A Manufacturing Company Increase Sales?"
      },
      {
        p: "A manufacturing company in the United States was looking for a way to increase sales and improve customer satisfaction. The company decided to create a virtual tour of its factory. The tour featured 360-degree views of the factory floor, equipment, and products."
      },
      {
        img: "/assets/images/vizion/blogs/image-1.png"
      },
      {
        p: "The virtual tour was a huge success. It helped the company to increase sales by 15% and improve customer satisfaction by 20%. The company also received positive feedback from customers who said that the virtual tour helped them to understand the company’s products and processes better."
      },
      {
        p: "Conclusion Virtual tours are a powerful tool that can be used to improve factory and manufacturing management. They can help to increase customer trust and engagement, improve communication and collaboration, and enhance marketing and sales efforts. By implementing virtual tours, businesses can gain a competitive advantage and create a more successful future."
      }
    ]
  },
  {
    id: 6,
    category: 'Stories',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/Picture12.jpg',
    title: 'WHY SUCCESS SOFTWARE CHOSE VIZION AS ITS TRUSTED PARTNER FOR BRANDING JOURNEY?',
    sections: [
      {
        p: "In today’s increasingly diverse business world, with new companies popping up like mushrooms in different forms, it is inevitable that some will be overshadowed. This highlights the importance of a strong branding strategy."
      },
      {
        img: "/assets/images/vizion/blogs/Picture13.jpg"
      },
      {
        p: "Success Software Services was founded in 2012 and has over 12 years of experience providing effective software services to clients in various regions. Focuses primarily on software application development, application support and maintenance, business quality management/data inspection."
      },
      {
        p: "To learn more about Success Software services, visit: <a href=\"https://successsoftware.global/\" target=\"_blank\">https://successsoftware.global/<\/a>"
      },
      {
        img: "/assets/images/vizion/blogs/Picture14.png"
      },
      {
        p: "As a service-based business, it is important to reach out to the market and build trust with customers. However, this can be a challenge. To gain trust, customers need to experience the company firsthand and see how it operates. However, there are many obstacles to direct experience, the most obvious being geographical and time constraints."
      },
      {
        p: "To address this concern, the digital transformation industry has once again proved its importance by introducing an optimal solution – VIRTUAL TOUR – that helps businesses provide a convenient and realistic experience."
      },
      {
        h1: "WHAT IS VIRTUAL TOUR 360?"
      },
      {
        p: "Virtual Tour technology allows users to experience a space in a realistic and immersive way through electronic devices such as laptops, computers, smartphones, and iPads. This technology has been applied in many different fields, including branding."
      },
      {
        img: "/assets/images/vizion/blogs/Picture15.png"
      },
      {
        p: "Success Software Services has partnered with VIZION to optimize its customer outreach and branding strategy. This is a promising step forward for a company that has been operating in the market for a long time to adopt technological innovations. It also reflects the style of experienced leaders: decisive, careful, but still flexible and open to new things."
      },
      {
        h1: "EFFECTS FOR BUSINESSES:"
      },
      {
        p: "When turning to VIZION’s solution, Success Software Services had high hopes for positive changes in its branding. The integration of the Virtual Tour system into the company’s website has really brought about practical results. It provides customers with a realistic and immersive visual experience, helping them to better understand the company’s products, services, and culture."
      },
      {
        img: "/assets/images/vizion/blogs/Picture9-1.png"
      },
      {
        p: "With simple navigation, customers can easily view the company’s entire working environment in a unique 360-degree interactive view, helping to attract attention and grasp real-time information about the company. This increases customer trust when making final decisions."
      },
      {
        p: "In addition, the integration of Virtual Tour also helps the website to be more professional and credible, increasing brand awareness, advertising performance, and the percentage of potential customers’ visits, thereby generating profits for the company."
      },
      {
        img: "/assets/images/vizion/blogs/image.png"
      },
      {
        p: "In conclusion, Virtual Tour is the key to increasing brand awareness and conversion rates. Let’s create a distinctive brand for your business with the impressive 360-degree Virtual Tour technology."
      }
    ]
  },
  {
    id: 7,
    category: 'Stories',
    createdAt: Date.now().toString(),
    createdBy: 'Thu Pham',
    imageUrl: '/assets/images/vizion/blogs/blog-3.png',
    title: 'VIRTUAL TOUR 360 – OPTIMIZE YOUR SALES & MARKETING STRATEGY',
    sections: [
      {
        p: "Embark on the future of marketing and sales with virtual tours, reshaping the way businesses captivate their audience. Moving beyond static 2D images, innovative technology has revolutionized the realm of sales and marketing, enhancing customer experiences through unique interactive features."
      },
      {
        p: "Discover a new era of showcasing products and spaces that goes beyond the ordinary, capturing attention and sparking curiosity in ways traditional methods could only dream of. The dynamic and immersive nature of virtual tours promises not just a glimpse but a personalized journey for every viewer, setting the stage for an unparalleled exploration of what your business has to offer."
      },
      {
        img: "/assets/images/vizion/blogs/Picture2-4.png"
      },
      {
        h1: "What Is Virtual Tour 360?"
      },
      {
        p: "Virtual Tour 360 leverages advanced technology to create a fully interactive and dynamic showcase. Unlike static 2D visuals, this technology allows users to navigate and explore a given environment as if they were physically present. It is a powerful tool for businesses looking to showcase their spaces, whether it’s real estate, hospitality, or retail, in a way that goes beyond traditional methods."
      },
      {
        img: "/assets/images/vizion/blogs/Picture3-1.png"
      },
      {
        h1: "How They Work:"
      },
      {
        p: "Virtual tours are typically created using a combination of 360-degree photography and video. A photographer or videographer will use a special camera to capture images or videos of a physical space from multiple angles. These images or videos are then stitched together to create a seamless 360-degree view."
      },
      {
        h1: "Key Features Of Virtual Tour 360:"
      },
      {
        p: "<strong>360-Degree Views:<\/strong> Take your audience on a complete visual exploration with panoramic views that offer a comprehensive perspective. 360-degree virtual tours allow customers to rotate, tilt, zoom in, and out of the interior space as desired"
      },
      {
        img: "/assets/images/vizion/blogs/Picture5-1.jpg"
      },
      {
        p: "<strong>Interactive Hotspots:<\/strong> Engage viewers with interactive hotspots that provide additional information, creating a truly immersive and educational experience."
      },
      {
        img: "/assets/images/vizion/blogs/Picture6-1.png"
      },
      {
        p: "<strong>Multimedia Integration:<\/strong> Elevate your virtual tour with multimedia elements such as videos, images, and audio to create a rich and dynamic storytelling experience."
      },
      {
        img: "/assets/images/vizion/blogs/Picture7-1.png"
      },
      {
        p: "<strong>Cross-platform compatibility:<\/strong> 360 VR Tours seamlessly work across various devices, including smartphones, computers, iPads,… ensuring wider accessibility and catering to diverse user preferences."
      },
      {
        img: "/assets/images/vizion/blogs/Picture8-1.png"
      },
      {
        h1: "Benefits For Businesses:"
      },
      {
        p: "Virtual tours offer a number of benefits for businesses, including:"
      },
      {
        ul: [
          {
            p: "<strong>Increased engagement:<\/strong> Virtual tours are more engaging than traditional marketing materials, such as photos and videos. This can help to keep potential customers on your website or social media page for longer and increase the likelihood of them making a purchase."
          },
          {
            p: "<strong>Increased sales:<\/strong> Virtual tours can help to increase sales by allowing customers to see products or services in more detail before making a purchase."
          },
          {
            p: "<strong>Increased visibility:<\/strong> Virtual tours can help businesses to reach a wider audience by making their products or services more accessible to people who cannot visit in person."
          },
          {
            p: "<strong>Improved conversion rates:<\/strong> Businesses that leverage virtual tours experience a significant boost in conversion rates, primarily due to enhanced customer understanding and reduced post-purchase dissatisfaction."
          }
        ]
      },
      {
        img: "/assets/images/vizion/blogs/Picture9_1.png"
      },
      {
        h1: "How Virtual Tours Can Be Used In Different Industries:"
      },
      {
        p: "<strong>Real estate:<\/strong> Real estate agents can use virtual tours to show potential buyers homes without them having to leave their living rooms. This can be a huge convenience for buyers, and it can also help to reduce the number of showings that are needed."
      },
      {
        img: "/assets/images/vizion/blogs/Picture10_1.png"
      },
      {
        p: "<strong>Retail:<\/strong> Retail businesses can use virtual tours to show potential customers their products and store layout. This can help to give customers a better idea of what they are looking for before they visit the store."
      },
      {
        img: "/assets/images/vizion/blogs/Picture11_1.png"
      },
      {
        p: "<strong>Hospitality:<\/strong> Hotels and resorts can use virtual tours to show potential guests their rooms and amenities. This can help to give guests a better sense of what to expect before they book a stay."
      },
      {
        img: "/assets/images/vizion/blogs/Screenshot-2023-11-27-113219_1.png"
      },
      {
        p: "In conclusion, 360 VR Tours are a powerful tool that can be used to improve marketing and sales outcomes in a variety of industries."
      },
      {
        p: "If you are looking for a way to showcase your business or property in a truly unique and engaging way, 360 VR Tours are a great option. To learn more about how 360 VR Tours can benefit your business, please contact us today!"
      }
    ]
  }
]
