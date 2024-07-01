import Link from "next/link";
export default function Our_Services_Section() {
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub color-vizion">TRẢI NGHIỆM SỰ KHÁC BIỆT</div>
                        <h2 className="heading-title w500 size-l"><span className="heading-title-hightlight color-vizion">Dịch Vụ</span> Của Chúng Tôi</h2>
                    </div>
                    <div className="block-image-box layout-04">
                        <div className="image-box">
                            <div className="thumbnail">
                                <img src="/assets/images/vizion/our-services/hp-os-360-business-tour.png" alt="Thumbnail" />
                            </div>
                            <div className="content">
                                <h4 className="title">360° Business Tours</h4>
                                <div className="desc">Giới thiệu các địa điểm kinh doanh của bạn bằng tour tham quan 360° của chúng tôi.</div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text" title="Xem thêm">Xem thêm <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-box">
                            <div className="thumbnail">
                                <img src="/assets/images/vizion/our-services/hp-os-360-tour-intergration.png" alt="Thumbnail" />
                            </div>
                            <div className="content">
                                <h4 className="title">360° Tours Integration</h4>
                                <div className="desc">Nâng tầm thương hiệu với trải nghiệm 3D được tùy chỉnh theo nhu cầu kinh doanh của bạn.</div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text" title="Xem thêm">Xem thêm <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-box">
                            <div className="thumbnail">
                                <img src="/assets/images/vizion/our-services/hp-os-custom-3d-experince.png" alt="Thumbnail" />
                            </div>
                            <div className="content">
                                <h4 className="title">Custom 3D Experience</h4>
                                <div className="desc">Tối ưu hoá doanh nghiệp, phục vụ nhu cầu cụ thể và tạo ra trải nghiệm 3D độc đáo.​</div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text" title="Xem thêm">Xem thêm <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}