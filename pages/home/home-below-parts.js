import Layout from "@/components/layout/Layout";
import BusinessSection from "@/components/sections/homepage/TODO_vizion_low_parts/BusinessSection";
import GetInTouch from "@/components/sections/homepage/TODO_vizion_low_parts/GetInTouch";
import OurInvestor from "@/components/sections/homepage/TODO_vizion_low_parts/Our_Investor";
import Our_Services_Section from "@/components/sections/homepage/TODO_vizion_low_parts/Our_Services_Section";
import TourSample from "@/components/sections/homepage/TODO_vizion_low_parts/TourSample";

export default function HomeBelowParts() {
    return (
        <>
            <Layout siteContentClass="pt0">
                <BusinessSection />
                <Our_Services_Section />
                <OurInvestor />
                <GetInTouch />
                <TourSample />
            </Layout>
        </>
    );
}
