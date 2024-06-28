import Link from "next/link";
export default function Dating_Section6() {

    return (
        <>

            <section className="section background-yellow spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr100">
                                <div className="heading heading-alway-dark mb24">
                                    <div className="heading-sub">how it works</div>
                                    <h2 className="heading-title size-xl">Watch the two minute video to learn how.</h2>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Play Video">Play Video</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/images/dating-13.png" alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}