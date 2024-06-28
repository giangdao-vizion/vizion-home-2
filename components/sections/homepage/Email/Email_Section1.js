import Link from "next/link";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Email_Section1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section background-grey opt120 spdb overflow-hidden">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <div className="heading-sub">email Marketing Solution</div>
                                <h2 className="heading-title size-xxl">Reach a global audience now</h2>
                                <div className="heading-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                            </div>
                            <div className="button-wrap popup-wrapper mt32">
                                <Link href="/contact-01" className="button fullfield xs-mb10" title="Try it free">Try it free</Link>
                                <Link href="/" className="button underline icon-popup" onClick={() => setOpen(true)}><i className="las la-play-circle" />Watch the Video</Link>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                        </div>
                        <div className="col-lg-6">
                            <div className="images lg-mt32 layout-03">
                                <div className="inner">
                                    <img className="img01" src="/assets/images/he-02.png" alt="Image" />
                                    <img className="img20" src="/assets/images/he-01.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}