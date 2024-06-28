
import Link from "next/link";
export default function Book_Section8() {
    return (
        <>
            <section className="section background-yellow background-contain-right spdtb" style={{ backgroundImage: 'url(/assets/images/hb-05.webp)' }}>
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr100">
                                <div className="heading heading-alway-dark mb24">
                                    <h2 className="heading-title size-xl">Be the first to own this book</h2>
                                    <div className="heading-desc">Only books give you the special knowledge that makes you special.</div>
                                </div>
                                <div className="button-wrap mb16">
                                    <Link href="/contact-01" className="button fullfield" title="Buy now with just $50">Buy now with just $50</Link>
                                </div>
                                <p className="color-alway-dark">Read by over 22,000+ Designers</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images lg-mt32 layout-12">
                                <div className="inner">
                                    <img className="wow animate__animated   animate__fadeInRight" src="/assets/images/hb-01.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}