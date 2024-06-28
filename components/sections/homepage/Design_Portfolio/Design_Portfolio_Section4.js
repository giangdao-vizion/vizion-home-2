import Link from "next/link";
export default function Design_Portfolio_Section4() {
    return (
        <>
            <section className="section spdtb">
                <div className="container overflow-hidden">
                    <div className="heading align-center">
                        <div className="heading-sub">SELECTED PROJECTS</div>
                        <h2 className="heading-title size-xl">Case Studies.</h2>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-6">
                            <div className="portfolio-item portfolio-grid mockup wow animate__animated   animate__fadeInUp">
                                <article className="portfolio">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="Sala App">
                                            <img src="/assets/images/portfolio-02.jpg" alt="Sala App" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Mockup">Mockup</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="Sala App">Sala App</Link></h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio-item portfolio-grid mockup wow animate__animated   animate__fadeInUp">
                                <article className="portfolio">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="Food Packaging">
                                            <img src="/assets/images/portfolio-03.jpg" alt="Food Packaging" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Mockup">Mockup</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="Food Packaging">Food Packaging</Link></h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio-item portfolio-grid mockup wow animate__animated   animate__fadeInUp">
                                <article className="portfolio">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="Packs Premade Scenes">
                                            <img src="/assets/images/portfolio-05.jpeg" alt="Packs Premade Scenes" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Mockup">Mockup</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="Packs Premade Scenes">Packs Premade Scenes</Link></h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio-item portfolio-grid branding wow animate__animated   animate__fadeInUp">
                                <article className="portfolio">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="Calendar Design">
                                            <img src="/assets/images/portfolio-04.jpg" alt="Calendar Design" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Branding">Branding</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="Calendar Design">Calendar Design</Link></h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="button-wrap align-center">
                        <Link href="/contact-01" className="button fullfield" title="View More Project">View More Project</Link>
                    </div>
                </div>
            </section>


        </>
    )
}