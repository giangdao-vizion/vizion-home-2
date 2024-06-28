import Link from "next/link";
export default function Crypto_Section4() {
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr50 pdl80 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub">Feature</div>
                                    <h2 className="heading-title size-l">White label</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="block-list layout-01 block-list-flex">
                                    <ul>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Curabitur placerat sapien.</span>
                                        </li>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Vivamus ac elementum urna.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button text color-navy" title="Know More">Know More <i className="las la-long-arrow-alt-right" /></Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
                            <div className="pdl50">
                                <div className="images layout-10">
                                    <div className="inner">
                                        <img className="img01 wow animate__animated   animate__fadeInRight" src="/assets/images/hc-09.png" alt="Image" />
                                        <img className="img13" src="/assets/images/hc-01.png" alt="Image" />
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