import Layout from '@/components/layout/Layout';
import SectionCareer from '@/components/sections/resource/section-career';
import SectionCategories from '@/components/sections/resource/section-categories';
import SectionWithUs from '@/components/sections/resource/section-withus';
import React from 'react';

export default function Page(props) {
  return (
    <>
      <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
        <SectionCareer />
        <SectionCategories />
        <SectionWithUs />
      </Layout>
    </>
  );
}
