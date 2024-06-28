import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import EcommerceTestimonialSlider from "@/components/slider/EcommerceTestimonialSlider";
import Link from "next/link";

export default function AboutStudio() {
    return (
        <>
            <Layout siteContentClass="pb0">
                <div className="block-gallery">
                    <div className="gallery-grid grid column-4">
                        <div className="grid-item"><img src="/assets/images/gallery-01.jpeg" alt="Gallery" /></div>
                        <div className="grid-item"><img src="/assets/images/gallery-02.jpeg" alt="Gallery" /></div>
                        <div className="grid-item"><img src="/assets/images/gallery-03.jpeg" alt="Gallery" /></div>
                        <div className="grid-item"><img src="/assets/images/gallery-04.jpeg" alt="Gallery" /></div>
                        <div className="grid-item"><img src="/assets/images/gallery-05.jpeg" alt="Gallery" /></div>
                    </div>
                </div>
                <section className="section spdt">
                    <div className="container">
                        <div className="heading align-center">
                            <div className="heading-sub">WHY CHOOSE US</div>
                            <h2 className="heading-title">We've helped businesses increase their revenue on average by <span>90%</span> in their first year with us!</h2>
                        </div>
                        <div className="block-counter flex flex-align-c flex-content-c">
                            <div className="counter-box">
                                <div className="number"><span className="counter"><CounterUp count={50} time={1} /></span><span className="suffix">+</span></div>
                                <div className="title">employees</div>
                            </div>
                            <div className="counter-box">
                                <div className="number"><span className="counter"><CounterUp count={60} time={1} /></span><span className="suffix">+</span></div>
                                <div className="title">projects</div>
                            </div>
                            <div className="counter-box">
                                <div className="number"><span className="counter"><CounterUp count={10} time={1} /></span><span className="suffix">+</span></div>
                                <div className="title">awwarts</div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-banner layout-01 spdt">
                    <div className="container">
                        <div className="inner">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="content">
                                        <blockquote>
                                            <img src="/assets/images/quote.png" alt="Quote" />
                                            <p>We believe that perfection is overrated and often disappoints when the business goals are what counts.</p>
                                            <span>Nout Golstein<cite>CEO, Futured &amp; Artdirector</cite></span>
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="/assets/images/banner-image-01.jpg" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-team spdtb">
                    <div className="container">
                        <div className="heading align-center">
                            <div className="heading-sub">Meet our team</div>
                            <h2 className="heading-title">We are a small, hand-selected set of <br /> designers, strategists</h2>
                        </div>
                        <div className="block-team layout-01">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <img src="/assets/images/mem-1.png" alt="Member" />
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Stéphane Gibert</h4>
                                                <div className="position">Co-Founder</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <img src="/assets/images/mem-2.png" alt="Member" />
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Miriam Jesus</h4>
                                                <div className="position">UX, UI Designer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <img src="/assets/images/mem-3.png" alt="Member" />
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">John Doe</h4>
                                                <div className="position">Head of Makerting</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-wrap align-center">
                                <Link href="/contact-01" className="button fullfield">View Full Team</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section background-grey spdtb">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title">People Who Already Love Us</h2>
                            <div className="heading-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                        </div>
                        <div className="block-testimonial layout-01">
                            <div className="swiper uxp-swiper-slider testimonial-slider">
                                <EcommerceTestimonialSlider />
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
                                            <div className="heading-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                        </div>
                                        <div className="button-wrap">
                                            <Link href="/contact-01" className="button fullfield-white">Contact Us<i className="las la-long-arrow-alt-right" /></Link>
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