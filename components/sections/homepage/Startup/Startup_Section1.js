import Link from "next/link";
export default function Startup_Section1() {
    return (
        <>

            <section className="section opt120 spdb overflow-hidden">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr100">
                                <div className="heading mb32">
                                    <div className="heading-sub layout-02">Startup</div>
                                    <h2 className="heading-title size-xl">The <span className="no-underline background-04">template</span> your startup needed</h2>
                                    <div className="heading-desc">Awesome product pages. Mobile friendly. Easy.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Les't talk - Send a message">Les't talk - Send a message</Link>
                                </div>
                                <p className="h3 color-dark w500 mt32">Phone. (84) 810-3402</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="wow animate__animated animate__zoomIn" src="/assets/images/hst-01.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}