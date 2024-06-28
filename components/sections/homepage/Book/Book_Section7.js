
import { useState } from 'react';
export default function Book_Section7() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
                    <div className="heading align-left">
                        <div className="heading-sub color-navy">Questions and Answers</div>
                        <h2 className="heading-title size-xl">Frequently asked <br /> <span className="no-underline color-navy">questions</span> by <br /> customers</h2>
                    </div>
                    <div className="block-accordion enable layout-04">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={isActive.key == 1 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(1)}>
                                    <div className="number">01</div>
                                    <div className="inner">
                                        <h4 className="title">What is the Refund Policy?</h4>
                                        <div className="content" style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 2 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(2)}>
                                    <div className="number">02</div>
                                    <div className="inner">
                                        <h4 className="title">What is the Shipping Method?</h4>
                                        <div className="content" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 3 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(3)}>
                                    <div className="number">03</div>
                                    <div className="inner">
                                        <h4 className="title">Can I buy at local store? </h4>
                                        <div className="content" style={isActive.key == 3 ? { display: 'block' } : { display: 'none' }}><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 4 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(4)}>
                                    <div className="number">04</div>
                                    <div className="inner">
                                        <h4 className="title">How many pages does the book has? </h4>
                                        <div className="content" style={isActive.key == 4 ? { display: 'block' } : { display: 'none' }}><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p></div>
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