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
import SectionCapture from '@/components/sections/solution-industry/section-capture';
import SectionProject from '@/components/sections/solution-industry/section-project';
import Hybrid from '@/components/sections/solution-industry/hybrid';
import SectionSales from '@/components/sections/solution-industry/section-sales';
import whatIsMock from '@/mock/solution-industry/what-is-mock';
import useCaseMock from '@/mock/solution-industry/usecase-mock';
import { getEntities } from '@/utils/utils';
import projectMock from '@/mock/solution-industry/section-project-mock';

export default function Page(props) {
  const router = useRouter();
  const defaultId = 'industry-4-0';
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
        <CMC_Tab /> {/* chưa set dynamic component */}
        <UseCase usecase={usecase} />
        <CMS_Slider />
        <ContactForm />
        <EnterPrises />
        <Section3D />
        <SectionCapture />
        <SectionProject project={project} />
        <Hybrid />
        <SectionSales />
      </Layout>
    </>
  );
}
