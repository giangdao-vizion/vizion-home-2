import Link from "next/link";
import { useEffect, useRef } from "react";
import Isotope from "isotope-layout";

export default function BusinessFilterItems() {
    const dataSections = [
        {
            entryTitle: "Lĩnh vực",
            title: "Sản xuất & Nhà máy",
            imageUrl:
                "/assets/images/vizion/business-sector/c6b093b4-06ff-4b3c-bcb8-3c9db08b013f-1.png",
            linkUrl: "/",
            desc: "Chào mừng bạn đến với DX Sample Factory, nơi hội tụ tinh hoa của công nghệ in ấn hiện đại. Trải nghiệm ngay tour ảo để khám phá không gian sản xuất với các thiết bị tiên tiến và những bảng báo cáo minh chứng cho hiệu suất vượt trội của mỗi dây chuyền sản xuất. Điều này sẽ mang đến cho bạn cái nhìn toàn diện về sự tiến bộ và khả năng ứng dụng của tour ảo vào trong sản xuất nhà máy.",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Bất động sản",
            imageUrl:
                "/assets/images/vizion/business-sector/09293264-9d13-4355-aa25-e71a9d6f05ba-1.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Showroom xe hơi",
            imageUrl:
                "/assets/images/vizion/business-sector/8fac90a2-d44c-4937-95b9-53e6f2f108f6-1.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Bán lẻ & Thương mại",
            imageUrl:
                "/assets/images/vizion/business-sector/ba1c293e-6349-4c3b-b10a-74833198447c-1.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Nội thất & Đồ gỗ",
            imageUrl:
                "/assets/images/vizion/business-sector/122025cd-5d20-47a0-9cab-c6c0d5de22dd-1.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Du lịch khám phá",
            imageUrl:
                "/assets/images/vizion/business-sector/769a635c-a339-4811-843b-35c36653f4ea-1.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Khách sạn & Resort",
            imageUrl:
                "/assets/images/vizion/business-sector/bc4ffdb6-aaf6-4c01-8dcc-a4c3e3752a78-1.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Cơ sở giáo dục",
            imageUrl:
                "/assets/images/vizion/business-sector/de8f686f-5e1e-49f9-8605-f1d8372539e0-1.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Nhà hàng & Quán ăn",
            imageUrl:
                "/assets/images/vizion/business-sector/afa0a8ec-aa72-49d6-9489-49af0d576325.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Giải trí & Văn hóa",
            imageUrl:
                "/assets/images/vizion/business-sector/82cc00a3-9270-46f1-88e1-bf4018c6aeb4.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Gym & Spa",
            imageUrl:
                "/assets/images/vizion/business-sector/810a55d7-9e6c-4022-9f11-5cb111ee10db-1.png",
            linkUrl: "/",
        },
        {
            entryTitle: "Lĩnh vực",
            title: "Bệnh viện & TTCS Sức khỏe",
            imageUrl:
                "/assets/images/vizion/business-sector/88da8769-8a48-43da-8364-43f0f10f98d9-1.png",
            linkUrl: "/",
        },
    ];

    // Isotope
    const isotope = useRef();
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid", {
                itemSelector: ".portfolio-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".portfolio-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 0);
    }, []);

    return (
        <div className={`grid style-minimal`}>
            <div className="grid-sizer" />
            {dataSections.map((data, index) => (
                <div
                    className={`portfolio-item grid-item--width2 portfolio-grid mockup`}
                    key={index}
                >
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href={data.linkUrl} title={data.title}>
                                <img
                                    src={data.imageUrl}
                                    alt={data.title}
                                />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href={data.title} title="Mockup">
                                    {data.entryTitle}
                                </Link>
                            </div>
                            <div className="entry-title">
                                <h3>
                                    <Link href="/" title="DX SAMPLE FACTORY">
                                        {data.title}
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </article>
                </div>
            ))}
        </div>
    );
}
