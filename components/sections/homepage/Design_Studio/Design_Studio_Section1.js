import Link from "next/link";
export default function Design_Studio_Section1() {
    return (
        <>
            <section className="section vh100 vh-align-bottom lg-pdt100">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub">What We Can Help You</div>
                        <h2 className="heading-title font-second size-l"><i>Think</i> the Design, <br /> Design the <span><i>Thinking</i></span></h2>
                    </div>
                    <div className="block-modern-box">
                        <div className="box wow animate__animated   animate__fadeInDown" data-wow animate__animated-delay="0s">
                            <div className="inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                    <path className="elementor-shape-fill" fill="var(--sala-neutral-white, $neutral_white)" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z" />
                                </svg>
                                <img src="/assets/images/modern-box-01.png" alt="Box" />
                                <h3 className="title">Ui/Ux<br />Design</h3>
                            </div>
                        </div>
                        <div className="box wow animate__animated   animate__fadeInDown" data-wow animate__animated-delay="0.2s">
                            <div className="inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                    <path className="elementor-shape-fill" fill="var(--sala-neutral-white, $neutral_white)" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z" />
                                </svg>
                                <img src="/assets/images/modern-box-02.png" alt="Box" />
                                <h3 className="title">Brand<br />Strategy</h3>
                            </div>
                        </div>
                        <div className="box wow animate__animated   animate__fadeInDown" data-wow animate__animated-delay="0.4s">
                            <div className="inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                    <path className="elementor-shape-fill" fill="var(--sala-neutral-white, $neutral_white)" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z" />
                                </svg>
                                <img src="/assets/images/modern-box-03.png" alt="Box" />
                                <h3 className="title">Print<br />Design</h3>
                            </div>
                        </div>
                        <div className="box wow animate__animated   animate__fadeInDown" data-wow animate__animated-delay="0.6s">
                            <div className="inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                    <path className="elementor-shape-fill" fill="var(--sala-neutral-white, $neutral_white)" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z" />
                                </svg>
                                <img src="/assets/images/modern-box-04.png" alt="Box" />
                                <h3 className="title">Visual<br />Identity</h3>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-bar">Scroll</div>
                    <ul className="socials socials-line">
                        <li><Link href="/" title="Facebook">Facebook</Link></li>
                        <li><Link href="/" title="Behance">Behance</Link></li>
                        <li><Link href="/" title="Twitter">Twitter</Link></li>
                    </ul>
                </div>
            </section>
        </>
    )
}