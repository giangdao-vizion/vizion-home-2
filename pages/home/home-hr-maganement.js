import Layout from "@/components/layout/Layout";
import Hr_Management_Section1 from '@/components/sections/homepage/Hr_Management/Hr_Management_Section1';
import Hr_Management_Section2 from '@/components/sections/homepage/Hr_Management/Hr_Management_Section2';
import Hr_Management_Section3 from '@/components/sections/homepage/Hr_Management/Hr_Management_Section3';
import Hr_Management_Section4 from '@/components/sections/homepage/Hr_Management/Hr_Management_Section4';
import Hr_Management_Section5 from '@/components/sections/homepage/Hr_Management/Hr_Management_Section5';
import Hr_Management_Section6 from '@/components/sections/homepage/Hr_Management/Hr_Management_Section6';
import Hr_Management_Section7 from '@/components/sections/homepage/Hr_Management/Hr_Management_Section7';
import Hr_Management_Section8 from '@/components/sections/homepage/Hr_Management/Hr_Management_Section8';

export default function HomeHrManagement() {
    return (
        <>
            <Layout siteContentClass="pt0">
                <Hr_Management_Section1 />
                <Hr_Management_Section2 />
                <Hr_Management_Section3 />
                <Hr_Management_Section4 />
                <Hr_Management_Section5 />
                <Hr_Management_Section6 />
                <Hr_Management_Section7 />
                <Hr_Management_Section8 />
            </Layout>

        </>
    )
}
