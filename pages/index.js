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

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Index(props) {
  return (
    <Layout siteContentClass="pt0 pb0">
      <Banner />
      <Introduce
        title="Nâng Cao Năng Lực Bán Hàng Cho Doanh Nghiệp"
        imageDisplayUrl="/assets/images/phone-honepage-v2.png"
        {...props}
      />
      {/* <GenericStatistic /> */}
      <OurServices />
      <BusinessDiscovery />
      <Discover />
      <TourIframe iframeUrl="https://view.vizion.space/demo?mode=no-intro&menu-ui=gallery" />
      <OurInvestor />
      <GetInTouch />
    </Layout>
  );
}

export const getStaticProps = async context => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  };
};
