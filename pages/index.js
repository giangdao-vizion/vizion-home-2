import Layout from "@/components/layout/Layout";
import App_Showcase_Section1 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section1";

import App_Showcase_Section_01_Vz from "@/components/sections/homepage/App_Showcase/App_Showcase_Section_01_Vz";
import App_Showcase_Section_02_Vz from "@/components/sections/homepage/App_Showcase/App_Showcase_Section_02_Vz";
import App_Showcase_Section_03_Vz from "@/components/sections/homepage/App_Showcase/App_Showcase_Section_03_Vz";
import Fitness_Section5_Vz from "@/components/sections/homepage/Fitness/Fitness_Section5_Vz";

import Ico_Section3 from "@/components/sections/homepage/Ico/Ico_Section3";
import HomePage_Live_Demo from "@/components/sections/homepage/Nft/HomePage_Live_Demo";

import BusinessSection from "@/components/sections/homepage/VizionComponents/BusinessSection";
import GetInTouch from "@/components/sections/homepage/VizionComponents/GetInTouch";
import OurInvestor from "@/components/sections/homepage/VizionComponents/Our_Investor";
import Our_Services_Section from "@/components/sections/homepage/VizionComponents/Our_Services_Section";

export default function Index() {
  return (
    <>
      <Layout siteContentClass="pt0 pb0">
        <section>
          <App_Showcase_Section1 />
        </section>

        <section>
          <Ico_Section3 />
        </section>

        {/* <section>
          <App_Showcase_Section_01_Vz />
        </section>

        <section>
          <App_Showcase_Section_02_Vz />
        </section>

        <section>
          <App_Showcase_Section_03_Vz />
        </section> */}

        <Fitness_Section5_Vz />

        <section>
          <HomePage_Live_Demo />
        </section>

        <BusinessSection />
        <Our_Services_Section />
        <OurInvestor />
        <GetInTouch />
        {/* <TourSample /> */}
      </Layout>
    </>
  );
}
