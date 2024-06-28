import Link from 'next/link'

export default function Design_Studio_Section6() {
    return (
        <>
            <section className="section align-center">
                <div className="block-trial layout-01">
                    <div className="container">
                        <img className="image-top" src="/assets/images/macaroni-vertical.webp" alt="Trial" />
                        <div className="sub">Start your project with us</div>
                        <h2 className="title">Let’s Work Together</h2>
                        <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Let's Talk">Let's Talk</Link></div>
                    </div>
                </div>
            </section>

        </>
    )
}