import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function AboutMe() {
    return (
        <>
            <Layout siteContentClass="about-me">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content-left spdtb">
                                <div className="heading">
                                    <div className="heading-sub">About me</div>
                                    <h2 className="heading-title size-xl">I'm Kristina, a designer based in London, UK</h2>
                                    <div className="heading-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit donec morbi lectus nisi egestas.</div>
                                </div>
                            </div>
                            <section className="section">
                                <div className="heading">
                                    <div className="heading-sub">Skills</div>
                                    <h2 className="heading-title size-l">What I do</h2>
                                    <div className="heading-desc">Nullam consequat leo at justo consectetur, vel vehicula odio consequat liquam accumsan.</div>
                                </div>
                                <div className="block-icon-box layout-02">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="icon-box align-center p30">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/layers.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">Design systems</h3>
                                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="icon-box align-center p30">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/rgb.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">Prototyping</h3>
                                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="icon-box align-center p30">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/flip.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">Ui/Ux design</h3>
                                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="icon-box align-center p30">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/shape-builder.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">Product strategy</h3>
                                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section-posttype spdt">
                                <div className="container">
                                    <div className="heading">
                                        <div className="heading-sub">Experience</div>
                                        <h2 className="heading-title size-l">Work experience</h2>
                                        <div className="heading-desc">Nullam consequat leo at justo consectetur, vel vehicula odio consequat liquam accumsan.</div>
                                    </div>
                                    <div className="posttype layout-02">
                                        <div className="box">
                                            <div className="content">
                                                <div className="sub">Freelance</div>
                                                <h3 className="title">Senior Product Designer</h3>
                                                <div className="desc">September 2021 onwards</div>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="content">
                                                <div className="sub">Uxper Company</div>
                                                <h3 className="title">Lead Product Designer</h3>
                                                <div className="desc">October 2020 – July 2021</div>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="content">
                                                <div className="sub">Envato Group</div>
                                                <h3 className="title">Junior Digital Designer</h3>
                                                <div className="desc">April 2019 – August 2020</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section spdt align-center">
                                <div className="block-trial layout-01">
                                    <div className="container">
                                        <img className="image-top" src="/assets/images/macaroni-vertical.webp" alt="Trial" />
                                        <div className="sub">I can’t wait to meet you!</div>
                                        <h2 className="title">Let's Talk</h2>
                                        <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Hire me">Hire me</Link></div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-right">
                                <div className="image-sticky"><img src="/assets/images/about-me.jpg" alt="About Me" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}