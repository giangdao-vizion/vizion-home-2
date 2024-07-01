import Layout from "@/components/layout/Layout";
import App_Showcase_Section1 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section1";
import HomePage_Live_Demo from "@/components/sections/homepage/Nft/HomePage_Live_Demo";
import LiveDemo from "@/components/sections/homepage/VizionComponents/LiveDemo";

export default function BatDongSan() {
    const dataLiveDemo = [
        {
            title: "Novaworld HO TRAM - Ocean Villa",
            imageUrl: "/assets/images/vizion/tours/novaworld-ho-tram-ocean-villa.png",
            desc: ""
        },
        {
            title: "Novaworld HO TRAM - Shop House",
            imageUrl: "/assets/images/vizion/tours/novaworld-ho-tram-shop-house.png",
            desc: ""
        },
        {
            title: "Aquacity Villa House",
            imageUrl: "/assets/images/vizion/tours/aquacity-villa-house.png",
            desc: ""
        },
        {
            title: "AQUACITY LUXURY HOUSE",
            imageUrl: "/assets/images/vizion/tours/aquacity-luxury-house.png",
            desc: ""
        },
        {
            title: "PROJECT TEMPLATE IN REAL ESTATE INDUSTRY",
            imageUrl: "/assets/images/vizion/tours/project-template-in-real-estate-industry.png",
            desc: ""
        },
        {
            title: "SUCCESS OFFICE TOUR 19A CONG HOA",
            imageUrl: "/assets/images/vizion/tours/success-software-19a-ch.png",
            desc: ""
        },
        {
            title: "SUCCESS OFFICE TOUR 8 LE TRUNG NGHIA",
            imageUrl: "/assets/images/vizion/tours/success-software-8-ltn.png",
            desc: ""
        },
        {
            title: "CASA HOUSE",
            imageUrl: "/assets/images/vizion/tours/snapedit_1703565650490.png",
            desc: ""
        },
        {
            title: "HANOI PHOENIX HOUSE",
            imageUrl: "/assets/images/vizion/tours/snapedit_1703566077935.png",
            desc: ""
        },
        {
            title: "KEEAUMOKU UNIT 11 HOUSE",
            imageUrl: "/assets/images/vizion/tours/snapedit_1703566299443.png",
            desc: ""
        },
        {
            title: "KEEAUMOKU HOUSE",
            imageUrl: "/assets/images/vizion/tours/snapedit_1703566174226.png",
            desc: ""
        },
        {
            title: "PROMOTION HOUSE",
            imageUrl: "/assets/images/vizion/tours/snapedit_1703566331560.png",
            desc: ""
        },
    ];

    return (
        <Layout siteContentClass="pt0 pb0">
            <section>
                <App_Showcase_Section1 />
            </section>

            <section>
                <HomePage_Live_Demo iframeUrl="https://view.vizion.space/aquacity-house-villa?mode=no-intro&menu-ui=gallery" />
            </section>

            <LiveDemo dataLiveDemo={dataLiveDemo} />
        </Layout>
    );
}
