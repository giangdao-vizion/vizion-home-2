import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
export default function Startup_Section5() {
    return (
        <>
            <section className="section spdtb">
                <div className="block-banner">
                    <div className="container">
                        <div className="row flex-align-c">
                            <div className="col-lg-6">
                                <div className="image">
                                    <img className="wow animate__animated animate__fadeInRight" src="/assets/images/hst-05.svg" alt="Banner" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="content lg-mt32 pdl60">
                                    <div className="heading mb32">
                                        <div className="heading-sub color-navy">Insight</div>
                                        <h2 className="heading-title size-l">Insight that drives change</h2>
                                        <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content</div>
                                    </div>
                                    <div className="block-counter layout-03">
                                        <div className="row">
                                            <div className="col-lg-6 col-6">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={98} time={1} /></span><span className="suffix color-navy">%</span></div>
                                                    <div className="title">Private Office</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={20} time={1} /></span><span className="suffix color-navy">+</span></div>
                                                    <div className="title">Coworking Desks</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={100} time={1} /></span><span className="suffix color-navy">+</span></div>
                                                    <div className="title">Meeting Rooms</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={55} time={1} /></span><span className="suffix color-navy">%</span></div>
                                                    <div className="title">Meeting Rooms</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-wrap">
                                        <Link href="/contact-01" className="button fullfield">Get in touch</Link>
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