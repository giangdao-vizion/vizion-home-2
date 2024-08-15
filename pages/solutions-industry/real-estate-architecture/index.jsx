import Layout from '@/components/layout/Layout';
import heroMock from '@/mock/solution-industry/hero-mock';
import Hero from '@/components/sections/homepage/solution-industry/hero';
import { useRouter } from 'next/router';
import React from 'react';
import WhatIs from '@/components/sections/homepage/solution-industry/what-is';
import CMC_Tab from '@/components/sections/homepage/solution-industry/cms-tab';
import UseCase from '@/components/sections/homepage/solution-industry/usecase';
import CMS_Slider from '@/components/sections/homepage/solution-industry/cms-slider';
import ContactForm from '@/components/sections/homepage/solution-industry/contact-form';
import EnterPrises from '@/components/sections/homepage/solution-industry/enterprises';
import Section3D from '@/components/sections/homepage/solution-industry/section-3d';
import SectionCapture from '@/components/sections/homepage/solution-industry/section-capture';
import SectionProject from '@/components/sections/homepage/solution-industry/section-project';
import Hybrid from '@/components/sections/homepage/solution-industry/hybrid';
import SectionSales from '@/components/sections/homepage/solution-industry/section-sales';

export default function Page(props) {
  const router = useRouter();

  // sử dụng tạm id hero áp cứng
  const { heroId } = router.query;
  const defaultHeroId = 'real-estate-architecture';
  const hero = heroMock.find(her => her.heroId === heroId) || heroMock.find(her => her.heroId === defaultHeroId);

  if (!hero) return <p>Not found</p>;
  return (
    <>
      <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
        <Hero hero={hero} />
        {/* <WhatIs />
        <CMC_Tab />
        <UseCase />
        <CMS_Slider />
        <ContactForm />
        <EnterPrises />
        <Section3D />
        <SectionCapture />
        <SectionProject />
        <Hybrid />
        <SectionSales /> */}
      </Layout>
    </>
  );
}
