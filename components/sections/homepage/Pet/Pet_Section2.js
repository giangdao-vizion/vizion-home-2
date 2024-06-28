import Link from "next/link";
export default function Pet_Section2() {

    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Simple, yet powerful features</h2>
                        <div className="heading-desc">Create better products by collecting feedback. It's that simple.</div>
                    </div>
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr80">
                                <div className="images layout-3">
                                    <div className="inner">
                                        <img className="wow animate__animated animate__fadeInRight" src="/assets/images/hp-02.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl80 pdr60 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">FEATURE one</div>
                                    <h2 className="heading-title">Features that help you build better.</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right" /></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-align-c spdt">
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr80 pdl60 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">FEATURE two</div>
                                    <h2 className="heading-title">Manage tasks faster than ever</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right" /></Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
                            <div className="pdl80">
                                <div className="images layout-3">
                                    <div className="inner">
                                        <img className="wow animate__animated animate__fadeInLeft" src="/assets/images/hp-03.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-align-c spdt">
                        <div className="col-lg-6">
                            <div className="pdr80">
                                <div className="images layout-3">
                                    <div className="inner">
                                        <img className="wow animate__animated animate__fadeInRight" src="/assets/images/hp-04.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl80 pdr60 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">FEATURE three</div>
                                    <h2 className="heading-title">Features that help you build better.</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right" /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}