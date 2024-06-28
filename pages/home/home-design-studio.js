import Layout from "@/components/layout/Layout";
import Design_Studio_Section1 from '@/components/sections/homepage/Design_Studio/Design_Studio_Section1';
import Design_Studio_Section2 from '@/components/sections/homepage/Design_Studio/Design_Studio_Section2';
import Design_Studio_Section3 from '@/components/sections/homepage/Design_Studio/Design_Studio_Section3';
import Design_Studio_Section4 from '@/components/sections/homepage/Design_Studio/Design_Studio_Section4';
import Design_Studio_Section5 from '@/components/sections/homepage/Design_Studio/Design_Studio_Section5';
import Design_Studio_Section6 from '@/components/sections/homepage/Design_Studio/Design_Studio_Section6';
export default function HomeDesignStudio() {
    return (
        <>
            <Layout siteContentClass="pt0">
                <Design_Studio_Section1 />
                <Design_Studio_Section2 />
                <Design_Studio_Section3 />
                <Design_Studio_Section4 />
                <Design_Studio_Section5 />
                <Design_Studio_Section6 />
            </Layout>

        </>
    )
}
