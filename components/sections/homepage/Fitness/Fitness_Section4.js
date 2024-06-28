import Link from "next/link";
export default function Fitness_Section4() {
    return (
        <>

            <section className="section spdt">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <img className="br8 wow animate__animated animate__fadeInRight" src="/assets/images/hf-04.jpg" alt="Image" />
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl100 pdr100 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub">02.</div>
                                    <h2 className="heading-title size-l">Personal Trainer</h2>
                                    <div className="heading-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Read more">Read more <i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}