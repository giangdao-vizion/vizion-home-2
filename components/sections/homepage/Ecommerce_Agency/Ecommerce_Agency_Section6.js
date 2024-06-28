import Link from "next/link";
export default function Ecommerce_Agency_Section6() {

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="pdl100">
                        <div className="heading align-left">
                            <h2 className="heading-title font-third">Selected <span className="color-navy no-underline">Works</span></h2>
                            <div className="heading-desc">The balance in design is the most important thing.</div>
                        </div>
                        <div className="block-project">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="pdr50 spdt">
                                        <div className="item wow animate__animated   animate__fadeInUp">
                                            <div className="thumb">
                                                <Link href="/"><img src="/assets/images/hea-11.png" alt="Image" /></Link>
                                            </div>
                                            <h3 className="title"><Link href="/">1. Golo - Travel Booking Website</Link></h3>
                                        </div>
                                        <div className="item wow animate__animated   animate__fadeInUp">
                                            <div className="thumb">
                                                <Link href="/"><img src="/assets/images/hea-13.png" alt="Image" /></Link>
                                            </div>
                                            <h3 className="title"><Link href="/">2. G Circle - Grocery Store</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="pdl50">
                                        <div className="item wow animate__animated   animate__fadeInUp">
                                            <div className="thumb">
                                                <Link href="/"><img src="/assets/images/hea-12.png" alt="Image" /></Link>
                                            </div>
                                            <h3 className="title"><Link href="/">3. Golo - Travel Booking Website</Link></h3>
                                        </div>
                                        <div className="item wow animate__animated   animate__fadeInUp">
                                            <div className="thumb">
                                                <Link href="/"><img src="/assets/images/hea-14.png" alt="Image" /></Link>
                                            </div>
                                            <h3 className="title"><Link href="/">4. Golo - Travel Booking Website</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-wrap align-center">
                        <Link href="/contact-01" className="button-more" title="More">More</Link>
                    </div>
                    <div className="sperator" />
                </div>
            </section>


        </>
    )
}