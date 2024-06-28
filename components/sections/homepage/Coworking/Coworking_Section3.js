import Link from "next/link";
export default function Coworking_Section3() {

    return (
        <>
            <section className="section linear-gradient-03 mt80" style={{ backgroundImage: 'url(/assets/images/coworking-02.jpeg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="spdtb pdr50">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">Amenities</div>
                                    <h2 className="heading-title size-l">Flexible workspace where and how you need it</h2>
                                </div>
                                <div className="block-icon-box layout-07">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/cw-01.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">Unlimited High Speed Wifi</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/cw-02.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">Access to Living Room Area</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/cw-03.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">24 Hours - 7 Days Access​</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/cw-04.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">Tea, Coffee and Snacks</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/cw-05.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">Multifunction Business Printer</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="icon-box">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="/assets/images/cw-06.svg" alt="Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">Community Events</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Know More">Know More <i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" />
                    </div>
                </div>
            </section>


        </>
    )
}