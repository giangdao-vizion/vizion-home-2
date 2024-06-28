import Layout from "@/components/layout/Layout";
import Music_App_Section1 from '@/components/sections/homepage/Music_App/Music_App_Section1';
import Music_App_Section2 from '@/components/sections/homepage/Music_App/Music_App_Section2';
import Music_App_Section3 from '@/components/sections/homepage/Music_App/Music_App_Section3';
import Music_App_Section4 from '@/components/sections/homepage/Music_App/Music_App_Section4';
import Music_App_Section5 from '@/components/sections/homepage/Music_App/Music_App_Section5';
import Music_App_Section6 from '@/components/sections/homepage/Music_App/Music_App_Section6';
import Music_App_Section7 from '@/components/sections/homepage/Music_App/Music_App_Section7';

export default function HomeMusicApp() {
    return (
        <>
            <Layout siteContentClass="pt0">
                <Music_App_Section1 />
                <Music_App_Section2 />
                <Music_App_Section3 />
                <Music_App_Section4 />
                <Music_App_Section5 />
                <Music_App_Section6 />
                <Music_App_Section7 />
            </Layout>

        </>
    )
}
