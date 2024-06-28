import Link from "next/link";
export default function Ecommerce_Platform_Section10() {

    return (
        <>
            <section className="section align-center spdt">
                <div className="block-trial layout-02">
                    <div className="container">
                        <h2 className="title">
                            Start Selling Online for Free
                            <img className="wow animate__animated animate_zoomIn" src="/assets/images/hep-26.webp" alt="Image" />
                        </h2>
                        <div className="button-wrap">
                            <Link href="/contact-01" className="button fullfield" title="Get started for Free">Get started for Free</Link>
                        </div>
                        <div className="note">No credit card required</div>
                        <img className="wow animate__animated   animate__fadeInUp" src="/assets/images/hep-25.webp" alt="Image" />
                    </div>
                </div>
            </section>


        </>
    )
}