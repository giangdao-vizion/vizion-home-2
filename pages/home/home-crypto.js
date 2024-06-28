import Layout from "@/components/layout/Layout";
import Crypto_Section1 from "@/components/sections/homepage/Crypto/Crypto_Section1";
import Crypto_Section2 from "@/components/sections/homepage/Crypto/Crypto_Section2";
import Crypto_Section3 from "@/components/sections/homepage/Crypto/Crypto_Section3";
import Crypto_Section4 from "@/components/sections/homepage/Crypto/Crypto_Section4";
import Crypto_Section5 from "@/components/sections/homepage/Crypto/Crypto_Section5";
import Crypto_Section6 from "@/components/sections/homepage/Crypto/Crypto_Section6";
import Crypto_Section7 from "@/components/sections/homepage/Crypto/Crypto_Section7";
import Crypto_Section8 from "@/components/sections/homepage/Crypto/Crypto_Section8";

export default function HomeCrypto() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Crypto_Section1 />
                <Crypto_Section2 />
                <Crypto_Section3 />
                <Crypto_Section4 />
                <Crypto_Section5 />
                <Crypto_Section6 />
                <Crypto_Section7 />
                <Crypto_Section8 />
            </Layout>

        </>
    )
}
