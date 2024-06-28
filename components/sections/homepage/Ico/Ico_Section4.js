import Link from "next/link";
export default function Ico_Section4() {
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr80 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">ABOUT ICO</div>
                                    <h2 className="heading-title size-l">What is an Initial Coin Offering (ICO)?</h2>
                                    <div className="heading-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum ut lacus eu egestas. Duis fringilla sed ligula sed ultricies. Ut consectetur malesuada magna, vitae elementum elit imperdiet tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                </div>
                                <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Start Inverting">Start Inverting</Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
                            <div className="images layout-03">
                                <div className="inner">
                                    <img className="wow animate__animated animate__fadeInLeft" src="/assets/images/hi-05.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}