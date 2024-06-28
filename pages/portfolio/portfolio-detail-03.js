import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from 'react';
export default function PorfolioDetailThree() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout siteContentClass="post-type-portfolio layout-03">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="portfolio-detail-inner">
                                <div className="portfolio-head">
                                    <div className="portfolio-category">
                                        <Link href="/" title="Resources">Resources</Link>
                                        <Link href="/" title="Tutorials">Tutorials</Link>
                                    </div>
                                    <div className="portfolio-title">
                                        <h1>Statistics Mobile App</h1>
                                    </div>
                                    <div className="flex">
                                        <div className="portfolio-meta">
                                            <ul>
                                                <li>
                                                    <span>Client</span>
                                                    <p>Envato</p>
                                                </li>
                                                <li>
                                                    <span>Date</span>
                                                    <p>Apr 15, 2021</p>
                                                </li>
                                                <li>
                                                    <span>Category</span>
                                                    <p>Ui/Ux Design</p>
                                                </li>
                                                <li>
                                                    <span>Link</span>
                                                    <p>Website<Link href="/" title="Website"><i className="las la-external-link-alt" /></Link></p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-info">
                                            <div className="portfolio-desc">
                                                <p>Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia. Nunc posuere sodales consequat. Sed justo, diam efficitur nec magna sodales ullamrper. Hendrerit libero praesent pharetra sit non.</p>
                                                <p>Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia. Nunc posuere sodales consequat. Sed justo, diam efficitur nec magna sodales ullamrper. Hendrerit libero praesent pharetra sit non.</p>
                                            </div>
                                            <div className="portfolio-author flex flex-align-c">
                                                <div className="avatar"><img src="/assets/images/post-author.webp" alt="Willie Farmer" /></div>
                                                <div className="info">
                                                    <span className="name">Post by<Link href="/" title="Willie Farmer">Willie Farmer</Link></span>
                                                    <span className="date">Published: Sep 2, 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio-gallery">
                                <img src="/assets/images/portfolio-gallery-01.jpeg" alt="Portfolio" />
                                <img src="/assets/images/portfolio-gallery-02.jpeg" alt="Portfolio" />
                                <img src="/assets/images/portfolio-gallery-03.jpeg" alt="Portfolio" />
                                <img src="/assets/images/portfolio-gallery-04.jpeg" alt="Portfolio" />
                            </div>
                            <div className="portfolio-thanks spdt">
                                <div className="container">
                                    <p className="align-center">Thank you for watching!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-paginate spdt">
                    <div className="item prev" style={{ backgroundImage: 'url(/assets/images/portfolio-prev.jpeg)' }}>
                        <div className="inner align-center">
                            <span>Back Project</span>
                            <h3 className="title"><Link href="/" title="Credentially">Credentially</Link></h3>
                        </div>
                    </div>
                    <div className="item next" style={{ backgroundImage: 'url(/assets/images/portfolio-next.jpg)' }}>
                        <div className="inner align-center">
                            <span>Next Project</span>
                            <h3 className="title"><Link href="/" title="An explosive brand">An explosive brand</Link></h3>
                        </div>
                    </div>
                </div>
                <div className="portfolio-related spdtb">
                    <div className="container">
                        <div className="inner">
                            <div className="title">
                                <h3>Related Project</h3>
                            </div>
                            <div className="content">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="portfolio-item">
                                            <article className="portfolio">
                                                <div className="entry-thumbnail">
                                                    <Link href="/" title="Dufa’s Burger">
                                                        <img src="/assets/images/portfolio-01.jpg" alt="Dufa’s Burger" />
                                                    </Link>
                                                </div>
                                                <div className="entry-content">
                                                    <div className="entry-category">
                                                        <Link href="/" title="Branding">Branding</Link>
                                                    </div>
                                                    <div className="entry-title">
                                                        <h3><Link href="/" title="Dufa’s Burger">Dufa’s Burger</Link></h3>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="portfolio-item">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>


        </>
    )
}