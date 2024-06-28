import Layout from "@/components/layout/Layout";
import Webinar_Section1 from '@/components/sections/homepage/Webinar/Webinar_Section1';
import Webinar_Section2 from '@/components/sections/homepage/Webinar/Webinar_Section2';
import Webinar_Section3 from '@/components/sections/homepage/Webinar/Webinar_Section3';
import Webinar_Section4 from '@/components/sections/homepage/Webinar/Webinar_Section4';
import Webinar_Section5 from '@/components/sections/homepage/Webinar/Webinar_Section5';
import Webinar_Section6 from '@/components/sections/homepage/Webinar/Webinar_Section6';
import Webinar_Section7 from '@/components/sections/homepage/Webinar/Webinar_Section7';
import Webinar_Section8 from '@/components/sections/homepage/Webinar/Webinar_Section8';
import Webinar_Section9 from "@/components/sections/homepage/Webinar/Webinar_Section9";
export default function HomeWebinar() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0" headerClass="is-transparent">
                <Webinar_Section1 />
                <Webinar_Section2 />
                <Webinar_Section3 />
                <Webinar_Section4 />
                <Webinar_Section5 />
                <Webinar_Section6 />
                <Webinar_Section7 />
                <Webinar_Section8 />
                <Webinar_Section9 />
            </Layout>

        </>
    )
}