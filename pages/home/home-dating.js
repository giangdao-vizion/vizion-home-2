import Layout from "@/components/layout/Layout";
import Dating_Section1 from "@/components/sections/homepage/Dating/Dating_Section1";
import Dating_Section2 from "@/components/sections/homepage/Dating/Dating_Section2";
import Dating_Section3 from "@/components/sections/homepage/Dating/Dating_Section3";
import Dating_Section4 from "@/components/sections/homepage/Dating/Dating_Section4";
import Dating_Section5 from "@/components/sections/homepage/Dating/Dating_Section5";
import Dating_Section6 from "@/components/sections/homepage/Dating/Dating_Section6";
import Dating_Section7 from "@/components/sections/homepage/Dating/Dating_Section7";
import Dating_Section8 from "@/components/sections/homepage/Dating/Dating_Section8";

export default function HomeDating() {
    return (
        <>
            <Layout headerClass="is-transparent" siteContentClass="pt0 pb0">
                <Dating_Section1 />
                <Dating_Section2 />
                <Dating_Section3 />
                <Dating_Section4 />
                <Dating_Section5 />
                <Dating_Section6 />
                <Dating_Section7 />
                <Dating_Section8 />
            </Layout>

        </>
    )
}
