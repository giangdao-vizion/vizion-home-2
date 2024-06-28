import Link from "next/link";

export default function Webniar_Section9() {

    return (
        <>
            <section className="section background-full background-overlay bo4" style={{ backgroundImage: 'url(/assets/images/hw-12.png)' }}>
                <div className="container">
                    <div className="block-contact-form">
                        <div className="row flex-align-c">
                            <div className="col-lg-6">
                                <div className="spdtb">
                                    <div className="heading heading-alway-white mb32">
                                        <div className="heading-sub">Hurry Up</div>
                                        <h2 className="heading-title size-xl">Book Your Seat Right Now</h2>
                                    </div>
                                    <div className="button-wrap">
                                        <Link href="/contact-01" className="button fullfield" title="Book your seat">Book your seat</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-form layout-02">
                                    <div className="heading heading-alway-white mb32">
                                        <h2 className="heading-title">Register to Our Webinar</h2>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="field-input">
                                                    <input type="text" name="full_name" placeholder="Enter Your Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="field-input">
                                                    <input type="text" name="date" placeholder="Date" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="field-input">
                                                    <input type="text" name="time" placeholder="Time" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="field-input">
                                                    <input type="text" name="work_email" id="work_email" placeholder="Your email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="field-input">
                                                    <input type="text" name="phone_number" id="phone_number" placeholder="Your phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="field-submit">
                                                    <input type="submit" defaultValue="Confirm" name="confirm" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}