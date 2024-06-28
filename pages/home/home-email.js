import Layout from "@/components/layout/Layout";
import Email_Section1 from "@/components/sections/homepage/Email/Email_Section1";
import Email_Section2 from "@/components/sections/homepage/Email/Email_Section2";
import Email_Section3 from "@/components/sections/homepage/Email/Email_Section3";
import Email_Section4 from "@/components/sections/homepage/Email/Email_Section4";
import Email_Section5 from "@/components/sections/homepage/Email/Email_Section5";
import Email_Section6 from "@/components/sections/homepage/Email/Email_Section6";
import Email_Section7 from "@/components/sections/homepage/Email/Email_Section7";
import Email_Section8 from "@/components/sections/homepage/Email/Email_Section8";
export default function HomeEmail() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Email_Section1 />
                <Email_Section2 />
                <Email_Section3 />
                <Email_Section4 />
                <Email_Section5 />
                <Email_Section6 />
                <Email_Section7 />
                <Email_Section8 />
            </Layout>

        </>
    )
}
