import Link from "next/link";
export default function Shopify_App_Section4() {
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr60 pdl100">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">02. feature</div>
                                    <h2 className="heading-title size-l">Extend your reach</h2>
                                    <div className="heading-desc">
                                        Vestibulum vitae augue sit amet ex sodales finibus a at odio.
                                        Aenean vulputate ligula a lectus tempus.
                                    </div>
                                </div>
                                <div className="block-list layout-01 block-list-flex">
                                    <ul>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Promote your products for free</span>
                                        </li>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Increase revenue with a faster checkout</span>
                                        </li>
                                        <li>
                                            <i className="las la-check" />
                                            <span>+80% of eCommerce store traffic is on mobile</span>
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
                        <div className="col-lg-6 lg-order-1">
                            <div className="pdl100">
                                <div className="images layout-02 lg-mb60">
                                    <div className="inner">
                                        <img
                                            className="img01"
                                            src="/assets/images/hsa-10.jpg"
                                            alt="Image"
                                        />
                                        <img
                                            className="img15 wow animate__animated   animate__fadeInLeft"
                                            src="/assets/images/hsa-11.png"
                                            alt="Image"
                                        />
                                        <img
                                            className="img16 wow animate__animated   animate__fadeInLeft"
                                            src="/assets/images/hsa-12.png"
                                            alt="Image"
                                        />
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