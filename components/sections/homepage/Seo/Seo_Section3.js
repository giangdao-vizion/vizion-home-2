import Link from "next/link";
export default function Seo_Section3() {

    return (
        <>

            <section className="section spdt pb40">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub color-navy">Our services</div>
                        <h2 className="heading-title size-l">What we do for you</h2>
                    </div>
                    <div className="block-image-box layout-04">
                        <div className="image-box">
                            <div className="thumbnail w80">
                                <img src="/assets/images/hs-03.png" alt="Thumbnail" />
                            </div>
                            <div className="content">
                                <h4 className="title w600">Social Media</h4>
                                <div className="desc">Nunc molestie tellus sapien, quis laoreet orci.</div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-box">
                            <div className="thumbnail w80">
                                <img src="/assets/images/hs-04.png" alt="Thumbnail" />
                            </div>
                            <div className="content">
                                <h4 className="title w600">Email Marketing</h4>
                                <div className="desc">Nunc molestie tellus sapien, quis laoreet orci.</div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-box">
                            <div className="thumbnail w80">
                                <img src="/assets/images/hs-05.png" alt="Thumbnail" />
                            </div>
                            <div className="content">
                                <h4 className="title w600">Digital Analytics</h4>
                                <div className="desc">Nunc molestie tellus sapien, quis laoreet orci.</div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Learn More">Learn More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-wrap align-center mt60">
                        <Link href="/contact-01" className="button fullfield" title="Explorer more">Explorer more</Link>
                    </div>
                </div>
            </section>

        </>
    )
}