import Link from "next/link";
export default function Ecommerce_Platform_Section4() {
    return (
        <>

            <section className="section background-contain-center-left spdtb" style={{ backgroundImage: 'url(/assets/images/hep-16.svg)' }}>
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="images layout-02">
                                <div className="inner">
                                    <img src="/assets/images/hep-13.png" alt="Image" className="img01 box-shadow br35 wow animate__animated   animate__fadeInLeft" />
                                    <img src="/assets/images/hep-14.png" alt="Image" className="img26 wow animate__animated   animate__fadeInRight" />
                                    <img src="/assets/images/hep-15.webp" alt="Image" className="img27 wow animate__animated   animate__fadeInRight" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="lg-mt32">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">Marketing optimized</div>
                                    <h2 className="heading-title">Increase your average cart revenue</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="block-icon-box layout-01 mb40">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/hft-07.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content pdr50">
                                                        <h3 className="title">Shipping methods</h3>
                                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/hft-08.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content pdr50">
                                                        <h3 className="title">Fully integrated</h3>
                                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/hft-09.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content pdr50">
                                                        <h3 className="title">Secure payments</h3>
                                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/hft-10.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content pdr50">
                                                        <h3 className="title">Data analytics</h3>
                                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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