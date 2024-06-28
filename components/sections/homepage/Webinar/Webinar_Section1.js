import Link from "next/link";
export default function Webniar_Section1() {
    return (
        <>
            <section className="section-banner layout-10 opt120 overflow-hidden">
                <div className="shape-top">
                    <svg width={820} height={156} viewBox="0 0 820 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M819.869 0C718.846 95.7944 572.637 156 410 156C247.363 156 101.154 95.7944 0.131531 0H819.869Z" fill="var(--sala-shade-background, $shade_background)" />
                    </svg>
                </div>
                <div className="container">
                    <div className="row flex-align-c row-full">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <h2 className="heading-title size-xl">Web 3.0 - the Blockchain Effect</h2>
                                <div className="heading-desc">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
                            </div>
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button fullfield xs-mb10" title="Book your seat">Book your seat</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-full-right">
                            <div className="pdr30">
                                <img className="wow animate__animated animate__fadeInUp" src="/assets/images/hw-02.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}