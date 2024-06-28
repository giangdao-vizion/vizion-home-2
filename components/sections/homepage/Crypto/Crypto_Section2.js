import CounterUp from "@/components/elements/CounterUp";

export default function Crypto_Section2() {

    return (
        <>

            <section className="section-banner">
                <div className="container">
                    <div className="inner background-yellow pt60 pb60 br10">
                        <div className="heading heading-alway-dark align-center mb32">
                            <h2 className="heading-title size-l">Why you should trust us</h2>
                        </div>
                        <div className="block-counter layout-04 flex flex-align-c">
                            <div className="counter-box">
                                <div className="number"><span className="counter"><CounterUp count={1.5} time={1} /></span><span className="suffix">B EUR</span></div>
                                <div className="title">Private Office</div>
                            </div>
                            <div className="counter-box">
                                <div className="number"><span className="prefix">Over </span><span className="counter"><CounterUp count={4} time={1} /></span><span className="suffix">M</span></div>
                                <div className="title">Coworking Desks</div>
                            </div>
                            <div className="counter-box">
                                <div className="number">
                                    <span className="counter"><CounterUp count={500} time={1} /></span>
                                    <span className="suffix">+</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd">
                                            <g fill="#0057FC" fillRule="nonzero">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path d="M2.822 24L19.98 6.848 19.98 22.658 24 22.585 24 0 1.411 0 1.411 3.95 17.158 4.023 0 21.175z" transform="translate(-351.000000, -3886.000000) translate(0.000000, 900.000000) translate(0.000000, 2768.000000) translate(135.000000, 188.000000) translate(56.000000, 24.000000) translate(160.000000, 6.000000)" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="title">Meeting Rooms</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}