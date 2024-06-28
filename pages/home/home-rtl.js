import Layout from "@/components/layout/Layout";
import Rtl_Section1 from '@/components/sections/homepage/Rtl/Rtl_Section1';
import Rtl_Section2 from '@/components/sections/homepage/Rtl/Rtl_Section2';
import Rtl_Section3 from '@/components/sections/homepage/Rtl/Rtl_Section3';
import Rtl_Section4 from '@/components/sections/homepage/Rtl/Rtl_Section4';
import Rtl_Section5 from '@/components/sections/homepage/Rtl/Rtl_Section5';
import Rtl_Section6 from '@/components/sections/homepage/Rtl/Rtl_Section6';
import Rtl_Section7 from '@/components/sections/homepage/Rtl/Rtl_Section7';
import Rtl_Section8 from '@/components/sections/homepage/Rtl/Rtl_Section8';
export default function HomeRtl() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Rtl_Section1 />
                <Rtl_Section2 />
                <Rtl_Section3 />
                <Rtl_Section4 />
                <Rtl_Section5 />
                <Rtl_Section6 />
                <Rtl_Section7 />
                <Rtl_Section8 />
            </Layout>

        </>
    )
}