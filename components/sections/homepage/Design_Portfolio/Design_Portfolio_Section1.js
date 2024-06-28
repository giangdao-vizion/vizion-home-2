import Link from "next/link";
export default function Design_Portfolio_Section1() {
    return (
        <>
            <section className="section background-full opt120 spdb relative" style={{ backgroundImage: 'url(/assets/images/hdp-01.png)' }}>
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="spdtb pdr50">
                                <div className="heading heading-alway-white mb32">
                                    <div className="heading-sub">I'm Kevin Kay</div>
                                    <h2 className="heading-title size-xl w400">Senior digital designer based in London. Working in UI, UX, and product design.</h2>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Hire me">Hire me</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" />
                    </div>
                    <ul className="socials socials-line color-white">
                        <li><Link href="/" title="Facebook">Facebook</Link></li>
                        <li><Link href="/" title="Behance">Behance</Link></li>
                        <li><Link href="/" title="Twitter">Twitter</Link></li>
                    </ul>
                </div>
            </section>


        </>
    )
}