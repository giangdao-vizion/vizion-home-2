import Layout from "@/components/layout/Layout";
import Startup_Section1 from '@/components/sections/homepage/Startup/Startup_Section1';
import Startup_Section10 from "@/components/sections/homepage/Startup/Startup_Section10";
import Startup_Section2 from '@/components/sections/homepage/Startup/Startup_Section2';
import Startup_Section3 from '@/components/sections/homepage/Startup/Startup_Section3';
import Startup_Section4 from '@/components/sections/homepage/Startup/Startup_Section4';
import Startup_Section5 from '@/components/sections/homepage/Startup/Startup_Section5';
import Startup_Section6 from '@/components/sections/homepage/Startup/Startup_Section6';
import Startup_Section7 from '@/components/sections/homepage/Startup/Startup_Section7';
import Startup_Section8 from '@/components/sections/homepage/Startup/Startup_Section8';
import Startup_Section9 from "@/components/sections/homepage/Startup/Startup_Section9";
export default function HomeStartup() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Startup_Section1 />
                <Startup_Section2 />
                <Startup_Section3 />
                <Startup_Section4 />
                <Startup_Section5 />
                <Startup_Section6 />
                <Startup_Section7 />
                <Startup_Section8 />
                <Startup_Section9 />
                <Startup_Section10 />
            </Layout>

        </>
    )
}