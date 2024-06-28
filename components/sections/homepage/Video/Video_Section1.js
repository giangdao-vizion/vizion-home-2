import Link from "next/link";
export default function Video_Section1() {
    return (
        <>
            <section className="section opt120 spdb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <h2 className="heading-title size-xl">Meet more efficiently with video conferencing</h2>
                                <div className="heading-desc size-l">Built for today’s modern workplace</div>
                            </div>
                            <div className="button-wrap layout-02 mt32">
                                <Link href="/contact-01" className="button fullfield xs-mb10" title="Get Started">Get Started</Link>
                                <Link href="/contact-01" className="button fullfield-dark" title="Live Demo">Live Demo</Link>
                            </div>
                            <div className="block-social mt60">
                                <p>Work with the tools you love.</p>
                                <ul>
                                    <li><img src="/assets/images/socials-01.webp" alt="Social" /></li>
                                    <li><img src="/assets/images/socials-02.webp" alt="Social" /></li>
                                    <li><img src="/assets/images/socials-03.webp" alt="Social" /></li>
                                    <li><img src="/assets/images/socials-04.webp" alt="Social" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="lg-mt32 wow animate__animated animate__fadeInDown" src="/assets/images/hv-01.png" alt="Banner" />
                        </div>
                    </div>
                </div>
            </section >


        </>
    )
}