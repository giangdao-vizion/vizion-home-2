import Layout from '@/components/layout/Layout';
import LiveDemo from '@/components/vizion/CommonModules/LiveDemo/LiveDemo';
import TourIframe from '@/components/vizion/CommonModules/TourIframe/TourIframe';
import Banner from '@/components/vizion/Home/Banner';

export default function HospitalAndLifecareFacilities() {
  const dataLiveDemo = [
    {
      title: 'CAR AGENTS',
      imageUrl: '/assets/images/vizion/tours/ride-comfort.jpg',
      desc: 'Trải nghiệm trang web đẳng cấp của lĩnh vực Car Agents. Bắt đầu khám phá bề ngoài bắt mắt và thời thượng của chiếc xe, sau đó tận mắt tiến vào bên trong để trải nghiệm không gian nội thất đầy sang trong và tiện nghi của chiếc xe. Hãy cảm nhận độ đẳng cấp của sản phẩm qua từng góc nhìn.',
    },
    {
      title: 'CAR SERVICES',
      imageUrl: '/assets/images/vizion/tours/5ce36e3e-1978-4744-9a6a-7848e12a3ce9.png',
      desc: 'Trải nghiệm sự tiềm năng của các dịch vụ xe hơi thông qua các chuyến tham quan 3D của chúng tôi. Chúng ta sẽ được tận mắt nhìn ngắm những chiếc xe sang trọng được bảo dưỡng cẩn thận và chuyên nghiệp, thêm vào đó là dịch vụ chăm sóc khách hàng tuyệt vời. Hãy cùng trải nghiệm nét đột phá mới trong dịch vụ xe hơi ngày nay!',
    },
  ];

  return (
    <Layout siteContentClass="pt0 pb0">
      <Banner
        title="Khám Phá Từng Chi Tiết Của Chiếc Xe Thông Qua Tour 360°"
        imageDisplayUrl="/assets/images/vizion/tours/car-v2.png"
      />
      <TourIframe iframeUrl="https://view.vizion.space/car-services?mode=no-intro&menu-ui=gallery" />
      <LiveDemo
        dataLiveDemo={dataLiveDemo}
        swiperCustom={{
          slidesPerView: 1,
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          },
        }}
      />
    </Layout>
  );
}
