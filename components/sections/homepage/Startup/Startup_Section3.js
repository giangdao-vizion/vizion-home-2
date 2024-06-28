import Link from "next/link";
export default function Startup_Section3() {

    return (
        <>

            <section className="section spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr80 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">Who We Are</div>
                                    <h2 className="heading-title size-l">We specialize in UI/UX, web development, digital marketing.</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="block-list layout-01 block-list-flex">
                                    <ul>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Vivamus ac elementum urna.</span>
                                        </li>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Feugiat metus suscipiti.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button fullfield" title="Get in touch">Get in touch</Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
                            <div className="pdl80">
                                <div className="images layout-02">
                                    <div className="inner">
                                        <img className="wow animate__animated animate__fadeInLeft" src="/assets/images/hst-03.svg" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}