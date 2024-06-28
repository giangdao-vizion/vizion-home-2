import Layout from "@/components/layout/Layout";
import Shopify_App_Section1 from '@/components/sections/homepage/Shopify_App/Shopify_App_Section1';
import Shopify_App_Section2 from '@/components/sections/homepage/Shopify_App/Shopify_App_Section2';
import Shopify_App_Section3 from '@/components/sections/homepage/Shopify_App/Shopify_App_Section3';
import Shopify_App_Section4 from '@/components/sections/homepage/Shopify_App/Shopify_App_Section4';
import Shopify_App_Section5 from '@/components/sections/homepage/Shopify_App/Shopify_App_Section5';
import Shopify_App_Section6 from '@/components/sections/homepage/Shopify_App/Shopify_App_Section6';
import Shopify_App_Section7 from '@/components/sections/homepage/Shopify_App/Shopify_App_Section7';
import Shopify_App_Section8 from '@/components/sections/homepage/Shopify_App/Shopify_App_Section8';
import Shopify_App_Section9 from '@/components/sections/homepage/Shopify_App/Shopify_App_Section9';

export default function HomeShopifyApp() {
    return (
        <>
            <Layout headerClass="is-transparent" siteContentClass="pt0 pb0">
                <Shopify_App_Section1 />
                <Shopify_App_Section2 />
                <Shopify_App_Section3 />
                <Shopify_App_Section4 />
                <Shopify_App_Section5 />
                <Shopify_App_Section6 />
                <Shopify_App_Section7 />
                <Shopify_App_Section8 />
                <Shopify_App_Section9 />
            </Layout>

        </>
    )
}
