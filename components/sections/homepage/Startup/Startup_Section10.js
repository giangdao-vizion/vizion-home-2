import Link from "next/link";
export default function Startup_Section10() {

    return (
        <>
            <section className="section-banner background-navy layout-02" style={{ backgroundImage: 'url("/assets/images/banner-image-02.jpg")' }}>
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content devider-right">
                                    <div className="heading heading-alway-white">
                                        <div className="heading-sub">Work with us</div>
                                        <h2 className="heading-title">Now let's grow yours!</h2>
                                        <div className="heading-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                    </div>
                                    <div className="button-wrap">
                                        <Link href="/contact-01" className="button borderline-white">Contact Us <i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}