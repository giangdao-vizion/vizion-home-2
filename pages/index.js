import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Index() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <section className="section background-grey opt160">
                    <div className="container">
                        <div className="heading align-center mb32">
                            <div className="heading-sub color-navy w600">Full Dark More</div>
                            <h2 className="heading-title size-xxl">Startup &amp; SaaS <br /> HTML Template</h2>
                            <div className="heading-desc">By using this theme anyone can build Startup, SaaS, Apps, Crypto,
                                <br /> Web3, Software, IT services…website</div>
                        </div>
                        <div className="button-wrap popup-wrapper align-center">
                            <Link href="/demos" className="button fullfield" title="Explore Demos">Explore Demos</Link>
                        </div>
                        <div className="images layout-18 mt32">
                            <img src="/assets/images/html5.svg" alt="Hmlt5" />
                            <img src="/assets/images/css3.svg" alt="Css3" />
                            <img src="/assets/images/sass.svg" alt="Sass" />
                            <img src="/assets/images/bootstrap.svg" alt="Bootstrap" />
                            <img src="/assets/images/google-font.svg" alt="Google Font" />
                            <img src="/assets/images/w3c.svg" alt="W3c" />
                        </div>
                    </div>
                </section>
                <section id="demos" className="section background-grey spdtb">
                    <div className="container">
                        <div className="heading align-center mb32">
                            <h2 className="heading-title size-l">27+ Unique Demos</h2>
                            <div className="heading-desc size-l w600 color-navy">No Coding Required</div>
                        </div>
                        <div className="block-list layout-01 block-flex-center block-list-flex mb60">
                            <ul>
                                <li>
                                    <i className="las la-check" />
                                    <span>Full Responsive</span>
                                </li>
                                <li>
                                    <i className="las la-check" />
                                    <span>Full Dark Mode</span>
                                </li>
                                <li>
                                    <i className="las la-check" />
                                    <span>Easy To Customize</span>
                                </li>
                            </ul>
                        </div>
                        <div className="block-image-box layout-05">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-startup" title="Image"><img src="assets/images/demo-01.png" alt="Thumbnail" /></Link>
                                            <div className="badge badge-hot">Hot</div>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-startup" title="Startup">Startup</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-shopify-app" title="Image"><img src="assets/images/demo-02.png" alt="Thumbnail" /></Link>
                                            <div className="badge badge-hot">Hot</div>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-shopify-app" title="Shopify App">Shopify App</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-nft" title="Image"><img src="assets/images/demo-03.png" alt="Thumbnail" /></Link>
                                            <div className="badge badge-new">New</div>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-nft" title="NFT Game">NFT Game</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-app-showcase" title="Image"><img src="assets/images/demo-04.png" alt="Thumbnail" /></Link>
                                            <div className="badge badge-hot">Hot</div>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-app-showcase" title="App Showcase">App Showcase</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-saas" title="Image"><img src="assets/images/demo-05.png" alt="Thumbnail" /></Link>
                                            <div className="badge badge-hot">Hot</div>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-saas" title="Saas Subscription">Saas Subscription</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-seo" title="Image"><img src="assets/images/demo-06.png" alt="Thumbnail" /></Link>
                                            <div className="badge badge-hot">Hot</div>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-seo" title="SEO Egency">SEO Egency</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-hr-maganement" title="Image"><img src="assets/images/demo-07.png" alt="Thumbnail" /></Link>
                                            <div className="badge badge-hot">Hot</div>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-hr-maganement" title="Softwave">Softwave</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-web3" title="Image"><img src="assets/images/demo-08.png" alt="Thumbnail" /></Link>
                                            <div className="badge badge-new">New</div>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-web3" title="Web3">Web3</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-ico" title="Image"><img src="assets/images/demo-09.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-ico" title="Crypto ICO">Crypto ICO</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-vr" title="Image"><img src="assets/images/demo-10.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-vr" title="Seller Page - VR">Seller Page - VR</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-book" title="Image"><img src="assets/images/demo-11.webp" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-book" title="Seller Page - Book">Seller Page - Book</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-ecommerce-agency" title="Image"><img src="assets/images/demo-12.webp" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-ecommerce-agency" title="Ecommerce Agency">Ecommerce Agency</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-fitness" title="Image"><img src="assets/images/demo-13.webp" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-fitness" title="Fitness App">Fitness App</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-webinar" title="Image"><img src="assets/images/demo-14.webp" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-webinar" title="Webinar">Webinar</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-chat-service" title="Image"><img src="assets/images/demo-15.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-chat-service" title="Chat Tool">Chat Tool</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-email" title="Image"><img src="assets/images/demo-16.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-email" title="Email Tool">Email Tool</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-ecommerce-platform" title="Image"><img src="assets/images/demo-17.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-ecommerce-platform" title="Ecommerce Platform">Ecommerce Platform</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-coworking" title="Image"><img src="assets/images/demo-18.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-coworking" title="Coworking">Coworking</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-video" title="Image"><img src="assets/images/demo-19.webp" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-video" title="Video Conferencing">Video Conferencing</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-design-portfolio" title="Image"><img src="assets/images/demo-20.webp" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-design-portfolio" title="Desinger Porfolio">Desinger Porfolio</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-design-studio" title="Image"><img src="assets/images/demo-21.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-design-studio" title="Design Studio">Design Studio</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-fintech" title="Image"><img src="assets/images/demo-22.webp" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-fintech" title="Fintech App">Fintech App</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-crypto" title="Image"><img src="assets/images/demo-23.webp" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-crypto" title="Crypto App">Crypto App</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-dating" title="Image"><img src="assets/images/demo-24.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-dating" title="Dating App">Dating App</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-music-app" title="Image"><img src="assets/images/demo-25.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-music-app" title="Music App">Music App</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-pet" title="Image"><img src="assets/images/demo-26.png" alt="Thumbnail" /></Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-pet" title="Vet App">Vet App</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image-box">
                                        <div className="thumbnail">
                                            <Link href="/home/home-rtl" title="Image"><img src="assets/images/demo-27.png" alt="Thumbnail" /></Link>
                                            <div className="badge badge-new">New</div>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"><Link href="/home/home-rtl" title="RTL Demo">RTL Demo</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="section spdt">
                    <div className="container">
                        <div className="row flex-align-c">
                            <div className="col-lg-6">
                                <div className="pdr60">
                                    <div className="heading mb32">
                                        <h2 className="heading-title">Full Dark Mode</h2>
                                        <div className="heading-desc">Turn on Dark Mode for a great viewing experience
                                            especially in low-light environments. Turn on Dark Mode to give your eyes a
                                            break.</div>
                                    </div>
                                    <div className="block-list block-list-flex layout-01">
                                        <ul>
                                            <li>
                                                <i className="las la-check" />
                                                <span>Smart Mode Toggle</span>
                                            </li>
                                            <li>
                                                <i className="las la-check" />
                                                <span>Individual Colors</span>
                                            </li>
                                            <li>
                                                <i className="las la-check" />
                                                <span>Easy settings for Dark Mode</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="twentytwenty-wrap lg-mt32">
                                    <img src="/assets/images/light-mode.jpg" className="image-first" alt="Image" />
                                    <img src="/assets/images/dark-mode.jpg" className="image-last" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section spdtb">
                    <div className="container">
                        <div className="row flex-align-c">
                            <div className="col-lg-6 lg-order-2">
                                <div className="twentytwenty-wrap lg-mt32">
                                    <img src="/assets/images/ltr-mode.jpg" className="image-first" alt="Image" />
                                    <img src="/assets/images/rtl-mode.jpg" className="image-last" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 lg-order-1">
                                <div className="pdl60">
                                    <div className="heading mb32">
                                        <h2 className="heading-title">RTL &amp; LTR Version</h2>
                                        <div className="heading-desc">Sala provides fully responsive a choice to choose LTR
                                            or RTL version supported in both Light and Dark mode managed with Inline CSS
                                            based.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section background-black spdtb">
                    <div className="container">
                        <div className="heading align-center heading-alway-white">
                            <div className="heading-sub w600">Build Anything</div>
                            <h2 className="heading-title size-xl">Template Features</h2>
                        </div>
                        <div className="block-icon-box layout-18">
                            <div className="row">
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="lab la-sass" /></div>
                                        <h4 className="title">Built <br /> With SASS</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-desktop" /></div>
                                        <h4 className="title">Fully <br /> Responsive</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="lab la-internet-explorer" /></div>
                                        <h4 className="title">Browser <br /> Compatibility</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-eye" /></div>
                                        <h4 className="title">Retina <br /> Ready</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-align-right" /></div>
                                        <h4 className="title">RTL Supported Theme</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-adjust" /></div>
                                        <h4 className="title">Dark Supported Theme</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-icons" /></div>
                                        <h4 className="title">Flaticon <br /> Icon</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-check-circle" /></div>
                                        <h4 className="title">W3c <br /> Valid Code</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-otter" /></div>
                                        <h4 className="title">wow animate__animated Animation Plugin</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-cog" /></div>
                                        <h4 className="title">Easy to customize</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-image" /></div>
                                        <h4 className="title">Free Illustrator Image</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-camera" /></div>
                                        <h4 className="title">Free <br /> Images</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="lab la-google" /></div>
                                        <h4 className="title">Free Google Fonts</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-code-branch" /></div>
                                        <h4 className="title">Well Code</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-code" /></div>
                                        <h4 className="title">Clean Code</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-undo-alt" /></div>
                                        <h4 className="title">Free Updates</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-book" /></div>
                                        <h4 className="title">Detailed Docs</h4>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="las la-heart" /></div>
                                        <h4 className="title">Developer Friendly</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section spdtb background-navy">
                    <div className="container">
                        <div className="heading align-center heading-alway-white mb32">
                            <div className="heading-sub w600">one time payment</div>
                            <h2 className="heading-title size-xl">Build a stunning <br /> site today.</h2>
                        </div>
                        <div className="button-wrap align-center">
                            <Link href="/contact-01" className="button fullfield-white" title="Get It Now">Get It Now</Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
