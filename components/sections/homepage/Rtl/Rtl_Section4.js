import Link from "next/link";
export default function Rtl_Section4() {
    return (
        <>

            <section className="section spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr100 pdl80 lg-mt32">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">FEATURES two</div>
                                    <h2 className="heading-title">Manage tasks faster than ever</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
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
                                    <img className="img17 wow animate__animated animate__fadeInRight" src="/assets/images/saas-07.png" alt="Banner" />
                                    <img className="img18 wow animate__animated animate__fadeInLeft" src="/assets/images/saas-08.png" alt="Banner" />
                                    <img className="img19 wow animate__animated animate__fadeInLeft" src="/assets/images/saas-09.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}