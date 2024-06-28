
import Link from "next/link";
export default function Email_Section8() {
    return (
        <>
            <section className="section background-navy spdtb">
                <div className="container">
                    <div className="heading heading-alway-white align-center mb32">
                        <h2 className="heading-title size-l">Nothing will change <br /> if you don't start today</h2>
                    </div>
                    <div className="button-wrap align-center">
                        <Link href="/contact-01" className="button fullfield-white" title="Try it free">Try it free</Link>
                    </div>
                </div>
            </section>

        </>
    )
}