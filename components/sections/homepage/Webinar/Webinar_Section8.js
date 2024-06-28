import Link from "next/link";

export default function Webniar_Section8() {
    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Frequently Asked Question</h2>
                    </div>
                    <div className="block-list layout-07">
                        <div className="inner">
                            <div className="item">
                                <div className="customer">
                                    <img src="/assets/images/post-author-01.jpg" alt="Member" />
                                    <span className="name">Anna</span>
                                </div>
                                <div className="content">How blockchain affects banks?</div>
                            </div>
                            <div className="item">
                                <div className="content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div>
                                <div className="customer">
                                    <img src="/assets/images/post-author-02.jpg" alt="Member" />
                                    <span className="name">Admin</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="customer">
                                    <img src="/assets/images/post-author-03.jpg" alt="Member" />
                                    <span className="name">Kate</span>
                                </div>
                                <div className="content">What is the difference between Web 2.0 and Web 3.0?</div>
                            </div>
                            <div className="item">
                                <div className="content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div>
                                <div className="customer">
                                    <img src="/assets/images/post-author-02.jpg" alt="Member" />
                                    <span className="name">Admin</span>
                                </div>
                            </div>
                        </div>
                        <div className="button-wrap align-center">
                            <Link href="/contact-01" className="button borderline" title="Load More">Load More</Link>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}