import CounterUp from '@/components/elements/CounterUp';
import Layout from '@/components/layout/Layout';
import Link from "next/link";

export default function ServiceTwo() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <section className="section background-grey opt120">
                    <div className="container h100">
                        <div className="row flex-align-c h100">
                            <div className="col-lg-6">
                                <div className="heading mg0 pdr80">
                                    <div className="heading-sub">WHAT WE DO</div>
                                    <h2 className="heading-title size-xl">Our Services</h2>
                                    <div className="button-wrap mt32">
                                        <Link href="/contact-01" className="button fullfield" title="Get in touch">Get in touch</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="lg-mt32 align-center">
                                    <img src="/assets/images/banner-image-05.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section spdt">
                    <div className="container">
                        <div className="heading align-center">
                            <div className="heading-sub color-navy">Services</div>
                            <h2 className="heading-title size-l">Built for all company sizes</h2>
                        </div>
                        <div className="block-icon-box layout-03">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-01.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Qualitative Research</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-02.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Social Marketing</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-03.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Graphic Design</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-04.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Reportyng &amp; Analysis</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-05.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Development</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-06.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">People Science</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section spdtb">
                    <div className="block-banner">
                        <div className="container">
                            <div className="row flex-align-c">
                                <div className="col-lg-6">
                                    <div className="image">
                                        <img src="/assets/images/services-08.jpg" alt="Banner" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content lg-mt32 pdl50">
                                        <div className="heading mb32">
                                            <div className="heading-sub color-navy">Insight</div>
                                            <h2 className="heading-title">Insight that drives change</h2>
                                            <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content</div>
                                        </div>
                                        <div className="block-counter layout-03">
                                            <div className="row">
                                                <div className="col-lg-6 col-6">
                                                    <div className="counter-box">
                                                        <div className="number"><span className="counter"><CounterUp count={98} time={1} /></span><span className="suffix color-navy">%</span></div>
                                                        <div className="title">Private Office</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-6">
                                                    <div className="counter-box">
                                                        <div className="number"><span className="counter"><CounterUp count={20} time={1} /></span><span className="suffix color-navy">+</span></div>
                                                        <div className="title">Coworking Desks</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-6">
                                                    <div className="counter-box">
                                                        <div className="number"><span className="counter"><CounterUp count={100} time={1} /></span><span className="suffix color-navy">+</span></div>
                                                        <div className="title">Meeting Rooms</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-6">
                                                    <div className="counter-box">
                                                        <div className="number"><span className="counter"><CounterUp count={55} time={1} /></span><span className="suffix color-navy">%</span></div>
                                                        <div className="title">Meeting Rooms</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-wrap">
                                            <Link href="/contact-01" className="button fullfield">Get in touch</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-banner background-navy layout-02" style={{ backgroundImage: 'url("/assets/images/banner-image-02.jpg")' }}>
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content devider-right">
                                        <div className="heading heading-alway-white">
                                            <div className="heading-sub">Work with us</div>
                                            <h2 className="heading-title">Now let's grow yours!</h2>
                                        </div>
                                        <div className="button-wrap">
                                            <Link href="/contact-01" className="button borderline-white">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>


        </>
    )
}