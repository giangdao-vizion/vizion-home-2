import Link from "next/link";
import { useState } from 'react';
export default function Ecommerce_Platform_Section6() {

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
            <section className="section background-contain-center-left spdtb" style={{ backgroundImage: 'url(/assets/images/hep-16.svg)' }}>
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="images layout-02">
                                <div className="inner">
                                    <img src="/assets/images/hep-20.jpg" alt="Image" className="img01 wow animate__animated   animate__fadeInRight" />
                                    <img src="/assets/images/hep-10.png" alt="Image" className="img28 wow animate__animated   animate__fadeInUp" />
                                    <img src="/assets/images/hep-21.png" alt="Image" className="img29 wow animate__animated   animate__fadeInLeft" />
                                    <img src="/assets/images/hep-22.png" alt="Image" className="img30 wow animate__animated   animate__fadeInLeft" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl60 lg-mt32">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">Sell anywhere</div>
                                    <h2 className="heading-title">With Sala you can start selling on all channels</h2>
                                </div>
                                <div className="block-accordion enable active-first layout-05">
                                    <div className={isActive.key == 1 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(1)}>
                                        <h4 className="title"><i className="las la-shopping-bag" />Do I have to pay for each agent account?</h4>
                                        <div className="content" style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(2)}>
                                        <h4 className="title"><i className="lab la-instagram" />Are there any additional costs?</h4>
                                        <div className="content" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(3)}>
                                        <h4 className="title"><i className="las la-tags" />Do you provide customer service agents?</h4>
                                        <div className="content" style={isActive.key == 3 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Start 14 days Free">Start 14 days Free</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}