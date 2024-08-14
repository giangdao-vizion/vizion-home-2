import Layout from '@/components/layout/Layout';
import { solutionListMock } from '@/mock/solution';
import Hero from '@/components/sections/homepage/solution-industry/hero';
import { useRouter } from 'next/router';
import React from 'react';
import WhatIs from '@/components/sections/homepage/solution-industry/what-is';
import TopFea from '@/components/sections/homepage/solution-industry/topfea';
import UseCase from '@/components/sections/homepage/solution-industry/usecase';
import Slider from '@/components/sections/homepage/solution-industry/slider';
import TrialNow from '@/components/sections/homepage/solution-industry/trial_now';
import Holistic from '@/components/sections/homepage/solution-industry/holistic';
import TryIt from '@/components/sections/homepage/solution-industry/try-it';
import ContactSale from '@/components/sections/homepage/solution-industry/contact-sale';
import LearnWhatWe from '@/components/sections/homepage/solution-industry/learn-what-we';
import Hybrid from '@/components/sections/homepage/solution-industry/hybrid';
import SetUp from '@/components/sections/homepage/solution-industry/setup';

export default function Page(props) {
  const router = useRouter();
  const { solutionId } = router.query || {};
  const solution = solutionListMock.find(sol => sol.solutionId === solutionId);

  if (!solution) return <p>Not found</p>;
  return (
    <>
      <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
        <Hero />
        <WhatIs />
        <TopFea />
        <UseCase />
        <Slider />
        <TrialNow />
        <Holistic />
        <TryIt />
        <ContactSale />
        <LearnWhatWe />
        <Hybrid />
        <SetUp />
      </Layout>
    </>
  );
}
