import Layout from '@/components/layout/Layout';
import Industry from '@/components/vizion/CommonModules/LiveDemo/Industry';
import TourIframe from '@/components/vizion/CommonModules/TourIframe/TourIframe';
import Banner from '@/components/vizion/Home/Banner';
import { solutionListMock } from '@/mock/solution';
import { useRouter } from 'next/router';
import React from 'react';

export default function Page(props) {
  const router = useRouter();
  const { solutionId } = router.query || {};
  const solution = solutionListMock.find(sol => sol.solutionId === solutionId);

  if (!solution) return (<p>Not found</p>);
  return (
    <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
      
    </Layout>
  );
}