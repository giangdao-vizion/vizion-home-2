import Link from "next/link";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Hr_Management_Section1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section background-grey opt120 spdb overflow-hidden">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <div className="heading-sub">OPERATIONS PLATFORM</div>
                                <h2 className="heading-title size-xxl">HR Software <br /> to <span>Simplify</span></h2>
                                <div className="heading-desc">Be progressive. Make impact. Get noticed.</div>
                            </div>
                            <div className="button-wrap popup-wrapper mt32">
                                <Link href="/contact-01" className="button fullfield xs-mb10" title="Get Started">Get Started</Link>
                                <Link href="/" className="button underline icon-popup" onClick={() => setOpen(true)}><i className="las la-play-circle" />Watch the Video</Link>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                        </div>
                        <div className="col-lg-6">
                            <div className="images mt32 layout-04">
                                <div className="inner">
                                    <img className="img01" src="/assets/images/hr-03.png" alt="Image" />
                                    <img className="img02 wow animate__animated   animate__fadeInDown" src="/assets/images/hr-04.png" alt="Image" />
                                    <img className="img03 wow animate__animated   animate__fadeInLeft" src="/assets/images/hr-05.png" alt="Image" />
                                    <img className="img04 wow animate__animated   animate__fadeInRight" src="/assets/images/hr-01.png" alt="Image" />
                                    <img className="img05 wow animate__animated   animate__fadeInLeft" src="/assets/images/hr-02.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}