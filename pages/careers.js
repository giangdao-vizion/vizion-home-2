import Layout from "@/components/layout/Layout";
import CareerGallerySlider from "@/components/slider/CareerGallerySlider";
import Link from "next/link";
export default function Careers() {
    return (
        <>
            <Layout
                pageTitle="Careers"
                pageTitleDesc="Our mission is to create a workplace where work empowers people."
                pageTitleBtn="Opportunities"
            >

                <div className="section-banner layout-03" style={{ backgroundImage: 'url(/assets/images/banner-image-03.jpg)' }}>
                    <div className="container">
                        <div className="content">
                            <div className="heading heading-alway-white align-center">
                                <h2 className="heading-title">The team behind helping businesses <br /> better their bottom lines</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section spdt">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title">Values that define us</h2>
                            <div className="heading-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                        </div>
                        <div className="block-icon-box layout-01">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/ib-01.png" alt="Icon" />
                                            </div>
                                            <div className="content pdr50">
                                                <h3 className="title">Patients Come First</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/ib-02.png" alt="Icon" />
                                            </div>
                                            <div className="content pdr50">
                                                <h3 className="title">Be a pro</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/ib-03.png" alt="Icon" />
                                            </div>
                                            <div className="content pdr50">
                                                <h3 className="title">Patients Come First</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/ib-04.png" alt="Icon" />
                                            </div>
                                            <div className="content pdr50">
                                                <h3 className="title">Holidays &amp; Parental</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/ib-05.png" alt="Icon" />
                                            </div>
                                            <div className="content pdr50">
                                                <h3 className="title">Work-life flexibility</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/ib-06.png" alt="Icon" />
                                            </div>
                                            <div className="content pdr50">
                                                <h3 className="title">Perfectionist visionaries</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="block-gallery layout-02">
                    <div className="container">
                        <div className="swiper uxp-swiper-slider">
                            <CareerGallerySlider />

                        </div>
                    </div>
                </div>
                <section className="section-posttype spdt">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title">Opportunities</h2>
                            <div className="heading-desc">We’re regularly hiring across all areas of our business, so get in touch to hear about new opportunities.</div>
                        </div>
                        <div className="posttype">
                            <div className="box">
                                <div className="content">
                                    <h3 className="title">Frontend Engineer</h3>
                                    <div className="desc">Full Time , New York, USA</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/careers-detail" className="button fullfield" title="Detail">Detail</Link>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <h3 className="title">Product Designer</h3>
                                    <div className="desc">Full Time , Lake Colby, UK</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/careers-detail" className="button fullfield" title="Detail">Detail</Link>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <h3 className="title">Full-stack Web Developer</h3>
                                    <div className="desc">Full Time , Remote</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/careers-detail" className="button fullfield" title="Detail">Detail</Link>
                                </div>
                            </div>
                        </div>
                        <div className="action align-center mt60 mb-60 pb-5 mb-5">
                            <p>We’re always keen to hear from great people</p>
                            <Link href="/" title="Get In Touch">Get In Touch <i className="las la-long-arrow-alt-right" /></Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
