import Link from "next/link";
export default function Web3_Section3() {

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub">Our services</div>
                        <h2 className="heading-title w500 size-l">What we do for you</h2>
                    </div>
                    <div className="block-image-box layout-04">
                        <div className="image-box">
                            <div className="thumbnail">
                                <img src="/assets/images/hw3-02.png" alt="Thumbnail" />
                            </div>
                            <div className="content">
                                <h4 className="title">DAO-native</h4>
                                <div className="desc">Nunc molestie tellus sapien, quis laoreet orci.</div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text" title="Learn More">Learn More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-box">
                            <div className="thumbnail">
                                <img src="/assets/images/hw3-03.png" alt="Thumbnail" />
                            </div>
                            <div className="content">
                                <h4 className="title">Web3-worthy editor</h4>
                                <div className="desc">Nunc molestie tellus sapien, quis laoreet orci.</div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text" title="Learn More">Learn More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-box">
                            <div className="thumbnail">
                                <img src="/assets/images/hw3-04.png" alt="Thumbnail" />
                            </div>
                            <div className="content">
                                <h4 className="title">Collectable entries</h4>
                                <div className="desc">Nunc molestie tellus sapien, quis laoreet orci.</div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text" title="Learn More">Learn More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}