import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ContactTwo() {
    return (
        <>
            <Layout siteContentClass="pt0">
                <section className="section opt120">
                    <div className="container h100">
                        <div className="row flex-align-c h100">
                            <div className="col-lg-6">
                                <div className="heading mg0 pdr80">
                                    <div className="heading-sub">Contact us</div>
                                    <h2 className="heading-title size-xl">Get in touch today!</h2>
                                    <div className="heading-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit eque ipsum odio justo amet urna.</div>
                                    <ul className="list">
                                        <li>T. (411) 830 - 3404</li>
                                        <li>E. hello@uxper.co</li>
                                    </ul>
                                    <div className="socials">
                                        <Link href="/" title="facebook"><i className="lab la-facebook-f" /></Link>
                                        <Link href="/" title="twitter"><i className="lab la-twitter" /></Link>
                                        <Link href="/" title="instagram"><i className="lab la-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="lg-mt32 align-center">
                                    <img src="/assets/images/contact-01.svg" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section spdt">
                    <div className="container">
                        <div className="heading align-center">
                            <div className="heading-sub">VISIT OUR OFFICE</div>
                            <h2 className="heading-title size-l">We help small businesses with big <br /> hearts make meaningful hires</h2>
                        </div>
                        <div className="block-icon-box layout-04">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="content">
                                                <h3 className="title">Paris</h3>
                                                <div className="desc">19 Maypole Crescent Ilford, L6 2UJ</div>
                                                <span className="tel">(415) 870 - 3204</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="content">
                                                <h3 className="title">New York</h3>
                                                <div className="desc">2866  Oakway Lane, New York, USA</div>
                                                <span className="tel">(415) 870 - 3204</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="content">
                                                <h3 className="title">Hanoi</h3>
                                                <div className="desc">106  Hoang Quoc Viet - Cau Giay - Hanoi</div>
                                                <span className="tel">(415) 870 - 3204</span>
                                            </div>
                                        </div>
                                    </div>
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
                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Send a message">Send a message</Link></div>
                        </div>
                    </div>
                </section>
            </Layout>


        </>
    )
}
