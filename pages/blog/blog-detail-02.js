import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function BlogDetailTwo() {
    return (
        <>
            <Layout>
                <div className="post-head" style={{ backgroundImage: 'url("/assets/images/post-01.jpg")' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-12 col-auto">
                                <div className="post-category">
                                    <Link href="/" title="Resources">Resources</Link>
                                    <Link href="/" title="Tutorials">Tutorials</Link>
                                </div>
                                <div className="post-title">
                                    <h1>How much does it cost to start and run a website?</h1>
                                </div>
                                <div className="post-author flex flex-align-c">
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 col-auto">
                            <div className="blog-single">
                                <article className="post">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <blockquote className="block-quote">
                                        <p>“Sometimes words are just music themselves. Like ‘Chicago’ is a very musical sounding name.”</p>
                                        <span>- Kevin Kay</span>
                                    </blockquote>
                                    <figure className="block-gallery">
                                        <figure>
                                            <img src="/assets/images/post-detail-01.jpeg" alt="How much does it cost to start and run a website?" />
                                        </figure>
                                        <figure>
                                            <img src="/assets/images/post-detail-02.jpeg" alt="How much does it cost to start and run a website?" />
                                        </figure>
                                    </figure>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <h3>Why do we use it?</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                    <ul>
                                        <li>Unique Design</li>
                                        <li>User experience</li>
                                        <li>SaaS WordPress theme</li>
                                        <li>Responsive Mobile</li>
                                    </ul>
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.text.</p>
                                    <div className="post-tags">
                                        <span>Tag</span>
                                        <Link href="/" title="Design">Design</Link>
                                        <Link href="/" title="Startup">Startup</Link>
                                        <Link href="/" title="Ui/Ux">Ui/Ux</Link>
                                    </div>
                                    <div className="post-author-bio flex flex-align-c">
                                        <div className="avatar"><img src="/assets/images/post-author.webp" alt="Willie Farmer" /></div>
                                        <div className="info">
                                            <span className="top">
                                                <Link href="/" className="name" title="Willie Farmer">Willie Farmer</Link>
                                                <Link href="/" title="Facebook"><i className="lab la-facebook-f" /></Link>
                                                <Link href="/" title="twitter"><i className="lab la-twitter" /></Link>
                                                <Link href="/" title="instagram"><i className="lab la-instagram" /></Link>
                                            </span>
                                            <p>Lorem Ipsum proin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit.</p>
                                        </div>
                                    </div>
                                    <div className="comments">
                                        <div className="comment-head">Comments (5)</div>
                                        <ul className="comment-list">
                                            <li className="item">
                                                <div className="head">
                                                    <div className="avatar"><img src="/assets/images/post-author-01.jpg" alt="Willie Farmer" /></div>
                                                    <div className="info">
                                                        <span className="name">Andra Mikuto</span>
                                                        <span className="date">October 15, 2018</span>
                                                    </div>
                                                    <div className="action"><Link href="/" title="Reply">Reply</Link></div>
                                                </div>
                                                <div className="content"><p>You also want to figure out what lengths you want to rent your property for. A Florida property in July near the beach will go for top dollar for a week. However, that same property in January you might only attract the snowbirds who want to rent at a lower price and rent it out on a monthly basis.</p></div>
                                                <ul className="children">
                                                    <li className="item">
                                                        <div className="head">
                                                            <div className="avatar"><img src="/assets/images/post-author-02.jpg" alt="Nikolas Brooten" /></div>
                                                            <div className="info">
                                                                <span className="name">Nikolas Brooten</span>
                                                                <span className="date">October 1, 2019</span>
                                                            </div>
                                                            <div className="action"><Link href="/" title="Reply">Reply</Link></div>
                                                        </div>
                                                        <div className="content"><p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis integer posuere erat ante.</p></div>
                                                        <ul className="children">
                                                            <li className="item">
                                                                <div className="head">
                                                                    <div className="avatar"><img src="/assets/images/post-author-03.jpg" alt="Pearce Frye" /></div>
                                                                    <div className="info">
                                                                        <span className="name">Pearce Frye</span>
                                                                        <span className="date">October 15, 2021</span>
                                                                    </div>
                                                                    <div className="action"><Link href="/" title="Reply">Reply</Link></div>
                                                                </div>
                                                                <div className="content"><p>Quisque tristique tincidunt metus non aliquam. Quisque ac risus sit amet quam sollicitudin vestibulum vitae malesuada libero. Mauris magna elit, suscipit non ornare et, blandit a tellus. Pellentesque dignissim ornare faucibus mollis.</p></div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="item">
                                                        <div className="head">
                                                            <div className="avatar"><img src="/assets/images/post-author-05.jpg" alt="Nikolas Brooten" /></div>
                                                            <div className="info">
                                                                <span className="name">Nikolas Brooten</span>
                                                                <span className="date">October 15, 2022</span>
                                                            </div>
                                                            <div className="action"><Link href="/" title="Reply">Reply</Link></div>
                                                        </div>
                                                        <div className="content"><p>Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis.</p></div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="item">
                                                <div className="head">
                                                    <div className="avatar"><img src="/assets/images/post-author-04.jpg" alt="Kevin Kay" /></div>
                                                    <div className="info">
                                                        <span className="name">Kevin Kay</span>
                                                        <span className="date">October 15, 2019</span>
                                                    </div>
                                                    <div className="action"><Link href="/" title="Reply">Reply</Link></div>
                                                </div>
                                                <div className="content"><p>Nullam id dolor id nibh ultricies vehicula ut id. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia aenean bibendum nulla consectetur.</p></div>
                                            </li>
                                        </ul>
                                        <div className="comment-respond">
                                            <div className="head">
                                                <h3>Leave a reply</h3>
                                                <p>Your email address will not be published. Required fields are marked *</p>
                                            </div>
                                            <form action="#" className="commentform">
                                                <div className="field-group">
                                                    <div className="field-input">
                                                        <input type="text" name="name" placeholder="Your Name *" />
                                                    </div>
                                                    <div className="field-input">
                                                        <input type="email" name="email" placeholder="Your Email *" />
                                                    </div>
                                                    <div className="field-input">
                                                        <input type="text" name="website" placeholder="Website" />
                                                    </div>
                                                </div>
                                                <div className="field-input">
                                                    <textarea name="comment" id="comment" cols={30} rows={10} placeholder="Comment*" defaultValue={""} />
                                                </div>
                                                <div className="field-submit">
                                                    <input type="submit" defaultValue="Submit" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </article>
                                <div className="post-related">
                                    <h3 className="title">Related Posts</h3>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <article className="post post-grid format-video">
                                                <div className="entry-thumbnail">
                                                    <Link href="/" title="Top 6 Membership Sites for Beginners">
                                                        <img src="/assets/images/post-01.jpg" alt="Top 6 Membership Sites for Beginners" />
                                                    </Link>
                                                </div>
                                                <div className="entry-content">
                                                    <div className="entry-category">
                                                        <Link href="/" title="Marketing">Marketing</Link>
                                                        <Link href="/" title="Creative">Creative</Link>
                                                    </div>
                                                    <div className="entry-title">
                                                        <h3><Link href="/" title="Top 6 Membership Sites for Beginners">Top 6 Membership Sites for Beginners</Link></h3>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <article className="post post-grid format-gallery">
                                                <div className="entry-thumbnail">
                                                    <Link href="/" title="How to become a web designer in 2022">
                                                        <img src="/assets/images/post-02.jpeg" alt="How to become a web designer in 2022" />
                                                    </Link>
                                                </div>
                                                <div className="entry-content">
                                                    <div className="entry-category">
                                                        <Link href="/" title="Tutorials">Tutorials</Link>
                                                        <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                                    </div>
                                                    <div className="entry-title">
                                                        <h3><Link href="/" title="How to become a web designer in 2022">How to become a web designer in 2022</Link></h3>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-share">
                                    <div className="inner">
                                        <span className="label">Share</span>
                                        <ul>
                                            <li><Link href="/" title="Facebook"><i className="lab la-facebook-f" /></Link></li>
                                            <li><Link href="/" title="Twitter"><i className="lab la-twitter" /></Link></li>
                                            <li><Link href="/" title="Instagram"><i className="lab la-instagram" /></Link></li>
                                        </ul>
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