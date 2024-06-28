import Link from 'next/link'

export default function Design_Studio_Section4() {
    return (
        <>
            <div className="section-banner overlay-navy layout-03" style={{ backgroundImage: 'url(/assets/images/hds-01.jpeg)' }}>
                <div className="container">
                    <div className="content">
                        <div className="heading heading-alway-white align-left">
                            <h2 className="heading-title">Making the digital <br /> world a happier place</h2>
                        </div>
                        <div className="button-wrap">
                            <Link href="/contact-01" className="button text-white" title="More about us">More about us <i className="las la-long-arrow-alt-right" /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}