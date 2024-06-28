import Link from "next/link";
export default function Ecommerce_Platform_Section1() {
    return (
        <>
            <section className="section background-half-bottom-right opt120" style={{ backgroundImage: 'url(/assets/images/hep-03.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="images layout-15">
                                <img className="wow animate__animated   animate__zoomIn" src="/assets/images/hep-01.png" alt="Image" />
                            </div>
                            <div className="heading mb32">
                                <h2 className="heading-title size-xl">Start Selling Online for Free</h2>
                                <div className="heading-desc">Awesome product pages. Mobile friendly. Easy.</div>
                            </div>
                            <div className="button-wrap mt32">
                                <Link href="/contact-01" className="button fullfield xs-mb10" title="Start 14 days Free">Start 14 days Free</Link>
                            </div>
                            <div className="images layout-14 mt60">
                                <img className="xs-mb10" src="/assets/images/hep-02.png" alt="Image" />
                                <span className="xs-mb10">5M+ Merchants actived</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="images lg-mt32 layout-03">
                                <div className="inner">
                                    <img className="img01 wow animate__animated   animate__fadeInDown" src="/assets/images/hep-04.png" alt="Image" />
                                    <img className="img25 wow animate__animated   animate__fadeInLeft" src="/assets/images/hep-05.svg" alt="Image" />
                                    <img className="img26 wow animate__animated   animate__fadeInRight" src="/assets/images/hep-06.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}