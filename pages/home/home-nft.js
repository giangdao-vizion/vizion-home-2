import Layout from "@/components/layout/Layout";
import Nft_Section1 from '@/components/sections/homepage/Nft/Nft_Section1';
import Nft_Section10 from "@/components/sections/homepage/Nft/Nft_Section10";
import Nft_Section2 from '@/components/sections/homepage/Nft/Nft_Section2';
import Nft_Section3 from '@/components/sections/homepage/Nft/Nft_Section3';
import Nft_Section4 from '@/components/sections/homepage/Nft/Nft_Section4';
import Nft_Section5 from '@/components/sections/homepage/Nft/Nft_Section5';
import Nft_Section6 from '@/components/sections/homepage/Nft/Nft_Section6';
import Nft_Section7 from '@/components/sections/homepage/Nft/Nft_Section7';
import Nft_Section8 from '@/components/sections/homepage/Nft/Nft_Section8';
import Nft_Section9 from "@/components/sections/homepage/Nft/Nft_Section9";
export default function HomeNft() {
    return (
        <>
            <Layout headerClass="is-transparent sala-dark-scheme" siteContentClass="pt0 pb0">
                <Nft_Section1 />
                <Nft_Section2 />
                <Nft_Section3 />
                <Nft_Section4 />
                <Nft_Section5 />
                <Nft_Section6 />
                <Nft_Section7 />
                <Nft_Section8 />
                <Nft_Section9 />
                <Nft_Section10 />
            </Layout>

        </>
    )
}