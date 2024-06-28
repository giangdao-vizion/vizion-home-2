import Layout from "@/components/layout/Layout";
import PortfolioDetail01Slider from "@/components/slider/PortfolioDetail01Slider";
import Link from "next/link";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function PorfolioDetailOne() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="portfolio-detail-inner">
                        <div className="portfolio-head align-center">
                            <div className="portfolio-category">
                                <Link href="/" title="Resources">Resources</Link>
                                <Link href="/" title="Tutorials">Tutorials</Link>
                            </div>
                            <div className="portfolio-title">
                                <h1>Statistics Mobile App</h1>
                            </div>
                            <div className="portfolio-desc"><p>Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia. Nunc posuere sodales consequat. Sed justo, diam efficitur nec magna sodales ullamrper. Hendrerit libero praesent pharetra sit non.</p></div>
                        </div>
                        <div className="portfolio-meta align-center">
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
                        <article className="portfolio-detail-article spdt">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="mt32" src="/assets/images/portfolio-detail-01.jpg" alt="Portfolio" />
                                </div>
                                <div className="col-md-6">
                                    <img className="mt32" src="/assets/images/portfolio-detail-02.jpg" alt="Portfolio" />
                                </div>
                            </div>
                            <h3 className="align-center">An explosive brand</h3>
                            <p className="mw580 align-center">Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia. Nunc posuere sodales consequat. Sed justo, diam efficitur nec magna sodales ullamrper. Hendrerit libero praesent pharetra sit non.</p>
                            <img className="mt32" src="/assets/images/portfolio-detail-04.jpeg" alt="Portfolio" />
                            <blockquote className="block-quote">
                                <i>Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia.</i>
                            </blockquote>
                            <ul className="mt32 block-grid">
                                <li><img src="/assets/images/portfolio-detail-03.jpeg" alt="Portfolio" /></li>
                                <li><img src="/assets/images/portfolio-detail-05.jpeg" alt="Portfolio" /></li>
                                <li><img src="/assets/images/portfolio-detail-06.jpeg" alt="Portfolio" /></li>
                            </ul>
                        </article>
                    </div>
                </div>
                <div className="portfolio-gallery spdt">
                    <div className="title mw580 align-center">
                        <h3>An explosive brand</h3>
                        <p>Duis sodales dolor nisl purus mollis. Cras dictum vitae est a lacinia. Nunc posuere sodales consequat.</p>
                    </div>
                    <div className="content mt32">
                        <div className="swiper uxp-swiper-slider">
                            <PortfolioDetail01Slider />
                        </div>
                    </div>
                </div>
                <div className="portfolio-video spdt">
                    <div className="container">
                        <div className="inner">
                            <div className="title align-center">
                                <h3>Intro Video</h3>
                            </div>
                            <div className="content mt32">
                                <div className="popup-wrapper">
                                    <img src="/assets/images/portfolio-video.jpeg" alt="Portfolio" />
                                    <a onClick={() => setOpen(true)} className="icon-popup"><i className="las la-play" /></a>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-thanks spdt">
                    <div className="container">
                        <p className="align-center">Thank you for watching!</p>
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
