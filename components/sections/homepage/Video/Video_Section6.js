import CounterUp from "@/components/elements/CounterUp";

export default function Video_Section6() {

    return (
        <>
            <section className="section background-yellow overflow-hidden lg-pdt60 lg-pdb60">
                <div className="container">
                    <div className="row row-full flex-align-c">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="heading heading-alway-dark">
                                    <h2 className="heading-title size-xl">Secure by design. Private by default.</h2>
                                </div>
                                <div className="block-counter alway-dark p40 layout-03 flex flex-align-c">
                                    <div className="counter-box">
                                        <div className="number"><span className="counter"><CounterUp count={500} time={1} /></span><span className="suffix">+</span></div>
                                        <div className="title">companies</div>
                                    </div>
                                    <div className="counter-box">
                                        <div className="number"><span className="counter"><CounterUp count={300} time={1} /></span><span className="suffix">K</span></div>
                                        <div className="title">users active</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-full-right">
                            <img src="/assets/images/hv-13.png" alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}