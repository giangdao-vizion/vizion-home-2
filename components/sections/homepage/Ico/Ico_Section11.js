import Link from "next/link";
export default function Ico_Section11() {

    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub color-navy">Whitepaper</div>
                        <h2 className="heading-title size-l">Read our documents</h2>
                    </div>
                    <div className="block-icon-box layout-14">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-box align-center p30">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/hi-19.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title mb8">Whitepape</h4>
                                            <Link href="/contact-01" className="button text color-navy" title="Download">Download</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-box align-center p30">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/hi-19.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title mb8">Privaci &amp; Policy</h4>
                                            <Link href="/contact-01" className="button text color-navy" title="Download">Download</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-box align-center p30">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/hi-19.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title mb8">Terms &amp; Conditions</h4>
                                            <Link href="/contact-01" className="button text color-navy" title="Download">Download</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-box align-center p30">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/hi-19.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title mb8">Business Profile</h4>
                                            <Link href="/contact-01" className="button text color-navy" title="Download">Download</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}