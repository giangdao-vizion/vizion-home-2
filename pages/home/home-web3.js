import Layout from "@/components/layout/Layout";
import Web3_Section1 from '@/components/sections/homepage/Web3/Web3_Section1';
import Web3_Section2 from '@/components/sections/homepage/Web3/Web3_Section2';
import Web3_Section3 from '@/components/sections/homepage/Web3/Web3_Section3';
import Web3_Section4 from '@/components/sections/homepage/Web3/Web3_Section4';
import Web3_Section5 from '@/components/sections/homepage/Web3/Web3_Section5';
import Web3_Section6 from '@/components/sections/homepage/Web3/Web3_Section6';
import Web3_Section7 from '@/components/sections/homepage/Web3/Web3_Section7';
export default function HomeWeb3() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Web3_Section1 />
                <Web3_Section2 />
                <Web3_Section3 />
                <Web3_Section4 />
                <Web3_Section5 />
                <Web3_Section6 />
                <Web3_Section7 />
            </Layout>

        </>
    )
}