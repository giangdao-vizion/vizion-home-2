import Link from "next/link";
export default function Ico_Section1() {
    return (
        <>
            <section className="section opt120 spdb overflow-hidden">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr60">
                                <div className="heading mb32">
                                    <div className="heading-sub layout-02">Private Token Sale</div>
                                    <h2 className="heading-title size-xl">Landing template for ICO startup agency</h2>
                                    <div className="heading-desc">Most Trending, Clean and Elegant Design based on deeply research</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Start Inverting">Start Inverting</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="lg-mt32">
                                <img className="wow animate__animated animate__fadeInDown" src="/assets/images/hi-01.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}