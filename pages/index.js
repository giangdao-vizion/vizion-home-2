import Layout from '@/components/layout/Layout';
import TourIframe from '@/components/vizion/CommonModules/TourIframe/TourIframe';
import Banner from '@/components/vizion/Home/Banner';
import Introduce from '@/components/vizion/Home/Introduce';
import BusinessDiscovery from '@/components/vizion/Home/BusinessDiscovery';
import Discover from '@/components/vizion/Home/Discover';
import GenericStatistic from '@/components/vizion/Home/GenericStatistic';
import GetInTouch from '@/components/vizion/Home/GetInTouch';
import OurInvestor from '@/components/vizion/Home/OurInvestor';
import OurServices from '@/components/vizion/Home/OurServices';

export default function Index() {
  return (
    <Layout siteContentClass="pt0 pb0">
      <Banner />
      <Introduce
        title="Nâng Cao Năng Lực Bán Hàng Cho Doanh Nghiệp"
        imageDisplayUrl="/assets/images/phone-honepage-v2.png"
      />
      {/* <GenericStatistic /> */}
      <Discover />
      <TourIframe iframeUrl="https://view.vizion.space/demo?mode=no-intro&menu-ui=gallery" />
      <BusinessDiscovery />
      <OurServices />
      <OurInvestor />
      <GetInTouch />
      {/* <TourSample /> */}
    </Layout>
  );
}
