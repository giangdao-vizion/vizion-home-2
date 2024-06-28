import CounterUp from "@/components/elements/CounterUp";

export default function Ecommerce_Agency_Section4() {
    return (
        <>

            <section className="section spdt overflow-hidden">
                <div className="container">
                    <div className="inner background-dark background-auto-left-bottom" style={{ backgroundImage: 'url(/assets/images/hea-07.png)' }}>
                        <div className="row row-full flex-align-c">
                            <div className="col-lg-8">
                                <div className="pdl100 pt30 pb30 lg-pdl30 lg-pdr30">
                                    <div className="heading heading-alway-white align-left mb100">
                                        <h2 className="heading-title font-third mb30">Why Choose <span className="no-underline background-01">Us</span></h2>
                                        <div className="heading-desc color-white-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                                    </div>
                                    <div className="block-counter layout-05">
                                        <div className="row">
                                            <div className="col-md-4 col-12">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={686} time={1} /></span></div>
                                                    <div className="title">Satsifield Customers</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-12">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={868} time={1} /></span></div>
                                                    <div className="title">Successful Projects</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-12">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={5} time={1} /></span><span className="suffix color-white">+</span></div>
                                                    <div className="title">Years of Experience</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-full-right dark-bg-right">
                                <div className="background-dark pt30 pb30">
                                    <img className="wow animate__animated   animate__fadeInLeft" src="/assets/images/hea-06.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}