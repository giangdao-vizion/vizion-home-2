import CounterUp from "@/components/elements/CounterUp";

export default function Web3_Section2() {

    return (
        <>
            <div className="section spdt">
                <div className="container">
                    <div className="block-counter layout-06">
                        <div className="row g-0">
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={3} time={1} /></span><span className="suffix"> Billion</span></div>
                                    <div className="title">Daily API requests</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={600} time={1} /></span></div>
                                    <div className="title">Distinct Developers</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={20} time={1} /></span><span className="suffix">+</span></div>
                                    <div className="title">Global regions</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={24} time={1} /></span></div>
                                    <div className="title">Supported Networks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}