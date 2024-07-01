import Layout from "@/components/layout/Layout";
import App_Showcase_Section1 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section1";
import HomePage_Live_Demo from "@/components/sections/homepage/Nft/HomePage_Live_Demo";
import LiveDemo from "@/components/sections/homepage/VizionComponents/LiveDemo";

export default function NhaMaySX() {
    const dataLiveDemo = [
        {
            title: "DX Sample Factory",
            imageUrl: "/assets/images/vizion/tours/snapedit_1703484514950.png",
            desc: "",
        },
        {
            title: "Factory Tour",
            imageUrl: "/assets/images/vizion/tours/factory-tour.png",
            desc: "",
        },
        {
            title: "Factory Tour & Report",
            imageUrl: "/assets/images/vizion/tours/image-1.png",
            desc: "",
        },
        {
            title: "Demo Showroom 3D",
            imageUrl: "/assets/images/vizion/tours/demo-3d-showroom-1.png",
            desc: "",
        },
        {
            title: "Showroom 360 demo",
            imageUrl:
                "/assets/images/vizion/tours/ea2de815-09c8-4fd3-9fa8-7b4b905c2519.png",
            desc: "",
        },
        {
            title: "Showroom 360 demo 2",
            imageUrl:
                "/assets/images/vizion/tours/e5cd3f6e-c427-4b66-99b0-5f156c33c26a.png",
            desc: "",
        },
    ];
    return (
        <Layout siteContentClass="pt0 pb0">
            <section>
                <App_Showcase_Section1 />
            </section>

            <section>
                <HomePage_Live_Demo iframeUrl="https://view.vizion.space/demo?mode=no-intro&menu-ui=gallery" />
            </section>

            <LiveDemo dataLiveDemo={dataLiveDemo} />

            {/* TODO: remove */}
            {/* <App_Showcase_Section7 /> */}
        </Layout>
    );
}
