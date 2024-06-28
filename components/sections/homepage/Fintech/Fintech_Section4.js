import Link from "next/link";
export default function Fintech_Section4() {
    return (
        <>

            <section className="section linear-gradient-06 spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="images has-boxshadow">
                                <img className="br60   img-jump" src="/assets/images/hft-15.png" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl60 lg-mt32">
                                <div className="heading align-left mg0">
                                    <div className="heading-sub color-navy">SAVE AND INVEST</div>
                                    <h2 className="heading-title">Access the money you've already earnt instantly.</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="block-list layout-01 block-list-flex mt32">
                                    <ul>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Curabitur placerat sapien.</span>
                                        </li>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Vivamus ac elementum urna.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button fullfield" title="Start for Free">Start for Free</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}