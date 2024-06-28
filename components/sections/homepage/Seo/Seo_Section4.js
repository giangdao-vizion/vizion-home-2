import Link from "next/link";
export default function Seo_Section4() {
    return (
        <>
            <section className="section background-grey has-shape opt160 spdb">
                <div className="shape-top r180 h100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path fill="var(--sala-neutral-white, $neutral_white)" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                          c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                          c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z" />
                    </svg>
                </div>
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub color-navy">HOW WE'RE DIFFERENT</div>
                        <h2 className="heading-title size-l">Learn why us is the right choice <br /> for you</h2>
                    </div>
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <img className="wow animate__animated animate__fadeInUp" src="/assets/images/hs-06.png" alt="Image" />
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl60 pdr60 lg-mt32">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">OUR PROMISE</div>
                                    <h2 className="heading-title">Organic Search Engine Optimisation</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr60 pdl60 lg-mt32">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">GROWTH METHODS</div>
                                    <h2 className="heading-title">Backlink checking &amp; monitoring</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
                            <img className="wow animate__animated animate__fadeInUp" src="/assets/images/hs-07.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}