import Link from "next/link";
export default function Vr_Section3() {

    return (
        <>
            <section className="section background-full layout-12 opt160 opb200" style={{ backgroundImage: 'url(/assets/images/hvr-04.jpeg)' }}>
                <div className="container">
                    <div className="heading align-left heading-alway-white mb32">
                        <h2 className="heading-title size-xl">Bring your couch <br /> to the front row</h2>
                        <div className="heading-desc">It is a long established fact that a reader will <br /> be distracted by the readable content</div>
                    </div>
                    <div className="button-wrap">
                        <Link href="/contact-01" className="button borderline-white" title="Watch Video"><i className="las la-play-circle icon-before" />Watch Video</Link>
                    </div>
                </div>
            </section>


        </>
    )
}