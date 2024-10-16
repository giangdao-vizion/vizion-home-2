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
import DiscoverV2 from '@/components/vizion/Home/DiscoverV2';
import OurAchiements from '@/components/vizion/Home/OurAchiements';
import UseCase from '@/components/vizion/Home/UseCase';
import DigitalTwin from '@/components/vizion/Home/DigitalTwin';
import OurPlatform from '@/components/vizion/Home/OurPlatform';
import JoinOurPlatform from '@/components/vizion/Home/JoinOurPlatform';
import JoinUsNow from '@/components/vizion/Home/JoinUsNow';
import Industries from '@/components/vizion/Home/Industries';
import Hybrid from '@/components/vizion/Home/Hybrid';
import Partner from '@/components/vizion/Home/Partner';
import TrustByMarketLeader from '@/components/vizion/Home/TrustByMarketLeader';
import PlatformFeatures from '@/components/vizion/Home/PlatformFeatures';
import EnterPrisesJoin from '@/components/sections/solution-usecase/enterprise-join';

export default function Index(props) {
  return (
    <Layout siteContentClass="pt0 pb0" {...props}>
      <Banner
        title="Video giới thiệu giải pháp 3D Tour"
        videoUrl="https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4"
      />
      {/* <Introduce {...props} /> */}
      {/* <GenericStatistic /> */}

      <OurAchiements />
      <UseCase />
      <DigitalTwin />
      <OurPlatform />
      <EnterPrisesJoin />
      <PlatformFeatures />
      <Industries />
      <Hybrid />
      <Partner />
      <TrustByMarketLeader />

      <JoinUsNow />
      {/* <OurServices />
      <BusinessDiscovery /> */}
      {/* <Discover /> */}
      {/* <DiscoverV2 />
      <TourIframe iframeUrl="https://view.vizion.space/demo?mode=no-intro&menu-ui=gallery" />
      <OurInvestor />
      <GetInTouch /> */}
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
