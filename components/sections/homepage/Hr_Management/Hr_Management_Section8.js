export default function Hr_Management_Section8() {
    return (
        <>
            <section className="section-banner layout-04 mb-5">
                <div className="container pb-5">
                    <div className="inner background-navy">
                        <div className="row">
                            <div className="col-lg-11">
                                <div className="banner-left align-left spdtb pdl80 lg-pdl30 lg-pdr30">
                                    <div className="heading heading-alway-white">
                                        <h2 className="heading-title size-xl">Start your <span>14-days</span> Free trial</h2>
                                        <div className="heading-desc">Bring your team together. No contracts, no commitments.</div>
                                    </div>
                                    <form action="#" className="newsletter">
                                        <div className="field-input">
                                            <input type="email" name="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="field-submit">
                                            <input type="submit" name="submit" defaultValue="Send" />
                                        </div>
                                        <div className="field-note">
                                            <ul>
                                                <li>No credit card required</li>
                                                <li>Cancel anytime</li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <div className="banner-right layout-02 lg-hidden">
                                    <img src="/assets/images/hr-15.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}