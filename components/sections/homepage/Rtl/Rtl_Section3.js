import Link from "next/link";
export default function Rtl_Section3() {

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Simple, Yet Powerful Features</h2>
                        <div className="heading-desc">Create better products by collecting feedback. It's that simple.</div>
                    </div>
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="images layout-03">
                                <div className="inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={570} height={570} viewBox="0 0 570 570">
                                        <g fill="none" fillRule="evenodd">
                                            <g fill="var(--sala-shade-background, $shade_background)">
                                                <g>
                                                    <g>
                                                        <g transform="translate(-134.000000, -2219.000000) translate(-1.000000, 1277.000000) translate(135.000000, 776.000000) translate(0.000000, 166.000000)">
                                                            <rect width={570} height={570} rx={285} />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <img className="img15 wow animate__animated animate__fadeInLeft" src="/assets/images/saas-05.png" alt="Banner" />
                                    <img className="img16 wow animate__animated animate__fadeInRight" src="/assets/images/saas-06.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl100 pdr80 lg-mt32">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">FEATURES one</div>
                                    <h2 className="heading-title">Features that help you build better.</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}