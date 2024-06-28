import Link from "next/link";
export default function Vr_Section1() {
    return (
        <>

            <section className="section opt120 overflow-hidden linear-gradient-07">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr60">
                                <div className="heading heading-alway-dark mb32">
                                    <div className="heading-sub layout-02">OCULUS QUEST</div>
                                    <h2 className="heading-title size-xl">Oculus Go Standalone Virtual Reality Headse - 32GB</h2>
                                    <div className="heading-desc">User controlled playback of 360° video content</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Buy Now">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="lg-mt32">
                                <div className="images layout-03">
                                    <div className="inner">
                                        <img className="img01 wow animate__animated animate__fadeInRight" src="/assets/images/hvr-01.png" alt="Image" />
                                        <img className="img27" src="/assets/images/hvr-02.png" alt="Image" />
                                        <img className="img28" src="/assets/images/hvr-02.png" alt="Image" />
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