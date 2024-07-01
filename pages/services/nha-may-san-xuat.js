import Layout from "@/components/layout/Layout";
import App_Showcase_Section1 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section1";
import App_Showcase_Section7 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section7";
import HomePage_Live_Demo from "@/components/sections/homepage/Nft/HomePage_Live_Demo";

export default function NhaMaySX() {
    return <Layout siteContentClass="pt0 pb0">
        <section>
          <App_Showcase_Section1 />
        </section>

        <section>
          <HomePage_Live_Demo />
        </section>

        <App_Showcase_Section7 />
    </Layout>;
}
