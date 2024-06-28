import Layout from "@/components/layout/Layout";
import Video_Section1 from '@/components/sections/homepage/Video/Video_Section1';
import Video_Section2 from '@/components/sections/homepage/Video/Video_Section2';
import Video_Section3 from '@/components/sections/homepage/Video/Video_Section3';
import Video_Section4 from '@/components/sections/homepage/Video/Video_Section4';
import Video_Section5 from '@/components/sections/homepage/Video/Video_Section5';
import Video_Section6 from '@/components/sections/homepage/Video/Video_Section6';
import Video_Section7 from '@/components/sections/homepage/Video/Video_Section7';
import Video_Section8 from '@/components/sections/homepage/Video/Video_Section8';
import Video_Section9 from "@/components/sections/homepage/Video/Video_Section9";
export default function HomeVideo() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Video_Section1 />
                <Video_Section2 />
                <Video_Section3 />
                <Video_Section4 />
                <Video_Section5 />
                <Video_Section6 />
                <Video_Section7 />
                <Video_Section8 />
                <Video_Section9 />
            </Layout>

        </>
    )
}