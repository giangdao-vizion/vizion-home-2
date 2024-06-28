import { useState } from 'react';

export default function Vr_Section8() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <img className="wow animate__animated animate__fadeInLeft" src="/assets/images/hvr-09.png" alt="Image" />
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl100 lg-mt32">
                                <div className="heading align-left mb32">
                                    <h2 className="heading-title size-l">Frequently asked questions</h2>
                                </div>
                                <div className="block-accordion enable layout-06">
                                    <div className={isActive.key == 1 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(1)}>
                                        <h4 className="title">Does the Oculus Go have bluetooth?</h4>
                                        <div style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(2)}>
                                        <h4 className="title">Can I download movie using internal drive?</h4>
                                        <div style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(3)}>
                                        <h4 className="title">Can you play games like beat sabre on it?</h4>
                                        <div style={isActive.key == 3 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(4)}>
                                        <h4 className="title">Does this come with a charger?</h4>
                                        <div style={isActive.key == 4 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}