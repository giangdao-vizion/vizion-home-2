import Layout from "@/components/layout/Layout";
import Design_Portfolio_Section1 from "@/components/sections/homepage/Design_Portfolio/Design_Portfolio_Section1";
import Design_Portfolio_Section2 from "@/components/sections/homepage/Design_Portfolio/Design_Portfolio_Section2";
import Design_Portfolio_Section3 from "@/components/sections/homepage/Design_Portfolio/Design_Portfolio_Section3";
import Design_Portfolio_Section4 from "@/components/sections/homepage/Design_Portfolio/Design_Portfolio_Section4";
import Design_Portfolio_Section5 from "@/components/sections/homepage/Design_Portfolio/Design_Portfolio_Section5";

export default function HomeDesignPortfolio() {
    return (
        <>
            <Layout headerClass="is-transparent sala-dark-scheme" siteContentClass="pt0 pb0">
                <Design_Portfolio_Section1 />
                <Design_Portfolio_Section2 />
                <Design_Portfolio_Section3 />
                <Design_Portfolio_Section4 />
                <Design_Portfolio_Section5 />
            </Layout>

        </>
    )
}
