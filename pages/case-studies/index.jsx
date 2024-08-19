import Layout from '@/components/layout/Layout';
import SectionSales from '@/components/sections/resource/section-sales';
import SectionStudies from '@/components/sections/resource/section-studies';
import ParentComponent from '@/mock/solution-industry/list-mock';
import React from 'react';

export default function Page(props) {
  return (
    <>
      <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
        <SectionStudies />
        <SectionSales />
      </Layout>
    </>
  );
}
