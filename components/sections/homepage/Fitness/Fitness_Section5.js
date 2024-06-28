import { useState } from "react";
export default function Fitness_Section5() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <div className="section spdt">
                <div className="container">
                    <div className="block-tab tab-wrap layout-02">
                        <div className="row flex-align-c">
                            <div className="col-xl-3 col-lg-6">
                                <div className="tab-navs pdr30">
                                    <ul>
                                        <li onClick={() => handleOnClick(1)}><a className={activeIndex === 1 ? "tab-nav is-active" : "tab-nav"}><i className="las la-hands-helping" />Custom Course</a></li>
                                        <li onClick={() => handleOnClick(2)}><a className={activeIndex === 2 ? "tab-nav is-active" : "tab-nav"}><i className="las la-cog" />Settings</a></li>
                                        <li onClick={() => handleOnClick(3)}><a className={activeIndex === 3 ? "tab-nav is-active" : "tab-nav"}><i className="las la-life-ring" />Helps</a></li>
                                        <li onClick={() => handleOnClick(4)}><a className={activeIndex === 4 ? "tab-nav is-active" : "tab-nav"}><i className="las la-user-circle" />Profile</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="images layout-12 pt30 pb30">
                                    <div className="inner">
                                        <img className="img01" src="/assets/images/hf-10.png" alt="Image" />
                                        <img className="img02" src="/assets/images/hf-09.png" alt="Image" />
                                        <img className="img04 xs-hidden" src="/assets/images/hf-11.png" alt="Image" />

                                        <div id="custom-course" className={activeIndex === 1 ? "tab-content is-active" : "tab-content"}>
                                            <img className="img03" src="/assets/images/hf-05.png" alt="Image" />
                                        </div>
                                        <div id="settings" className={activeIndex === 2 ? "tab-content is-active" : "tab-content"}>
                                            <img className="img03" src="/assets/images/hf-06.png" alt="Image" />
                                        </div>
                                        <div id="helps" className={activeIndex === 3 ? "tab-content is-active" : "tab-content"}>
                                            <img className="img03" src="/assets/images/hf-07.png" alt="Image" />
                                        </div>
                                        <div id="profile" className={activeIndex === 4 ? "tab-content is-active" : "tab-content"}>
                                            <img className="img03" src="/assets/images/hf-08.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-12">
                                <div className="heading align-left mb24">
                                    <h2 className="heading-title size-l">Discover now</h2>
                                    <div className="heading-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <div className="apps m220">
                                    <img src="/assets/images/app-store.png" alt="App Store" />
                                    <img src="/assets/images/google-play.png" alt="Google Play" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}