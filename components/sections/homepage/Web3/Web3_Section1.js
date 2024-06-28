import Link from "next/link";
export default function Web3_Section1() {
    return (
        <>
            <section className="section background-grey has-shape opt120 spdb overflow-hidden">
                <div className="shape shape-navy-2" />
                <div className="shape shape-navy" />
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <div className="heading-sub size-xl no-uppercase">Burst into the</div>
                                <h2 className="heading-title size-xxxxl color-navy-2">Metaverse</h2>
                                <div className="heading-desc">Create digital asset marketplaces, <br /> and launch virtual worlds in Web3.</div>
                            </div>
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button fullfield xs-mb10" title="Get Started">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images lg-mt32 layout-10">
                                <div className="inner">
                                    <img className="img01 animate__jump" src="/assets/images/hw3-01.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}