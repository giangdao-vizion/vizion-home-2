import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home1() {
    return (
        <>
            <Layout
                pageTitle="Sidebar"
                pageTitleDesc="Simply and beautiful way to sell products"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="shop-left">
                                <div className="shop-action top-action flex flex-align-c flex-content-sb">
                                    <div className="results">Showing 1–12 of 24 results</div>
                                    <div className="sort flex flex-align-c flex-content-sb">
                                        <div className="sort-item sort-default">
                                            <select name="tag" id="tag">
                                                <option value="all">Default Sorting</option>
                                                <option value="popularity">Popularity</option>
                                                <option value="average_rating">Average rating</option>
                                                <option value="latest">Latest</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="product-card zoom-image">
                                            <div className="inner">
                                                <div className="product-thumbnail entry-thumbnail">
                                                    <Link href="/" title="Product"><img src="/assets/images/product-01.png" alt="Product" /></Link>
                                                    <span className="badge badge-sale">Sale</span>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-cat">
                                                        <Link href="/" title="Lifestyle">Lifestyle</Link>
                                                        <Link href="/" title="Digitals">Digitals</Link>
                                                    </div>
                                                    <div className="product-title">
                                                        <h4 className="title"><Link href="/" title="Top 6 Membership">Top 6 Membership</Link></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <del>$19.00</del>
                                                        <ins>$33.00</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="product-card zoom-image">
                                            <div className="inner">
                                                <div className="product-thumbnail entry-thumbnail">
                                                    <Link href="/" title="Product"><img src="/assets/images/product-02.png" alt="Product" /></Link>
                                                    <span className="badge badge-new">New</span>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-cat">
                                                        <Link href="/" title="Digitals">Digitals</Link>
                                                    </div>
                                                    <div className="product-title">
                                                        <h4 className="title"><Link href="/" title="Olufsen Wireless Headphones">Olufsen Wireless Headphones</Link></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <ins>$34.00</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="product-card zoom-image">
                                            <div className="inner">
                                                <div className="product-thumbnail entry-thumbnail">
                                                    <Link href="/" title="Product"><img src="/assets/images/product-03.png" alt="Product" /></Link>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-cat">
                                                        <Link href="/" title="Book">Book</Link>
                                                    </div>
                                                    <div className="product-title">
                                                        <h4 className="title"><Link href="/" title="Accident by HeyShop">Accident by HeyShop</Link></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <ins>$22.00</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="product-card zoom-image">
                                            <div className="inner">
                                                <div className="product-thumbnail entry-thumbnail">
                                                    <Link href="/" title="Product"><img src="/assets/images/product-04.png" alt="Product" /></Link>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-cat">
                                                        <Link href="/" title="Lifestyle">Lifestyle</Link>
                                                    </div>
                                                    <div className="product-title">
                                                        <h4 className="title"><Link href="/" title="Kinto Day Off Tumbler">Kinto Day Off Tumbler</Link></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <ins>$45.00</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="product-card zoom-image">
                                            <div className="inner">
                                                <div className="product-thumbnail entry-thumbnail">
                                                    <Link href="/" title="Product"><img src="/assets/images/product-05.png" alt="Product" /></Link>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-cat">
                                                        <Link href="/" title="Digitals">Digitals</Link>
                                                    </div>
                                                    <div className="product-title">
                                                        <h4 className="title"><Link href="/" title="The Monocle Guide">The Monocle Guide</Link></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <ins>$19.00</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="product-card zoom-image">
                                            <div className="inner">
                                                <div className="product-thumbnail entry-thumbnail">
                                                    <Link href="/" title="Product"><img src="/assets/images/product-06.png" alt="Product" /></Link>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-cat">
                                                        <Link href="/" title="Accessories">Accessories</Link>
                                                    </div>
                                                    <div className="product-title">
                                                        <h4 className="title"><Link href="/" title="Dish Cuddler Bed">Dish Cuddler Bed</Link></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <ins>$34.00</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="product-card zoom-image">
                                            <div className="inner">
                                                <div className="product-thumbnail entry-thumbnail">
                                                    <Link href="/" title="Product"><img src="/assets/images/product-07.png" alt="Product" /></Link>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-cat">
                                                        <Link href="/" title="Book">Book</Link>
                                                    </div>
                                                    <div className="product-title">
                                                        <h4 className="title"><Link href="/" title="Ucon Acrobatics Hajo Backpack">Ucon Acrobatics Hajo Backpack</Link></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <ins>$22.00</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="product-card zoom-image">
                                            <div className="inner">
                                                <div className="product-thumbnail entry-thumbnail">
                                                    <Link href="/" title="Product"><img src="/assets/images/product-08.jpeg" alt="Product" /></Link>
                                                    <span className="badge badge-sale">Sale</span>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-cat">
                                                        <Link href="/" title="Lifestyle">Lifestyle</Link>
                                                    </div>
                                                    <div className="product-title">
                                                        <h4 className="title"><Link href="/" title="Guide to Better Living">Guide to Better Living</Link></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <ins>$25.00</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="product-card zoom-image">
                                            <div className="inner">
                                                <div className="product-thumbnail entry-thumbnail">
                                                    <Link href="/" title="Product"><img src="/assets/images/product-09.png" alt="Product" /></Link>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-cat">
                                                        <Link href="/" title="Digitals">Digitals</Link>
                                                    </div>
                                                    <div className="product-title">
                                                        <h4 className="title"><Link href="/" title="Poketo: Creative Spaces">Poketo: Creative Spaces</Link></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <ins>$15.00</ins>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination">
                                <div className="inner">
                                    <span>1</span>
                                    <Link href="/" title={2} className="number">2</Link>
                                    <Link href="/" title="Next" className="next">Next<i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar">
                                <aside className="widget widget-category">
                                    <h3 className="widget-title">Product Categories</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li><Link href="/" title="Lifestyle">Lifestyle <span>(3)</span></Link></li>
                                            <li><Link href="/" title="Digital">Digital <span>(5)</span></Link></li>
                                            <li><Link href="/" title="Book">Book <span>(7)</span></Link></li>
                                            <li><Link href="/" title="Accessories">Accessories <span>(12)</span></Link></li>
                                        </ul>
                                    </div>
                                </aside>
                                <aside className="widget widget-price">
                                    <h3 className="widget-title">Filter by Price</h3>
                                    <div className="widget-content">
                                        <div id="range-price" />
                                        <form action="#">
                                            <input type="hidden" defaultValue={10} name="price_min" />
                                            <input type="hidden" defaultValue={300} name="price_max" />
                                            <div className="field-submit">
                                                <p>Price: <span className="price-min">$<span>10</span></span> — <span className="price-max">$<span>130</span></span></p>
                                                <input type="submit" defaultValue="Apply" />
                                            </div>
                                        </form>
                                    </div>
                                </aside>
                                <aside className="widget widget-tag">
                                    <h3 className="widget-title">Tags</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li><Link href="/" title="ui/ux">ui/ux</Link></li>
                                            <li><Link href="/" title="digital marketing">digital marketing</Link></li>
                                            <li><Link href="/" title="sketch app">sketch app</Link></li>
                                            <li><Link href="/" title="figma">figma</Link></li>
                                            <li><Link href="/" title="web">web</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
