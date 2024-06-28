import Link from "next/link";
export default function Book_Section1() {
    return (
        <>
            <section className="section opt120 has-shape spdb">
                <div className="shape shape-yellow layout-01" />
                <div className="shape shape-yellow layout-02" />
                <div className="shape shape-red" />
                <div className="shape shape-blue" />
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <h2 className="heading-title size-xl">Make your life prosperous by reading books</h2>
                                <div className="heading-desc">Only books give you the special knowledge that makes you special.</div>
                            </div>
                            <div className="button-wrap mb16">
                                <Link href="/contact-01" className="button fullfield" title="Buy now with just $50">Buy now with just $50</Link>
                            </div>
                            <p>Read by over 22,000+ Designers</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="images lg-mt32 layout-12">
                                <div className="inner">
                                    <img className="wow animate__animated   animate__fadeInLeft" src="/assets/images/hb-01.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}