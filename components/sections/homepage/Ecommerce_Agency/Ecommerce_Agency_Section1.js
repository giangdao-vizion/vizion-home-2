import Link from "next/link";
export default function Ecommerce_Agency_Section1() {
    return (
        <>
            <section className="section background-grey background-fullheight-top-right opt200 pb200 overflow-hidden" style={{ backgroundImage: 'url(/assets/images/hea-01.png)' }}>
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-xl-5 col-md-6">
                            <div className="heading mb32">
                                <h2 className="heading-title font-third">We build amazing <span className="color-navy no-underline">eCommerce</span> website for your business </h2>
                            </div>
                            <div className="button-wrap popup-wrapper mt32">
                                <Link href="/contact-01" className="button fullfield-dark" title="Contact Us">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}