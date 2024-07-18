import Layout from '@/components/layout/Layout';
import Industry from '@/components/vizion/CommonModules/LiveDemo/Industry';
import TourIframe from '@/components/vizion/CommonModules/TourIframe/TourIframe';
import Banner from '@/components/vizion/Home/Banner';
import { industryListMock } from '@/mock/industry';
import { useRouter } from 'next/router';
import React from 'react';

export default function IndustryList({ props }) {
  const router = useRouter();
  const { industryId } = router.query || {};
  const industry = industryListMock.find(ind => industryId === String(ind.id));

  if (!industry) return null;
  return (
    <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
      <Banner bannerTitle={industry.bannerTitle} videoUrl={industry.videoUrl} />
      <TourIframe iframeUrl={industry.iframeUrl} />
      <Industry dataLiveDemo={industry.dataLiveDemo} />
    </Layout>
  );
}
