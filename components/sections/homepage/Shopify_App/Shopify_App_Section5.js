import Link from "next/link";
export default function Shopify_App_Section6() {
    return (
        <>
            <section className="section-banner layout-01 spdtb">
                <div className="container">
                    <div className="inner br10">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <img src="/assets/images/hsa-13.jpg" alt="Banner" />
                            </div>
                            <div className="col-lg-6">
                                <div className="content">
                                    <div className="heading heading-alway-white mb24">
                                        <h2 className="heading-title size-l">
                                            Don’t just take our word for it!
                                        </h2>
                                        <div className="heading-desc">
                                            Thousands of professionals and business are already enjoying
                                            Apps. Hear what some of they are saying!
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>4 Hours</span>
                                            <p>Average handling time</p>
                                        </li>
                                        <li>
                                            <span>24/7</span>
                                            <p>Customer Support</p>
                                        </li>
                                    </ul>
                                    <div className="button-wrap mt32">
                                        <Link
                                            href="/contact-01"
                                            className="button borderline-white"
                                            title="Get App for Free"
                                        >
                                            Get App for Free <i className="las la-long-arrow-alt-right" />
                                        </Link>
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