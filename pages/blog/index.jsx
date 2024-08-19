import Layout from '@/components/layout/Layout';
import SectionSales from '@/components/sections/resource/section-sales';
import React from 'react';

export default function Page(props) {
  return (
    <>
      <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
        <SectionSales />
      </Layout>
    </>
  );
}
