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
            desc: "Trải nghiệm trang web đẳng cấp của lĩnh vực Car Agents. Bắt đầu khám phá bề ngoài bắt mắt và thời thượng của chiếc xe, sau đó tận mắt tiến vào bên trong để trải nghiệm không gian nội thất đầy sang trong và tiện nghi của chiếc xe. Hãy cảm nhận độ đẳng cấp của sản phẩm qua từng góc nhìn.",
        },
        {
            title: "CAR SERVICES",
            imageUrl:
                "/assets/images/vizion/tours/5ce36e3e-1978-4744-9a6a-7848e12a3ce9.png",
            desc: "Trải nghiệm sự tiềm năng của các dịch vụ xe hơi thông qua các chuyến tham quan 3D của chúng tôi. Chúng ta sẽ được tận mắt nhìn ngắm những chiếc xe sang trọng được bảo dưỡng cẩn thận và chuyên nghiệp, thêm vào đó là dịch vụ chăm sóc khách hàng tuyệt vời. Hãy cùng trải nghiệm nét đột phá mới trong dịch vụ xe hơi ngày nay!",
        },
    ];

    return (
        <Layout siteContentClass="pt0 pb0">
            <section>
                <App_Showcase_Section1
                    title="Khám Phá Từng Chi Tiết Của Chiếc Xe Thông Qua Tour 360°" 
                    imageDisplayUrl="/assets/images/vizion/tours/car-v2.png" 
                />
            </section>

            <section>
                <HomePage_Live_Demo iframeUrl="https://view.vizion.space/car-services?mode=no-intro&menu-ui=gallery" />
            </section>

            <LiveDemo dataLiveDemo={dataLiveDemo} swiperCustom={{
                slidesPerView: 1,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                }
            }} />
        </Layout>
    );
}
