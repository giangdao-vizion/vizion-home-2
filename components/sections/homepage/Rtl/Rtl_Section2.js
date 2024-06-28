import Link from "next/link";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Rtl_Section2() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">How Does It work?</h2>
                        <div className="heading-desc">Create better products by collecting feedback. It's that simple.</div>
                    </div>
                    <div className="row flex-align-c">
                        <div className="col-lg-7">
                            <div className="block-video">
                                <div className="popup-wrapper ratio br20" style={{ aspectRatio: 3/2  }}>
                                    <img src="/assets/images/our-team.jpeg" alt="Popup Video" />
                                    <a onClick={() => setOpen(true)} className="icon-popup size-m"><i className="las la-play" /></a>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="pdl60 lg-mt32">
                                <div className="block-list layout-03">
                                    <ul>
                                        <li>
                                            <span className="number background-navy">1</span>
                                            <h4 className="title size-l">Create Plan</h4>
                                            <p className="desc">Lorem Ipsum is simply dummy text of the printing</p>
                                        </li>
                                        <li>
                                            <span className="number background-navy">2</span>
                                            <h4 className="title size-l">Apply</h4>
                                            <p className="desc">Lorem Ipsum is simply dummy text of the printing</p>
                                        </li>
                                        <li>
                                            <span className="number background-navy">3</span>
                                            <h4 className="title size-l">Get Covered</h4>
                                            <p className="desc">Lorem Ipsum is simply dummy text of the printing</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}