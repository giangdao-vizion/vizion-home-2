import Layout from "@/components/layout/Layout";
import Ecommerce_Agency_Section1 from "@/components/sections/homepage/Ecommerce_Agency/Ecommerce_Agency_Section1";
import Ecommerce_Agency_Section2 from "@/components/sections/homepage/Ecommerce_Agency/Ecommerce_Agency_Section2";
import Ecommerce_Agency_Section3 from "@/components/sections/homepage/Ecommerce_Agency/Ecommerce_Agency_Section3";
import Ecommerce_Agency_Section4 from "@/components/sections/homepage/Ecommerce_Agency/Ecommerce_Agency_Section4";
import Ecommerce_Agency_Section5 from "@/components/sections/homepage/Ecommerce_Agency/Ecommerce_Agency_Section5";
import Ecommerce_Agency_Section6 from "@/components/sections/homepage/Ecommerce_Agency/Ecommerce_Agency_Section6";
import Ecommerce_Agency_Section7 from "@/components/sections/homepage/Ecommerce_Agency/Ecommerce_Agency_Section7";

export default function HomeEcommerceAgency() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Ecommerce_Agency_Section1 />
                <Ecommerce_Agency_Section2 />
                <Ecommerce_Agency_Section3 />
                <Ecommerce_Agency_Section4 />
                <Ecommerce_Agency_Section5 />
                <Ecommerce_Agency_Section6 />
                <Ecommerce_Agency_Section7 />
            </Layout>

        </>
    )
}
