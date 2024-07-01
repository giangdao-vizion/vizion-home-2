import Layout from '@/components/layout/Layout';
import LiveDemo from '@/components/vizion/CommonModules/LiveDemo/LiveDemo';
import TourIframe from '@/components/vizion/CommonModules/TourIframe/TourIframe';
import Banner from '@/components/vizion/Home/Banner';

export default function BatDongSan() {
  const dataLiveDemo = [
    {
      title: 'Novaworld HO TRAM - Ocean Villa',
      imageUrl: '/assets/images/vizion/tours/novaworld-ho-tram-ocean-villa.png',
      desc: 'Happy Beach Villa – thiết kế hiện đại trải dài qua hai tầng, lấy cảm hứng từ Triple-key Villa. Trải nghiệm cuộc sống thanh bình giữa cảnh đẹp thiên nhiên, vị trí tuyệt vời tại Nova World Villa, khu nghỉ dưỡng 5 sao, Hồ Tràm. Tham gia chuyến tham quan 3D để khám phá ngôi nhà độc đáo này!',
    },
    {
      title: 'Novaworld HO TRAM - Shop House',
      imageUrl: '/assets/images/vizion/tours/novaworld-ho-tram-shop-house.png',
      desc: 'Khám phá cửa hàng nhà phố hiện đại Châu Âu-Mỹ, đối diện trung tâm thương mại hàng đầu tại Khu Đô thị. Nằm gần con đường ven biển ở Hồ Tràm, bao quanh bởi những khu vườn xanh mát. Tham gia Chuyến tham quan 3D tại Nova World Shop House ngay!',
    },
    {
      title: 'Aquacity Villa House',
      imageUrl: '/assets/images/vizion/tours/aquacity-villa-house.png',
      desc: 'Thiết kế độc đáo của biệt thự có góc nhìn từ ban công mang đến cho gia chủ cảm giác thư giãn, gần gũi với thiên nhiên, hoàn toàn tách biệt khỏi sự ồn ào của thành phố, đáp ứng tiêu chuẩn sống ‘Xanh’ hiện đại, phong phú và sự thịnh vượng. Hãy đến và tham gia cùng chúng tôi trong Chuyến tham quan 3D của Aquacity Villa.',
    },
    {
      title: 'AQUACITY LUXURY HOUSE',
      imageUrl: '/assets/images/vizion/tours/aquacity-luxury-house.png',
      desc: 'Deluxe Green House với thiết kế với 1 trệt, 2 lầu, và 3 phòng ngủ. Các phòng ngủ cao cấp mang lại sự thoải mái với không khí trong lành từ thiên nhiên xung quanh. Hãy đến và tham gia cùng chúng tôi trong Chuyến tham quan 3D của Deluxe Green House tại Aquacity.',
    },
    {
      title: 'PROJECT TEMPLATE IN REAL ESTATE INDUSTRY',
      imageUrl: '/assets/images/vizion/tours/project-template-in-real-estate-industry.png',
      desc: 'Khám phá mẫu dự án bất động sản bằng phương thức độc đáo – một trang web giới thiệu các bất động sản của bạn, từ những dự án có sẵn đến những dự án đã bán, được hiển thị với thông tin chi tiết và giá cả rõ ràng. Bạn đã sẵn sàng đưa dự án bất động sản của mình trở nên sống động chưa?',
    },
    {
      title: 'SUCCESS OFFICE TOUR 19A CONG HOA',
      imageUrl: '/assets/images/vizion/tours/success-software-19a-ch.png',
      desc: 'Văn phòng mới tại 19a Cộng Hòa của Success Software không chỉ là không gian làm việc hiện đại mà còn có khu vực giải trí và ẩm thực, tạo điều kiện tốt cho sự cân bằng giữa công việc và cuộc sống cho nhân viên.',
    },
    {
      title: 'SUCCESS OFFICE TOUR 8 LE TRUNG NGHIA',
      imageUrl: '/assets/images/vizion/tours/success-software-8-ltn.png',
      desc: 'Thành lập từ năm 2012, Success Software Services nhanh chóng trở thành một nhà cung cấp dịch vụ tư vấn kỹ thuật số và phát triển phần mềm hàng đầu toàn cầu. Hãy khám phá văn phòng của chúng tôi qua chuyến tham quan 3D.',
    },
    {
      title: 'CASA HOUSE',
      imageUrl: '/assets/images/vizion/tours/snapedit_1703565650490.png',
      desc: 'Khám phá Casa House ngay từ ghế nhà bạn với tour ảo chân thực. Dạo bước qua không gian sống tuyệt vời của căn hộ, từ phòng khách sang phòng ngủ, chắc chắn, không gian sống lý tưởng đang chờ đợi bạn tại đây!',
    },
    {
      title: 'HANOI PHOENIX HOUSE',
      imageUrl: '/assets/images/vizion/tours/snapedit_1703566077935.png',
      desc: 'Khám phá không gian sống tinh tế tại Hanoi Phoenix House ngay từ chiếc điện thoại của bạn. Với tour ảo chân thực, bạn sẽ được dạo bước qua từng phòng, cảm nhận vẻ đẹp và tiện nghi độc đáo mà căn hộ này mang lại. Đừng bỏ lỡ cơ hội trải nghiệm tuyệt vời này!',
    },
    {
      title: 'KEEAUMOKU UNIT 11 HOUSE',
      imageUrl: '/assets/images/vizion/tours/snapedit_1703566299443.png',
      desc: 'Khám phá căn hộ tuyệt vời tại Keeaumoku Unit 11 House thông qua tour ảo chân thực. Từ phòng khách sang phòng ngủ, trải nghiệm không gian sống đầy sang trọng và tiện ích, giúp bạn hiểu rõ hơn về sự đẳng cấp và sự tiện nghi mà căn hộ này mang lại. Hãy bắt đầu khám phá thôi nào!',
    },
    {
      title: 'KEEAUMOKU HOUSE',
      imageUrl: '/assets/images/vizion/tours/snapedit_1703566174226.png',
      desc: 'Khám phá sự sang trọng và tiện nghi tại Keeaumoku House ngay từ trải nghiệm tour ảo chân thực. Tận hưởng không gian sống đẳng cấp qua màn hình, từ phòng khách đến phòng ngủ, mỗi góc của căn hộ đều được tái hiện sống động. Chắc chắn, đây là trải nghiệm không thể bỏ lỡ!',
    },
    {
      title: 'PROMOTION HOUSE',
      imageUrl: '/assets/images/vizion/tours/snapedit_1703566331560.png',
      desc: 'Bước vào Promotion House thông qua tour ảo, bạn sẽ trải qua hành trình khám phá không gian sống đẳng cấp và thiết kế tinh tế. Từ phòng khách đến phòng ngủ, mỗi góc nhìn đều tái hiện chân thực, giúp bạn cảm nhận được không gian ấm cúng và tiện ích đầy đủ. Khám phá ngay để trải nghiệm sự sang trọng tại Promotion House!',
    },
  ];

  return (
    <Layout siteContentClass="pt0 pb0">
      <Banner
        title="Tăng Cường Doanh Số Bán Hàng Bất Động Sản Với Tour 360°"
        imageDisplayUrl="/assets/images/vizion/tours/real-estate-v2.png"
      />
      <TourIframe iframeUrl="https://view.vizion.space/aquacity-house-villa?mode=no-intro&menu-ui=gallery" />
      <LiveDemo dataLiveDemo={dataLiveDemo} />
    </Layout>
  );
}
