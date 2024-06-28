import Link from "next/link";
export default function Fitness_Section3() {

    return (
        <>

            <section className="section spdt">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr100 pdl100 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub">01.</div>
                                    <h2 className="heading-title size-l">Meal tracker</h2>
                                    <div className="heading-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Read more">Read more <i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
                            <img className="br8 wow animate__animated animate__fadeInLeft" src="/assets/images/hf-03.jpg" alt="Image" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}