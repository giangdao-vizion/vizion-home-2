import Link from "next/link";
export default function Crypto_Section1() {
    return (
        <>
            <section className="section opt200 spdb overflow-hidden">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <div className="heading-sub">Crypto Payment App</div>
                                <h2 className="heading-title size-xl">Payments infrastructure for crypto</h2>
                            </div>
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button fullfield" title="Start 14 days Free">Start 14 days Free</Link>
                            </div>
                            <div className="block-social mt60">
                                <p>Trusted by</p>
                                <ul>
                                    <li className="xs-mb10"><img src="/assets/images/hc-06.png" alt="Social" /></li>
                                    <li><img src="/assets/images/hc-07.png" alt="Social" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images opt200 layout-11">
                                <img className="img01" src="/assets/images/hc-01.png" alt="Image" />
                                <img className="img02 wow animate__animated   animate__fadeInLeft" src="/assets/images/hc-02.png" alt="Image" />
                                <img className="img03  img-jump" src="/assets/images/hc-03.png" alt="Image" />
                                <img className="img04 wow animate__animated   animate__fadeInRight" src="/assets/images/hc-04.png" alt="Image" />
                                <img className="img05 wow animate__animated   animate__fadeInRight" src="/assets/images/hc-05.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}