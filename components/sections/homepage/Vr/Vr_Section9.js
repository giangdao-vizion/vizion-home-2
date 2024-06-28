import Link from "next/link";
export default function Vr_Section9() {

    return (
        <>
            <section className="section spdtb linear-gradient-09">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr60">
                                <img className="wow animate__animated animate__fadeInLeft" src="/assets/images/hvr-10.png" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl100">
                                <div className="heading heading-alway-dark align-left mb32">
                                    <h2 className="heading-title size-l">Get Your VR Headset</h2>
                                    <div className="heading-desc">Enjoy exclusive premium concerts, movies, games and other exciting experiences in massive VR Venues.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Buy Now">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}