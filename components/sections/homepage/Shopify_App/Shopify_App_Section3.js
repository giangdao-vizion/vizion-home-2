import Link from "next/link";
export default function Shopify_App_Section3() {
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr100">
                                <div className="images layout-02 lg-mb60">
                                    <div className="inner">
                                        <img
                                            className="img01"
                                            src="/assets/images/hsa-07.jpg"
                                            alt="Image"
                                        />
                                        <img
                                            className="img13 wow animate__animated   animate__fadeInRight"
                                            src="/assets/images/hsa-08.png"
                                            alt="Image"
                                        />
                                        <img
                                            className="img14 wow animate__animated   animate__fadeInRight"
                                            src="/assets/images/hsa-09.png"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl60 pdr100">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">01. Feature</div>
                                    <h2 className="heading-title size-l">Sell more and more</h2>
                                    <div className="heading-desc">
                                        It is a long established fact that a reader will be distracted
                                        by the readable content.
                                    </div>
                                </div>
                                <div className="block-list layout-01">
                                    <ul>
                                        <li>
                                            <h4>Effective &amp; Stunning Upsell</h4>
                                            <p>
                                                Established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout.
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Multiple Upsell Funnels</h4>
                                            <p>
                                                Established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button-wrap mt32">
                                    <Link
                                        href="/contact-01"
                                        className="button text color-navy"
                                        title="Get App for Free"
                                    >
                                        Get App for Free <i className="las la-long-arrow-alt-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}