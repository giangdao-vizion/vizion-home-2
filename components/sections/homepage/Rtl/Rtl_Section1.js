import Link from "next/link";
export default function Rtl_Section1() {
    return (
        <>
            <section className="section background-grey background-bottom opt160 spdb overflow-hidden" style={{ backgroundImage: 'url(/assets/images/wave-01.svg)' }}>
                <div className="container">
                    <div className="heading align-center mb32">
                        <h2 className="heading-title size-xl">Bring Your Business Idea</h2>
                        <div className="heading-desc size-l">Build stronger customer relationships</div>
                    </div>
                    <div className="button-wrap align-center">
                        <Link href="/contact-01" className="button fullfield" title="Start 14 days Free">Start 14 days Free</Link>
                    </div>
                    <p className="note align-center">No creadit card requiment</p>
                    <div className="images layout-05 mt60">
                        <div className="inner">
                            <img className="img01 wow animate__animated animate__fadeInUp" src="/assets/images/saas-01.png" alt="Image" />
                            <img className="img02 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.5s" src="/assets/images/saas-02.png" alt="Image" />
                            <img className="img03 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.3s" src="/assets/images/saas-03.png" alt="Image" />
                            <img className="img04 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.1s" src="/assets/images/saas-04.png" alt="Image" />
                            <img className="img05 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.5s" src="/assets/images/saas-02.png" alt="Image" />
                            <img className="img06 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.9s" src="/assets/images/saas-03.png" alt="Image" />
                            <img className="img07 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.7s" src="/assets/images/saas-04.png" alt="Image" />
                        </div>
                    </div>
                    <div className="clients align-center mt60">
                        <span className="title">Trusted by 1000+ brands worldwide</span>
                        <ul className="content">
                            <li><img src="/assets/images/client-01.webp" alt="Client" /></li>
                            <li><img src="/assets/images/client-02.webp" alt="Client" /></li>
                            <li><img src="/assets/images/client-03.webp" alt="Client" /></li>
                            <li><img src="/assets/images/client-04.webp" alt="Client" /></li>
                            <li><img src="/assets/images/client-05.png" alt="Client" /></li>
                            <li><img src="/assets/images/client-06.webp" alt="Client" /></li>
                        </ul>
                    </div>
                </div>
            </section>


        </>
    )
}