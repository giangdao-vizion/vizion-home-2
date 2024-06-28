import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
export default function Coworking_Section2() {

    return (
        <>
            <section className="section linear-gradient-02 mt80" style={{ backgroundImage: 'url(/assets/images/coworking-02.jpeg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" />
                        <div className="col-lg-6">
                            <div className="spdtb">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">About us</div>
                                    <h2 className="heading-title size-l">A space to call home. And to create great work</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="block-counter p40 layout-03 flex flex-align-c">
                                    <div className="counter-box">
                                        <div className="number"><span className="counter">
                                            <CounterUp count={20} time={1} />
                                        </span><span className="suffix">+</span></div>
                                        <div className="title">Private Office</div>
                                    </div>
                                    <div className="counter-box">
                                        <div className="number"><span className="counter">
                                            <CounterUp count={100} time={1} />
                                        </span><span className="suffix">+</span></div>
                                        <div className="title">Coworking Desks</div>
                                    </div>
                                    <div className="counter-box">
                                        <div className="number"><span className="counter">
                                            <CounterUp count={5} time={1} />
                                        </span><span className="suffix">+</span></div>
                                        <div className="title">Meeting Rooms</div>
                                    </div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Know More">Know More <i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}