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
import whatIsMock from '@/mock/solution-industry/what-is-mock';
import useCaseMock from '@/mock/solution-industry/usecase-mock';

export default function Page(props) {
  const router = useRouter();
  const defaultId = 'industry-4-0';
  // sử dụng id áp cứng
  const defaultHeroId = defaultId;
  const defaultWhatIsId = defaultId;
  const defaultUseCaseId = defaultId;
  // sử dụng id từ url
  const { heroId } = router.query;
  const { whatisId } = router.query;
  const { usecaseId } = router.query;
  const hero = heroMock.find(her => her.heroId === heroId) || heroMock.find(her => her.heroId === defaultHeroId);
  const whatis =
    whatIsMock.find(wha => wha.whatIsId === whatisId) || whatIsMock.find(wha => wha.whatIsId === defaultWhatIsId);
  const usecase =
    useCaseMock.find(use => use.useCaseId === usecaseId) || useCaseMock.find(use => use.useCaseId === defaultUseCaseId);
  // if (!hero) return <p>Not found</p>;
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
        <SectionProject />
        <Hybrid />
        <SectionSales />
      </Layout>
    </>
  );
}
