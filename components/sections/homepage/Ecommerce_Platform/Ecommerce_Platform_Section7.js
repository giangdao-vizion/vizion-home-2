import CounterUp from "@/components/elements/CounterUp";


export default function Ecommerce_Platform_Section7() {
    return (
        <>
            <section className="section opt120 opb120 background-navy mt80 background-contain-right" style={{ backgroundImage: 'url(/assets/images/hep-23.png)' }}>
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading heading-alway-white mg0">
                                <h2 className="heading-title size-l">We have <span className="no-underline background-03">impactful</span> numbers</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block-counter layout-07 lg-mt32">
                                <div className="counter-box">
                                    <div className="title">Merchant</div>
                                    <div className="number"><span className="counter"><CounterUp count={20} time={1} /></span><span className="suffix color-white">k+</span></div>
                                </div>
                                <div className="counter-box">
                                    <div className="title">Countries</div>
                                    <div className="number"><span className="counter"><CounterUp count={60} time={1} /></span><span className="suffix color-white">+</span></div>
                                </div>
                                <div className="counter-box">
                                    <div className="title">Languages</div>
                                    <div className="number"><span className="counter"><CounterUp count={10} time={1} /></span><span className="suffix color-white">+</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}