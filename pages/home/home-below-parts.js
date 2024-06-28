import Layout from "@/components/layout/Layout";
import BusinessSection from "@/components/sections/homepage/VizionComponents/BusinessSection";
import GetInTouch from "@/components/sections/homepage/VizionComponents/GetInTouch";
import OurInvestor from "@/components/sections/homepage/VizionComponents/Our_Investor";
import Our_Services_Section from "@/components/sections/homepage/VizionComponents/Our_Services_Section";
import TourSample from "@/components/sections/homepage/VizionComponents/TourSample";

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
