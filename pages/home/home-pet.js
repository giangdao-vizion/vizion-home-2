import Layout from "@/components/layout/Layout";
import Pet_Section1 from '@/components/sections/homepage/Pet/Pet_Section1';
import Pet_Section2 from '@/components/sections/homepage/Pet/Pet_Section2';
import Pet_Section3 from '@/components/sections/homepage/Pet/Pet_Section3';
import Pet_Section4 from '@/components/sections/homepage/Pet/Pet_Section4';
export default function HomePet() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0" headerClass="is-transparent">
                <Pet_Section1 />
                <Pet_Section2 />
                <Pet_Section3 />
                <Pet_Section4 />
            </Layout>

        </>
    )
}