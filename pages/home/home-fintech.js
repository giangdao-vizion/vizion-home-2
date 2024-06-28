import Layout from "@/components/layout/Layout";
import Fintech_Section1 from "@/components/sections/homepage/Fintech/Fintech_Section1";
import Fintech_Section2 from "@/components/sections/homepage/Fintech/Fintech_Section2";
import Fintech_Section3 from "@/components/sections/homepage/Fintech/Fintech_Section3";
import Fintech_Section4 from "@/components/sections/homepage/Fintech/Fintech_Section4";
import Fintech_Section5 from "@/components/sections/homepage/Fintech/Fintech_Section5";
import Fintech_Section6 from "@/components/sections/homepage/Fintech/Fintech_Section6";
import Fintech_Section7 from "@/components/sections/homepage/Fintech/Fintech_Section7";
import Fintech_Section8 from "@/components/sections/homepage/Fintech/Fintech_Section8";

export default function HomeFintech() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Fintech_Section1 />
                <Fintech_Section2 />
                <Fintech_Section3 />
                <Fintech_Section4 />
                <Fintech_Section5 />
                <Fintech_Section6 />
                <Fintech_Section7 />
                <Fintech_Section8 />
            </Layout>

        </>
    )
}
