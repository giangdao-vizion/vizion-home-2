import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/solution-industry/hero';
import { useRouter } from 'next/router';
import { getEntities } from '@/utils/utils';
import heroMock from '@/mock/solution-industry/hero-mock';
import whatIsMock from '@/mock/solution-industry/what-is-mock';
import useCaseMock from '@/mock/solution-industry/usecase-mock';
import projectMock from '@/mock/solution-industry/section-project-mock';

import React from 'react';
import WhatIs from '@/components/sections/solution-industry/what-is';
import SectionCapture from '@/components/sections/solution-industry/section-capture';
import CMS_Slider from '@/components/sections/solution-industry/cms-slider';
import SectionSales from '@/components/sections/product/section-sales';
import SectionAdvantages from '@/components/sections/product/section-advantages';
import Industries from '@/components/vizion/Home/Industries';
import SectionProject from '@/components/sections/solution-industry/section-project';
import SectionPartners from '@/components/sections/product/section-partners';
import SectionContact from '@/components/sections/product/section-contact';

export default function Page(props) {
  const router = useRouter();
  const defaultId = 'enterprise';
  const { hero, whatis, usecase, project } = getEntities(
    router,
    heroMock,
    whatIsMock,
    useCaseMock,
    projectMock,
    defaultId,
  );
  return (
    <>
      <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
        <Hero hero={hero} />
        <WhatIs whatis={whatis} />
        <SectionCapture />
        <CMS_Slider />
        <SectionSales />
        <SectionAdvantages />
        <Industries />
        <SectionProject project={project} />
        <SectionPartners />
        <SectionContact />
      </Layout>
    </>
  );
}
