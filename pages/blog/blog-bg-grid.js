import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function BlogBgGrid() {
    return (
        <>
            <Layout
                pageTitle="Grid  Layout"
                pageTitleDesc="Share your stories and news with everyone."
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-middle">
                                <div className="blog-action top-action flex flex-align-c flex-content-sb">
                                    <div className="results">Showing 1-9 of 15 results</div>
                                    <div className="sort flex flex-align-c flex-content-sb">
                                        <div className="sort-item sort-category">
                                            <select name="category" id="category">
                                                <option value="all">All Categories</option>
                                                <option value="marketing">Marketing</option>
                                                <option value="creative">Creative</option>
                                                <option value="tutorials">Tutorials</option>
                                                <option value="ui_ux_design">Ui/Ux Design</option>
                                                <option value="resources">Resources</option>
                                                <option value="ebooks">Ebooks</option>
                                            </select>
                                        </div>
                                        <div className="sort-item sort-tag">
                                            <select name="tag" id="tag">
                                                <option value="all">All Tags</option>
                                                <option value="marketing">Design</option>
                                                <option value="creative">Saas</option>
                                                <option value="tutorials">Startup</option>
                                                <option value="ui_ux_design">Ui/Ux</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <article className="post post-grid format-video post-featured style-bg">
                                            <div className="entry-thumbnail">
                                                <Link href="/blog-detail-01" title="Top 6 Membership Sites for Beginners">
                                                    <img src="/assets/images/post-01.jpg" alt="Top 6 Membership Sites for Beginners" />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href="/blog-bg-grid" title="Marketing">Marketing</Link>
                                                    <Link href="/blog-bg-grid" title="Creative">Creative</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href="/blog-detail-01" title="Top 6 Membership Sites for Beginners">Top 6 Membership Sites for Beginners</Link><span>Featured</span></h3>
                                                </div>
                                                <div className="entry-description">
                                                    <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                                </div>
                                                <div className="entry-action">
                                                    <Link href="/blog-detail-01" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <article className="post post-grid format-gallery style-bg">
                                            <div className="entry-thumbnail">
                                                <Link href="/blog-detail-01" title="How to become a web designer in 2022">
                                                    <img src="/assets/images/post-02.jpeg" alt="How to become a web designer in 2022" />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href="/blog-bg-grid" title="Tutorials">Tutorials</Link>
                                                    <Link href="/blog-bg-grid" title="Ui/Ux Design">Ui/Ux Design</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href="/blog-detail-01" title="How to become a web designer in 2022">How to become a web designer in 2022</Link></h3>
                                                </div>
                                                <div className="entry-description">
                                                    <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                                </div>
                                                <div className="entry-action">
                                                    <Link href="/blog-detail-01" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <article className="post post-grid format-video style-bg">
                                            <div className="entry-thumbnail">
                                                <Link href="/blog-detail-01" title="20 best affiliate programs for online creators in 2022">
                                                    <img src="/assets/images/post-03.jpeg" alt="20 best affiliate programs for online creators in 2022" />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href="/blog-bg-grid" title="Resources">Resources</Link>
                                                    <Link href="/blog-bg-grid" title="Tutorials">Tutorials</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href="/blog-detail-01" title="20 best affiliate programs for online creators in 2022">20 best affiliate programs for online creators in 2022</Link></h3>
                                                </div>
                                                <div className="entry-description">
                                                    <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                                </div>
                                                <div className="entry-action">
                                                    <Link href="/blog-detail-01" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <article className="post post-grid format-quote style-bg">
                                            <div className="entry-thumbnail">
                                                <Link href="/blog-detail-01" title="Behind the website of a renowned athlete">
                                                    <img src="/assets/images/post-04.jpeg" alt="Behind the website of a renowned athlete" />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href="/blog-bg-grid" title="Resources">Resources</Link>
                                                    <Link href="/blog-bg-grid" title="Ui/Ux Design">Ui/Ux Design</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href="/blog-detail-01" title="Behind the website of a renowned athlete">Behind the website of a renowned athlete</Link></h3>
                                                </div>
                                                <div className="entry-description">
                                                    <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                                </div>
                                                <div className="entry-action">
                                                    <Link href="/blog-detail-01" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <article className="post post-grid format-link style-bg">
                                            <div className="entry-thumbnail">
                                                <Link href="/blog-detail-01" title="Give users choice: Design ecosystems, not paths">
                                                    <img src="/assets/images/post-05.jpeg" alt="Give users choice: Design ecosystems, not paths" />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href="/blog-bg-grid" title="Ebooks">Ebooks</Link>
                                                    <Link href="/blog-bg-grid" title="Tutorials">Tutorials</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href="/blog-detail-01" title="Give users choice: Design ecosystems, not paths">Give users choice: Design ecosystems, not paths</Link></h3>
                                                </div>
                                                <div className="entry-description">
                                                    <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                                </div>
                                                <div className="entry-action">
                                                    <Link href="/blog-detail-01" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <article className="post post-grid format-audio style-bg">
                                            <div className="entry-thumbnail">
                                                <Link href="/blog-detail-01" title="So you want to build a company merch store">
                                                    <img src="/assets/images/post-06.jpeg" alt="So you want to build a company merch store" />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href="/blog-bg-grid" title="Resources">Resources</Link>
                                                    <Link href="/blog-bg-grid" title="Ui/Ux Design">Ui/Ux Design</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href="/blog-detail-01" title="So you want to build a company merch store">So you want to build a company merch store</Link></h3>
                                                </div>
                                                <div className="entry-description">
                                                    <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                                </div>
                                                <div className="entry-action">
                                                    <Link href="/blog-detail-01" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <article className="post post-grid style-bg">
                                            <div className="entry-thumbnail">
                                                <Link href="/blog-detail-01" title="What does a UX designer do?">
                                                    <img src="/assets/images/post-07.jpeg" alt="What does a UX designer do?" />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href="/blog-bg-grid" title="Tutorials">Tutorials</Link>
                                                    <Link href="/blog-bg-grid" title="Ui/Ux Design">Ui/Ux Design</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href="/blog-detail-01" title="What does a UX designer do?">What does a UX designer do?</Link></h3>
                                                </div>
                                                <div className="entry-description">
                                                    <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                                </div>
                                                <div className="entry-action">
                                                    <Link href="/blog-detail-01" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <article className="post post-grid style-bg">
                                            <div className="entry-thumbnail">
                                                <Link href="/blog-detail-01" title="From design agency to the future of web design">
                                                    <img src="/assets/images/post-08.jpg" alt="From design agency to the future of web design" />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href="/blog-bg-grid" title="Resources">Resources</Link>
                                                    <Link href="/blog-bg-grid" title="Ui/Ux Design">Ui/Ux Design</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href="/blog-detail-01" title="From design agency to the future of web design">From design agency to the future of web design</Link></h3>
                                                </div>
                                                <div className="entry-description">
                                                    <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                                </div>
                                                <div className="entry-action">
                                                    <Link href="/blog-detail-01" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <article className="post post-grid style-bg">
                                            <div className="entry-thumbnail">
                                                <Link href="/blog-detail-01" title="The guide to responsive web design in 2022">
                                                    <img src="/assets/images/post-09.jpeg" alt="The guide to responsive web design in 2022" />
                                                </Link>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-category">
                                                    <Link href="/blog-bg-grid" title="Resources">Resources</Link>
                                                    <Link href="/blog-bg-grid" title="Tutorials">Tutorials</Link>
                                                </div>
                                                <div className="entry-title">
                                                    <h3><Link href="/blog-detail-01" title="The guide to responsive web design in 2022">The guide to responsive web design in 2022</Link></h3>
                                                </div>
                                                <div className="entry-description">
                                                    <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                                </div>
                                                <div className="entry-action">
                                                    <Link href="/blog-detail-01" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination align-center">
                                <div className="inner">
                                    <Link href="/" title="Prev" className="prev"><i className="las la-long-arrow-alt-left" />Prev</Link>
                                    <span>1</span>
                                    <Link href="/" title={2} className="number">2</Link>
                                    <Link href="/" title="Next" className="next">Next<i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
