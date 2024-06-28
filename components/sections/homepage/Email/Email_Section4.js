import { useState } from "react";
import Link from "next/link";
export default function Email_Section4() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>

            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Your benefits</h2>
                    </div>
                    <div className="block-tab layout-01 tab-wrap">
                        <div className="tab-navs">
                            <ul>
                                <li onClick={() => handleOnClick(1)}><a className={activeIndex === 1 ? "tab-nav is-active" : "tab-nav"}>Rise conversion rate</a></li>
                                <li onClick={() => handleOnClick(2)}><a className={activeIndex === 2 ? "tab-nav is-active" : "tab-nav"}>Save labour costs</a></li>
                                <li onClick={() => handleOnClick(3)}><a className={activeIndex === 3 ? "tab-nav is-active" : "tab-nav"}>Get customer insight</a></li>
                            </ul>
                        </div>
                        <div id="rise" className={activeIndex === 1 ? "tab-content is-active" : "tab-content"}>
                            <div className="row flex-align-c">
                                <div className="col-lg-6">
                                    <div className="pdr50">
                                        <h5>Increased conversion rate means increased income</h5>
                                        <p>Lörem ipsum bolundare exor. Nerade vipysa, inte pose. Åpybangen ivase Facebookfest. Benir spehet diabel.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="pdl50 lg-mt32">
                                        <img src="/assets/images/he-04.jpg" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="save" className={activeIndex === 2 ? "tab-content is-active" : "tab-content"}>
                            <div className="row flex-align-c">
                                <div className="col-lg-6">
                                    <div className="pdr50">
                                        <h5>Get more customer insight</h5>
                                        <p>Lörem ipsum bolundare exor. Nerade vipysa, inte pose. Åpybangen ivase Facebookfest. Benir spehet diabel.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="pdl50 lg-mt32">
                                        <img src="/assets/images/he-05.jpg" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="get" className={activeIndex === 3 ? "tab-content is-active" : "tab-content"}>
                            <div className="row flex-align-c">
                                <div className="col-lg-6">
                                    <div className="pdr50">
                                        <h5>Save labour costs</h5>
                                        <p>Lörem ipsum bolundare exor. Nerade vipysa, inte pose. Åpybangen ivase Facebookfest. Benir spehet diabel.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="pdl50 lg-mt32">
                                        <img src="/assets/images/he-06.jpg" alt="Image" />
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