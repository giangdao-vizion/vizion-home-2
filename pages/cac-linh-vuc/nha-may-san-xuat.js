import Layout from '@/components/layout/Layout';
import LiveDemo from '@/components/vizion/CommonModules/LiveDemo/LiveDemo';
import TourIframe from '@/components/vizion/CommonModules/TourIframe/TourIframe';
import Banner from '@/components/vizion/Home/Banner';

export default function ManufacturingAndFactory() {
  const dataLiveDemo = [
    {
      title: 'DX Sample Factory',
      imageUrl: '/assets/images/vizion/tours/snapedit_1703484514950.png',
      desc: 'Chào mừng bạn đến với DX Sample Factory, nơi hội tụ tinh hoa của công nghệ in ấn hiện đại. Trải nghiệm ngay tour ảo để khám phá không gian sản xuất với các thiết bị tiên tiến và những bảng báo cáo minh chứng cho hiệu suất vượt trội của mỗi dây chuyền sản xuất. Điều này sẽ mang đến cho bạn cái nhìn toàn diện về sự tiến bộ và khả năng ứng dụng của tour ảo vào trong sản xuất nhà máy.',
    },
    {
      title: 'Factory Tour',
      imageUrl: '/assets/images/vizion/tours/factory-tour.png',
      desc: 'Khám phá công nghệ và quy trình tiên tiến của một nhà máy tái chế chất thải hiện đại thông qua chuyến tham quan ảo đầy sống động với Tour Factory của chúng tôi.',
    },
    {
      title: 'Factory Tour & Report',
      imageUrl: '/assets/images/vizion/tours/image-1.png',
      desc: 'Trong chuyến tham quan nhà máy, chúng ta đã có thể quan sát vị trí của động cơ sản xuất. Khách tham quan có thể tương tác bằng cách nhấp chuột vào các máy đang nhấp nháy để xem thông tin, quy trình làm việc và hiệu suất được liệt kê trong báo cáo.',
    },
    {
      title: 'Demo Showroom 3D',
      imageUrl: '/assets/images/vizion/tours/demo-3d-showroom-1.png',
      desc: 'Trải nghiệm ảo 360 độ tại showroom mang đến một chuyến tham quan sống động với các sản phẩm về gạch lát sàn, giày dép, và ba lô. Người dùng có thể tham quan và khám phá những sản phẩm này, giúp họ đưa ra quyết định thông minh khi lựa chọn mua gạch sàn nhà và các vật phẩm thời trang.',
    },
    {
      title: 'Showroom 360 demo',
      imageUrl: '/assets/images/vizion/tours/ea2de815-09c8-4fd3-9fa8-7b4b905c2519.png',
      desc: 'Một bản demo showroom 360 độ về bảo tàng ảo, giới thiệu về lịch sử phong phú của Hàn Quốc. Khách tham quan có thể khám phá các triển lãm, kho tàng đất nước, mang đến những trải nghiệm học tập nhân văn, sâu sắc.',
    },
    {
      title: 'Showroom 360 demo 2',
      imageUrl: '/assets/images/vizion/tours/e5cd3f6e-c427-4b66-99b0-5f156c33c26a.png',
      desc: 'Một bản demo trưng bày 360 độ cho phép chúng ta tương tác với sản phẩm. Thông qua các chuyến tham quan ảo, người dùng có thể xem xét sản phẩm từ nhiều góc độ khác nhau và hiểu rõ về thiết kế và chức năng của chúng.',
    },
  ];
  return (
    <Layout siteContentClass="pt0 pb0">
      <Banner
        title="Nâng Cao Quản Lý Nhà Máy, Đào Tạo Và Giới Thiệu Sản Phẩm Bằng Tour 360°"
        imageDisplayUrl="/assets/images/phone-honepage-v2.png"
      />
      <TourIframe iframeUrl="https://view.vizion.space/demo?mode=no-intro&menu-ui=gallery" />
      <LiveDemo dataLiveDemo={dataLiveDemo} />
    </Layout>
  );
}
