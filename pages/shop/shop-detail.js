import QuantityInput from "@/components/elements/QuantityInput";
import Layout from "@/components/layout/Layout";
import ShopThumbSlider from "@/components/slider/ShopThumbSlider";
import Link from "next/link";
export default function Home1() {
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="breadcrumbs">
                        <div className="inner">
                            <ul className="breadcrumb">
                                <li><Link href="/" title="Home">Home</Link></li>
                                <li><Link href="/" title="Shop">Shop</Link></li>
                                <li>Ucon Acrobatics Hajo</li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-detail">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-gallery thumbs-gallery">
                                    <ShopThumbSlider />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-summary">
                                    <h1>Ucon Acrobatics Hajo</h1>
                                    <div className="badge-review">
                                        <div className="star"><span style={{ width: '80%' }} /></div>
                                        <div className="total-review">4 Reviews</div>
                                    </div>
                                    <div className="product-price">
                                        <del>$89</del>
                                        <ins>$40</ins>
                                    </div>
                                    <div className="product-description">
                                        <p>The current product may have a manufacturer’s warranty. Visit the website or contact us for full warranty details.</p>
                                    </div>
                                    <div className="product-atc">
                                        <form action="#">
                                            <QuantityInput />
                                            <div className="field-submit">
                                                <input type="submit" name="submit" defaultValue="Add To Cart" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="product-meta">
                                        <ul>
                                            <li className="sku"><span>SKU:</span>29045-SB-8</li>
                                            <li className="categories">
                                                <span>Categories:</span>
                                                <Link href="/" title="Lifestyle">Lifestyle</Link>
                                            </li>
                                            <li className="tags">
                                                <span>Tags:</span>
                                                <Link href="/" title="Bag">Bag</Link>
                                                <Link href="/" title="Travel">Travel</Link>
                                                <Link href="/" title="Hitech">Hitech</Link>
                                            </li>
                                            <li className="share">
                                                <span>Share</span>
                                                <Link href="/" title="Facebook"><i className="lab la-facebook-f" /></Link>
                                                <Link href="/" title="Twitter"><i className="lab la-twitter" /></Link>
                                                <Link href="/" title="Instagram"><i className="lab la-instagram" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-tab tab-wrap">
                                        <div className="tab-navs">
                                            <ul>
                                                <li><Link href="/product-description" className="tab-nav is-active">Description</Link></li>
                                                <li><Link href="/additional-information" className="tab-nav">Additional information</Link></li>
                                                <li><Link href="/reviews" className="tab-nav">Reviews <span>(4)</span></Link></li>
                                            </ul>
                                        </div>
                                        <div id="product-description" className="tab-content is-active">
                                            <p>Vix cu primis antiopam. Per unum vocent habemus in. Id delenit consulatu est, ex epicuri salutatus aliquando vix, ad tacimates persequeris mei. Per suas labitur consetetur id. Viris copiosae eleifend mel no, vis cibo summo ea. No mea graeco quaerendum disputationi. Vis an vocent delicatissimi, vis meliore facilis praesent. Eu eum debet interpretaris, eos nominati petentium solet adversarium. Molestie contentiones no usu, atqui possim ipsum.</p>
                                        </div>
                                        <div id="additional-information" className="tab-content">
                                            <ul>
                                                <li><span>Color:</span> Blue</li>
                                                <li><span>Size:</span> 20cm x 10cm</li>
                                                <li><span>Material:</span> Aluminum</li>
                                                <li><span>Warranty:</span> Within 6 months</li>
                                            </ul>
                                        </div>
                                        <div id="reviews" className="tab-content tab-review">
                                            <h4 className="title">4 reviews for Ucon Acrobatics Hajo</h4>
                                            <ul className="list-reviews">
                                                <li>
                                                    <div className="review">
                                                        <div className="avatar">
                                                            <img src="/assets/images/post-author.webp" alt="Avatar" />
                                                        </div>
                                                        <div className="info">
                                                            <div className="top">
                                                                <span className="name">Kevin</span>
                                                                <div className="date">Dec 23, 2022</div>
                                                                <div className="badge-review">
                                                                    <div className="star"><span style={{ width: '100%' }} /></div>
                                                                </div>
                                                            </div>
                                                            <div className="bottom">
                                                                <p>Good</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="children">
                                                        <li>
                                                            <div className="review">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/post-author-01.jpg" alt="Avatar" />
                                                                </div>
                                                                <div className="info">
                                                                    <div className="top">
                                                                        <span className="name">David</span>
                                                                        <div className="date">Dec 24, 2022</div>
                                                                        <div className="badge-review">
                                                                            <div className="star"><span style={{ width: '60%' }} /></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <p>Very Good</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="children">
                                                                <li>
                                                                    <div className="review">
                                                                        <div className="avatar">
                                                                            <img src="/assets/images/post-author-02.jpg" alt="Avatar" />
                                                                        </div>
                                                                        <div className="info">
                                                                            <div className="top">
                                                                                <span className="name">Tommy</span>
                                                                                <div className="date">Dec 25, 2022</div>
                                                                                <div className="badge-review">
                                                                                    <div className="star"><span style={{ width: '80%' }} /></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="bottom">
                                                                                <p>Thanks</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="review">
                                                        <div className="avatar">
                                                            <img src="/assets/images/post-author-03.jpg" alt="Avatar" />
                                                        </div>
                                                        <div className="info">
                                                            <div className="top">
                                                                <span className="name">Jenne</span>
                                                                <div className="date">Dec 26, 2022</div>
                                                                <div className="badge-review">
                                                                    <div className="star"><span style={{ width: '100%' }} /></div>
                                                                </div>
                                                            </div>
                                                            <div className="bottom">
                                                                <p>Thanks</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="review-form">
                                                <h4 className="title">Add your review</h4>
                                                <p>Your email address won't be published. Required fields are marked *</p>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="field-input">
                                                                <label htmlFor="name">Name *</label>
                                                                <input type="text" name="Name" id="name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="field-input">
                                                                <label htmlFor="email">Email *</label>
                                                                <input type="text" name="Email" id="email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="field-input field-rating">
                                                                <span>Your rating</span>
                                                                <p className="stars">
                                                                    <Link className="star-1" href="/" />
                                                                    <Link className="star-2" href="/" />
                                                                    <Link className="star-3" href="/" />
                                                                    <Link className="star-4" href="/" />
                                                                    <Link className="star-5" href="/" />
                                                                </p>
                                                                <input type="hidden" defaultValue={0} name="rating" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="field-textarea">
                                                                <label htmlFor="content">Your review *</label>
                                                                <textarea name="content" cols={30} rows={10} defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="field-submit">
                                                                <input type="submit" name="submit" defaultValue="Submit" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-related">
                        <div className="product-related-inner">
                            <h3 className="title">Related Products</h3>
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-6">
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
                                <div className="col-lg-3 col-sm-6 col-6">
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
                                <div className="col-lg-3 col-sm-6 col-6">
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
                                <div className="col-lg-3 col-sm-6 col-6">
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
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
