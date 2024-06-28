import Link from "next/link";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Webniar_Section3() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>

            <div className="section spdb">
                <div className="container">
                    <div className="block-grid layout-01">
                        <div className="item">
                            <img src="/assets/images/hw-03.png" alt="Image" />
                        </div>
                        <div className="item item-text">
                            <h4 className="title">About Us</h4>
                            <div className="desc">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium.</div>
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button text color-navy" title="Learn more">Learn more<i className="las la-long-arrow-alt-right" /></Link>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/assets/images/hw-04.png" alt="Image" />
                        </div>
                        <div className="item item-auto image-left-bottom">
                            <img src="/assets/images/hw-05.png" alt="Image" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/hw-06.jpg" alt="Image" />
                        </div>
                        <div className="item popup-wrapper">
                            <img src="/assets/images/hw-07.jpg" alt="Image" />
                            <a onClick={() => setOpen(true)} className="icon-popup"><img src="/assets/images/hw-08.png" alt="Icon" /></a>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                    </div>
                </div>
            </div>

        </>
    )
}