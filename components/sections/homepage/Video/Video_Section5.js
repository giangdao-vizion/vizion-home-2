import Link from "next/link";
export default function Video_Section5() {
    return (
        <>

            <section className="section spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr100">
                                <div className="images layout-02 lg-mb60">
                                    <div className="inner">
                                        <img className="img01" src="/assets/images/hv-10.png" alt="Image" />
                                        <img className="img23 wow animate__animated animate__fadeInRight" src="/assets/images/hv-11.png" alt="Image" />
                                        <img className="img24 wow animate__animated animate__fadeInRight" src="/assets/images/hv-12.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl60 pdr100">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">Calling</div>
                                    <h2 className="heading-title">Call from any device.</h2>
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
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button text color-navy" title="Know More">Know More <i className="las la-long-arrow-alt-right" /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}