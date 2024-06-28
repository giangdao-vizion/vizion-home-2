import Link from "next/link";
import { useState } from "react";

export default function Fintech_Section2() {
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
            <section className="section spdt">
                <div className="container">
                    <div className="heading">
                        <h2 className="heading-title size-l">We're changing the way people get paid. Your money, when you need it.</h2>
                    </div>
                    <div className="block-modern-tab">
                        <div className="row flex-align-c">
                            <div className="col-lg-6">
                                <div className="pdr50">
                                    <div className="heading align-left mb32">
                                        <div className="heading-sub color-navy">How it work</div>
                                        <h2 className="heading-title size-l">Get started in 3 simple steps</h2>
                                    </div>
                                    <div className="tab-navs block-accordion">
                                        <ul>
                                            <li>
                                                <a className={isActive.key == 1 ? "tab-nav accordion-item is-active" : "tab-nav accordion-item"} onClick={() => handleToggle(1)}>
                                                    <span className="title">1. Create an account</span>
                                                    <span className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing mattis ultrices pellentesque sagitti.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className={isActive.key == 2 ? "tab-nav accordion-item is-active" : "tab-nav accordion-item"} onClick={() => handleToggle(2)}>
                                                    <span className="title">2. Get your card</span>
                                                    <span className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing mattis ultrices pellentesque sagitti.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className={isActive.key == 3 ? "tab-nav accordion-item is-active" : "tab-nav accordion-item"} onClick={() => handleToggle(3)}>
                                                    <span className="title">3. Enjoy</span>
                                                    <span className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing mattis ultrices pellentesque sagitti.</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="pdl50 lg-mt32 wow animate__animated   animate__fadeInRight">
                                    <div id="c1" className="tab-content is-active">
                                        <div className="inner">
                                            <img src="/assets/images/hft-04.webp" alt="Image" />
                                        </div>
                                    </div>
                                    <div id="c2" className="tab-content">
                                        <div className="inner">
                                            <img src="/assets/images/hft-05.webp" alt="Image" />
                                        </div>
                                    </div>
                                    <div id="c3" className="tab-content">
                                        <div className="inner">
                                            <img src="/assets/images/hft-06.webp" alt="Image" />
                                        </div>
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