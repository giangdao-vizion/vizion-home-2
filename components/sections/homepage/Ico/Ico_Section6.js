import Link from "next/link";
export default function Ico_Section6() {

    return (
        <>

            <section className="section spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-1">
                            <div className="images layout-03">
                                <div className="inner">
                                    <img className="wow animate__animated animate__fadeInRight" src="/assets/images/hi-10.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdl80 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">What is BIT?</div>
                                    <h2 className="heading-title size-l">A platform to make it easier for you.</h2>
                                    <div className="heading-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum ut lacus eu egestas. Duis fringilla sed ligula sed ultricies.</div>
                                </div>
                                <div className="block-list layout-01 block-list-flex">
                                    <ul>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Vivamus ac elementum urna.</span>
                                        </li>
                                        <li>
                                            <i className="las la-check" />
                                            <span>Feugiat metus suscipiti.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button fullfield" title="Start Inverting">Start Inverting</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}