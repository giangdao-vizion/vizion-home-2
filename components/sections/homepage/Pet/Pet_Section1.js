import Link from "next/link";
export default function Pet_Section1() {
    return (
        <>
            <section className="section background-bottom-cover vh100 opt120 spdb overflow-hidden" style={{ backgroundImage: 'url(/assets/images/hp-01.png)' }}>
                <div className="container">
                    <div className="heading heading-alway-dark align-center mb32">
                        <h2 className="heading-title size-xl">The most attentive pet-care platform</h2>
                    </div>
                    <div className="button-wrap align-center">
                        <Link href="/contact-01" className="button fullfield-dark" title="Start for Free">Start for Free</Link>
                    </div>
                </div>
            </section>


        </>
    )
}