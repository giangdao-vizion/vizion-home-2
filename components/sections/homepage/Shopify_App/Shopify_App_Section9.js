export default function Shopify_App_Section9() {
    return (
        <>
            <section
                className="section-banner background-navy spdtb layout-05"
                style={{ backgroundImage: "url(/assets/images/asc12.png)" }}
            >
                <div className="container">
                    <div className="inner">
                        <div className="heading heading-alway-white align-center">
                            <div className="heading-sub">Start your project with us</div>
                            <h2 className="heading-title size-xl">
                                Automate your customer <br /> service with app
                            </h2>
                        </div>
                        <form action="#" className="newsletter">
                            <div className="field-input">
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue=""
                                    placeholder="example.myshopify.com"
                                />
                            </div>
                            <div className="field-submit">
                                <input type="submit" name="submit" defaultValue="Get Started" />
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
            </section>
        </>
    )
}