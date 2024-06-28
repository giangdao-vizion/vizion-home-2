import Link from "next/link";
export default function Crypto_Section5() {
    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr50">
                                <div className="images layout-10">
                                    <div className="inner">
                                        <img className="img01 wow animate__animated   animate__fadeInLeft" src="/assets/images/hc-10.png" alt="Image" />
                                        <img className="img13" src="/assets/images/hc-01.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl50 pdr80 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub">Feature</div>
                                    <h2 className="heading-title size-l">Hot wallet</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button text color-navy" title="Know More">Know More <i className="las la-long-arrow-alt-right" /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}