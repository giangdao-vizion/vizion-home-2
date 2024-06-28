import Link from "next/link";
export default function Book_Section3() {

    return (
        <>
            <section className="section background-grey has-shape spdtb">
                <div className="shape-top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ height: 80 }}>
                        <path fill="var(--sala-neutral-white)" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
                    </svg>
                </div>
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb24">
                                <h2 className="heading-title size-xl"><span className="no-underline color-navy">Top 1</span> Books <br /> for Designer</h2>
                                <div className="heading-desc">Good books give you the best lesson in life.</div>
                            </div>
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button fullfield" title="Buy now with just $50">Buy now with just $50</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="lg-mt32">
                                <img className="wow animate__animated   animate__fadeInRight" src="/assets/images/hb-03.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}