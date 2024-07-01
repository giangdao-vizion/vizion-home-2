import Layout from "@/components/layout/Layout";
import App_Showcase_Section1 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section1";
import HomePage_Live_Demo from "@/components/sections/homepage/Nft/HomePage_Live_Demo";
import LiveDemo from "@/components/sections/homepage/VizionComponents/LiveDemo";

export default function ShowroomXeHoi() {
    const dataLiveDemo = [
        {
            title: "CAR AGENTS",
            imageUrl:
                "/assets/images/vizion/tours/ride-comfort.jpg",
            desc: "",
        },
        {
            title: "CAR SERVICES",
            imageUrl:
                "/assets/images/vizion/tours/5ce36e3e-1978-4744-9a6a-7848e12a3ce9.png",
            desc: "",
        },
    ];

    return (
        <Layout siteContentClass="pt0 pb0">
            <section>
                <App_Showcase_Section1 />
            </section>

            <section>
                <HomePage_Live_Demo iframeUrl="https://view.vizion.space/car-services?mode=no-intro&menu-ui=gallery" />
            </section>

            <LiveDemo dataLiveDemo={dataLiveDemo} />
        </Layout>
    );
}
