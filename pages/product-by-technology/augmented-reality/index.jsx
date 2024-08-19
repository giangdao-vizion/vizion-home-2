import Layout from '@/components/layout/Layout';
import heroMock from '@/mock/solution-industry/hero-mock';
import Hero from '@/components/sections/solution-industry/hero';
import { useRouter } from 'next/router';
import React from 'react';
import WhatIs from '@/components/sections/solution-industry/what-is';
import CMC_Tab from '@/components/sections/solution-industry/cms-tab';
import UseCase from '@/components/sections/solution-industry/usecase';
import CMS_Slider from '@/components/sections/solution-industry/cms-slider';
import ContactForm from '@/components/sections/solution-industry/contact-form';
import EnterPrises from '@/components/sections/solution-industry/enterprises';
import Section3D from '@/components/sections/solution-industry/section-3d';
import Hybrid from '@/components/sections/solution-industry/hybrid';
import whatIsMock from '@/mock/solution-industry/what-is-mock';
import useCaseMock from '@/mock/solution-industry/usecase-mock';
import { getEntities } from '@/utils/utils';
import projectMock from '@/mock/solution-industry/section-project-mock';

import SectionSales from '@/components/sections/resource/section-sales';
import SectionPartners from '@/components/sections/product/section-partners';

export default function Page(props) {
  const router = useRouter();
  const defaultId = 'augmented-reality';
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
        <UseCase usecase={usecase} />
        <CMS_Slider />
        <ContactForm />
        <CMC_Tab />
        <EnterPrises />
        <Section3D />
        <SectionPartners />
        <Hybrid />
        <SectionSales />
      </Layout>
    </>
  );
}
