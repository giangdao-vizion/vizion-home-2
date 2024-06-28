import Layout from "@/components/layout/Layout";
import Seo_Section1 from '@/components/sections/homepage/Seo/Seo_Section1';
import Seo_Section2 from '@/components/sections/homepage/Seo/Seo_Section2';
import Seo_Section3 from '@/components/sections/homepage/Seo/Seo_Section3';
import Seo_Section4 from '@/components/sections/homepage/Seo/Seo_Section4';
import Seo_Section5 from '@/components/sections/homepage/Seo/Seo_Section5';
import Seo_Section6 from '@/components/sections/homepage/Seo/Seo_Section6';
import Seo_Section7 from '@/components/sections/homepage/Seo/Seo_Section7';
import Seo_Section8 from '@/components/sections/homepage/Seo/Seo_Section8';
export default function HomeSeo() {
    return (
        <>
            <Layout headerClass="is-transparent sala-dark-scheme overlay-navy" siteContentClass="pt0 pb0">
                <Seo_Section1 />
                <Seo_Section2 />
                <Seo_Section3 />
                <Seo_Section4 />
                <Seo_Section5 />
                <Seo_Section6 />
                <Seo_Section7 />
                <Seo_Section8 />
            </Layout>

        </>
    )
}