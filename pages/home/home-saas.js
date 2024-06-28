import Layout from "@/components/layout/Layout";
import Saas_Section1 from '@/components/sections/homepage/Saas/Saas_Section1';
import Saas_Section2 from '@/components/sections/homepage/Saas/Saas_Section2';
import Saas_Section3 from '@/components/sections/homepage/Saas/Saas_Section3';
import Saas_Section4 from '@/components/sections/homepage/Saas/Saas_Section4';
import Saas_Section5 from '@/components/sections/homepage/Saas/Saas_Section5';
import Saas_Section6 from '@/components/sections/homepage/Saas/Saas_Section6';
import Saas_Section7 from '@/components/sections/homepage/Saas/Saas_Section7';
import Saas_Section8 from '@/components/sections/homepage/Saas/Saas_Section8';
export default function HomeSaas() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Saas_Section1 />
                <Saas_Section2 />
                <Saas_Section3 />
                <Saas_Section4 />
                <Saas_Section5 />
                <Saas_Section6 />
                <Saas_Section7 />
                <Saas_Section8 />
            </Layout>

        </>
    )
}