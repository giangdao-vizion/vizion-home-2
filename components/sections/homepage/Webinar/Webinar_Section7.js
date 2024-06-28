import Link from "next/link";

export default function Webniar_Section7() {
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Schedule Details</h2>
                    </div>
                    <div className="block-timeline layout-02">
                        <div className="date-line">
                            <Link href="/" className="is-active">5th July</Link>
                            <Link href="/">6th July</Link>
                            <Link href="/">7th July</Link>
                        </div>
                        <div className="item is-active">
                            <div className="inner">
                                <div className="team">
                                    <img src="/assets/images/mem-1.png" alt="Avatar" />
                                    <img src="/assets/images/mem-2.png" alt="Avatar" />
                                    <img src="/assets/images/mem-3.png" alt="Avatar" />
                                </div>
                                <div className="time">11.30 - 17.30 PM</div>
                                <h3 className="title">Reinventing Experiences</h3>
                                <div className="twitter">@Jeff Booth, @Kay Tran, @Maxine</div>
                                <div className="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="inner">
                                <div className="team">
                                    <img src="/assets/images/mem-4.png" alt="Avatar" />
                                    <img src="/assets/images/mem-5.png" alt="Avatar" />
                                    <img src="/assets/images/mem-6.png" alt="Avatar" />
                                </div>
                                <div className="time">8.30 - 17.30 AM</div>
                                <h3 className="title">Networking Matters</h3>
                                <div className="twitter">@Ben Goertzel, @Johnny</div>
                                <div className="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="inner">
                                <div className="team">
                                    <img src="/assets/images/mem-7.png" alt="Avatar" />
                                    <img src="/assets/images/mem-8.png" alt="Avatar" />
                                    <img src="/assets/images/mem-9.png" alt="Avatar" />
                                </div>
                                <div className="time">02.00 - 03.30 PM</div>
                                <h3 className="title">Blockchain Effect</h3>
                                <div className="twitter">@Dominic Williams, @Jeff Booth</div>
                                <div className="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            </div>
                        </div>
                    </div>
                    <div className="button-wrap align-center mt60">
                        <Link href="/contact-01" className="button borderline" title="More Details">More Details</Link>
                    </div>
                </div>
            </section>

        </>
    )
}