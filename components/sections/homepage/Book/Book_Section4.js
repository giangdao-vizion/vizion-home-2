import { useState } from "react";
export default function Book_Section4() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-left">
                        <div className="heading-sub color-navy">LOOK INTO DEEPER!</div>
                        <h2 className="heading-title size-xl">How many <br /> <span className="no-underline color-navy">chapters</span> inside <br /> the book?</h2>
                    </div>
                    <div className="block-tab layout-03 tab-wrap">
                        <div className="row flex-align-c">
                            <div className="col-lg-7">
                                <div className="tab-navs">
                                    <ul>
                                        <li onClick={() => handleOnClick(1)}>
                                            <a className={activeIndex === 1 ? "tab-nav is-active" : "tab-nav"}>
                                                <span>Chapter 1</span>
                                                <p>DONT MAKE ME THINK</p>
                                            </a>
                                        </li>
                                        <li onClick={() => handleOnClick(2)}>
                                            <a className={activeIndex === 2 ? "tab-nav is-active" : "tab-nav"}>
                                                <span>Chapter 2</span>
                                                <p>HOW WE RELLY USE THE WEB</p>
                                            </a>
                                        </li>
                                        <li onClick={() => handleOnClick(3)}>
                                            <a className={activeIndex === 3 ? "tab-nav is-active" : "tab-nav"}>
                                                <span>Chapter 3</span>
                                                <p>BILLBOARD DESIGN 101</p>
                                            </a>
                                        </li>
                                        <li onClick={() => handleOnClick(4)}>
                                            <a className={activeIndex === 4 ? "tab-nav is-active" : "tab-nav"}>
                                                <span>Chapter 4</span>
                                                <p>ANIMAL, VEGETABLE OR  MINERAL</p>
                                            </a>
                                        </li>
                                        <li onClick={() => handleOnClick(5)}>
                                            <a className={activeIndex === 5 ? "tab-nav is-active" : "tab-nav"}>
                                                <span>Chapter 5</span>
                                                <p>OMIT NEEDLESS WORD</p>
                                            </a>
                                        </li>
                                        <li onClick={() => handleOnClick(6)}>
                                            <a className={activeIndex === 6 ? "tab-nav is-active" : "tab-nav"}>
                                                <span>Chapter 6</span>
                                                <p>STREET SIGNS AND BREADCRUMS</p>
                                            </a>
                                        </li>
                                        <li onClick={() => handleOnClick(7)}>
                                            <a className={activeIndex === 7 ? "tab-nav is-active" : "tab-nav"}>
                                                <span>Chapter 7</span>
                                                <p>THE FIRST STEPS IN RECOVERY IS ADMITTING THAT THE HOME PAGE IS BEYOND YOUR CONTROL</p>
                                            </a>
                                        </li>
                                        <li onClick={() => handleOnClick(8)}>
                                            <a className={activeIndex === 8 ? "tab-nav is-active" : "tab-nav"}>
                                                <span>Chapter 8</span>
                                                <p>“THE FARMER AND THE COWMAN SHOULD BE FRIENDS”</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div id="c1" className={activeIndex === 1 ? "tab-content is-active" : "tab-content"}>
                                    <div className="inner">
                                        <h4 className="title">Dont make me think</h4>
                                        <p>Vigorous writing is concise. A sentence should contain nounnecessary words, a paragraph no unnecessary sentences,for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts.
                                            When I look at most Web pages, I’m struck by the fact that most of the words Isee are just taking up space, because no one is ever going to read them. And justby being there, all the extra words suggest that...</p>
                                    </div>
                                </div>
                                <div id="c2" className={activeIndex === 2 ? "tab-content is-active" : "tab-content"}>
                                    <div className="inner">
                                        <h4 className="title">How we relly use the web</h4>
                                        <p>Vigorous writing is concise. A sentence should contain nounnecessary words, a paragraph no unnecessary sentences,for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts.
                                            When I look at most Web pages, I’m struck by the fact that most of the words Isee are just taking up space, because no one is ever going to read them. And justby being there, all the extra words suggest that...</p>
                                    </div>
                                </div>
                                <div id="c3" className={activeIndex === 3 ? "tab-content is-active" : "tab-content"}>
                                    <div className="inner">
                                        <h4 className="title">Billboard design 101</h4>
                                        <p>Vigorous writing is concise. A sentence should contain nounnecessary words, a paragraph no unnecessary sentences,for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts.
                                            When I look at most Web pages, I’m struck by the fact that most of the words Isee are just taking up space, because no one is ever going to read them. And justby being there, all the extra words suggest that...</p>
                                    </div>
                                </div>
                                <div id="c4" className={activeIndex === 4 ? "tab-content is-active" : "tab-content"}>
                                    <div className="inner">
                                        <h4 className="title">Animal, vegetable or mineral</h4>
                                        <p>Vigorous writing is concise. A sentence should contain nounnecessary words, a paragraph no unnecessary sentences,for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts.
                                            When I look at most Web pages, I’m struck by the fact that most of the words Isee are just taking up space, because no one is ever going to read them. And justby being there, all the extra words suggest that...</p>
                                    </div>
                                </div>
                                <div id="c5" className={activeIndex === 5 ? "tab-content is-active" : "tab-content"}>
                                    <div className="inner">
                                        <h4 className="title">Omit needless word</h4>
                                        <p>Vigorous writing is concise. A sentence should contain nounnecessary words, a paragraph no unnecessary sentences,for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts.
                                            When I look at most Web pages, I’m struck by the fact that most of the words Isee are just taking up space, because no one is ever going to read them. And justby being there, all the extra words suggest that...</p>
                                    </div>
                                </div>
                                <div id="c6" className={activeIndex === 6 ? "tab-content is-active" : "tab-content"}>
                                    <div className="inner">
                                        <h4 className="title">Street signs and breadcrums</h4>
                                        <p>Vigorous writing is concise. A sentence should contain nounnecessary words, a paragraph no unnecessary sentences,for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts.
                                            When I look at most Web pages, I’m struck by the fact that most of the words Isee are just taking up space, because no one is ever going to read them. And justby being there, all the extra words suggest that...</p>
                                    </div>
                                </div>
                                <div id="c7" className={activeIndex === 7 ? "tab-content is-active" : "tab-content"}>
                                    <div className="inner">
                                        <h4 className="title">The first steps in recovery is admitting that the home page is beyond your control</h4>
                                        <p>Vigorous writing is concise. A sentence should contain nounnecessary words, a paragraph no unnecessary sentences,for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts.
                                            When I look at most Web pages, I’m struck by the fact that most of the words Isee are just taking up space, because no one is ever going to read them. And justby being there, all the extra words suggest that...</p>
                                    </div>
                                </div>
                                <div id="c8" className={activeIndex === 8 ? "tab-content is-active" : "tab-content"}>
                                    <div className="inner">
                                        <h4 className="title">"The farmer and the cowman should be friends"</h4>
                                        <p>Vigorous writing is concise. A sentence should contain nounnecessary words, a paragraph no unnecessary sentences,for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts.
                                            When I look at most Web pages, I’m struck by the fact that most of the words Isee are just taking up space, because no one is ever going to read them. And justby being there, all the extra words suggest that...</p>
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