import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ContactThree() {
    return (
        <>
            <Layout siteContentClass="pt0">
                <section className="section opt120">
                    <div className="container h100">
                        <div className="heading align-center">
                            <div className="heading-sub">Contact us</div>
                            <h2 className="heading-title size-xl">Get in touch today!</h2>
                            <div className="heading-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> eque ipsum odio justo amet urna.</div>
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
                </section>
                <section className="section">
                    <div className="container">
                        <div className="block-map align-center">
                            <iframe className="mb60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669535!2d-0.2664033999507271!3d51.52873980503857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTHXDom4gxJDDtG4sIFbGsMahbmcgUXXhu5FjIEFuaA!5e0!3m2!1svi!2s!4v1672298826574!5m2!1svi!2s" width={770} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            <div className="heading align-center">
                                <h2 className="heading-title size-m">Address</h2>
                                <div className="heading-desc">2866  Oakway Lane, New York, USA</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section align-center">
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
