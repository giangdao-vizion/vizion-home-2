import Link from "next/link";
export default function Startup_Section4() {
    return (
        <>
            <section className="section background-yellow">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr60 lg-pdt30 lg-pdb30">
                                <div className="heading heading-alway-dark mb32">
                                    <div className="heading-sub">Company’s vision</div>
                                    <h2 className="heading-title size-l">The story behind how our company was founded</h2>
                                    <div className="heading-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit eque ipsum odio justo amet urna auctor. At congue vulputate augue praesent mauris eu posuere pretium tellus. Viverra volutpat a est quis egestas id risus cursus venenatis.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button borderline-dark" title="Read more story">Read more story</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl100">
                                <img className="wow animate__animated animate__fadeInRight" src="/assets/images/hst-04.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}