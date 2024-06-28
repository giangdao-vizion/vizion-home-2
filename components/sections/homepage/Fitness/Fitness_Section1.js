import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Fitness_Section1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <div className="heading-sub">Fitness Application</div>
                                <h2 className="heading-title size-xl"><span className="color-navy no-underline">Simple</span> Way to Get Fit at Home</h2>
                                <div className="heading-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                            </div>
                            <div className="apps m220">
                                <img src="/assets/images/app-store.png" alt="App Store" />
                                <img src="/assets/images/google-play.png" alt="Google Play" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images layout-02 popup-wrapper">
                                <div className="inner wow animate__animated animate__fadeInDown">
                                    <img src="/assets/images/hf-01.png" alt="Image" />
                                    <a onClick={() => setOpen(true)} className="icon-popup"><img className="img25" src="/assets/images/hf-02.png" alt="Image" /></a>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}