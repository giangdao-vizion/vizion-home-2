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
import StoryTellings from '@/components/sections/product/storytelling';
import CMS_Slider from '@/components/sections/solution-industry/cms-slider';
import ContactForm from '@/components/sections/solution-industry/contact-form';
import SectionAdvantages from '@/components/sections/product/section-advantages';
import CMC_Tab from '@/components/sections/solution-industry/cms-tab';
import Industries from '@/components/vizion/Home/Industries';
import SectionPartners from '@/components/sections/product/section-partners';
import SectionProject from '@/components/sections/solution-industry/section-project';
import SectionSales from '@/components/sections/product/section-sales';

export default function Page(props) {
  const router = useRouter();
  const defaultId = '3d-creators';
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
        <StoryTellings />
        {/* ở ngay đây còn cái section class="storytelling__wrap-2" cuộn cuộn đẹp mắt 
        của https://www.treedis.com/product-by-type/3d-creators */}
        <CMS_Slider />
        <ContactForm />
        <SectionAdvantages />
        <CMC_Tab />
        <Industries />
        <SectionPartners />
        <SectionProject project={project} />
        <SectionSales />
      </Layout>
    </>
  );
}
