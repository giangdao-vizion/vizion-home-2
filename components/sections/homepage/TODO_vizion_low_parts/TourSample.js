import Link from 'next/link'

export default function TourSample() {
    const dataTours = [
        {
            linkUrl: "/",
            title: "DX SAMPLE FACTORY",
            imageUrl: "/assets/images/vizion/tours/snapedit_1703484514950.png",
            entryTitle: "",
            desc: "Chào mừng bạn đến với DX Sample Factory, nơi hội tụ tinh hoa của công nghệ in ấn hiện đại. Trải nghiệm ngay tour ảo để khám phá không gian sản xuất với các thiết bị tiên tiến và những bảng báo cáo minh chứng cho hiệu suất vượt trội của mỗi dây chuyền sản xuất. Điều này sẽ mang đến cho bạn cái nhìn toàn diện về sự tiến bộ và khả năng ứng dụng của tour ảo vào trong sản xuất nhà máy."
        },
        {
            linkUrl: "/",
            title: "FACTORY TOUR",
            imageUrl: "/assets/images/vizion/tours/factory-tour.png",
            entryTitle: "",
            desc: "Khám phá công nghệ và quy trình tiên tiến của một nhà máy tái chế chất thải hiện đại thông qua chuyến tham quan ảo đầy sống động với Tour Factory của chúng tôi."
        },
        {
            linkUrl: "/",
            title: "FACTORY TOUR AND REPORT",
            imageUrl: "/assets/images/vizion/tours/factory-tour.png",
            entryTitle: "",
            desc: "Trong chuyến tham quan nhà máy, chúng ta đã có thể quan sát vị trí của động cơ sản xuất. Khách tham quan có thể tương tác bằng cách nhấp chuột vào các máy đang nhấp nháy để xem thông tin, quy trình làm việc và hiệu suất được liệt kê trong báo cáo."
        },
    ];
    return (
        <>
            <section className="section spdtb">
                <div className="container overflow-hidden">
                    <div className="heading align-center">
                        <div className="heading-sub">SERVING MULTIPLE BUSINESS SECTORS</div>
                        <h2 className="heading-title size-xl">Ứng Dụng Đa Dạng Cho Nhiều Lĩnh Vực</h2>
                    </div>
                    <div className="row gx-5">
                        {
                            dataTours.map((data, index) => (
                                <div className="col-lg-6" key={index}>
                                    <div className="portfolio-item portfolio-grid mockup wow animate__animated   animate__fadeInUp">
                                        <article className="portfolio">
                                            <div className="entry-thumbnail">
                                                <Link href={data.linkUrl} title={data.title}>
                                                    <img src={data.imageUrl} alt={data.title} />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href={data.linkUrl} title="Mockup">{data.entryTitle}</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href={data.linkUrl} title={data.title}>{data.title}</Link></h3>
                                                    <p>{data.desc}</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* <div className="button-wrap align-center">
                        <Link href="/contact-01" className="button borderline" title="View All Work">View All Work</Link>
                    </div> */}
                </div>
            </section>

        </>
    )
}