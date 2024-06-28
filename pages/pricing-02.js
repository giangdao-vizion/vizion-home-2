import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function PricingTwo() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => { setToggled(!isToggled) };


    return (
        <>
            <Layout
                pageTitle="Simple Pricing"
                pageTitleDesc="…to help you grow your business, not your bill."
            >
                <div className="section-pricing background-grey spdtb">
                    <div className="container">
                        <div className="toggle" onClick={toggleTrueFalse}>
                            <span className="text">Monthly</span>
                            <span className={`switch ${isToggled ? ' is-active' : ''}`} />
                            <span className="text">Anually</span>
                            <span className="discount">
                                <span className="discount-text">Save 20%</span>
                            </span>
                        </div>
                        <div className="pricing-table layout-02 is-active">
                            <table className="table-responsive">
                                <thead>
                                    <tr>
                                        <th />
                                        <th>
                                            <div className="name">Free</div>
                                            <div className="price"><div className="number">$0</div> / month</div>
                                            <div className="desc"><p>Perfect for startups</p></div>
                                        </th>
                                        <th className="popular">
                                            <div className="name">Basic</div>
                                            <div className="price"><div className="number">${isToggled ? " 59" : " 29"}</div> / month</div>
                                            <div className="desc"><p>Perfect for startups</p></div>
                                            <div className="badge badge-popular">Popular</div>
                                        </th>
                                        <th>
                                            <div className="name">Pro</div>
                                            <div className="price"><div className="number">${isToggled ? " 99" : " 59"}</div> / month</div>
                                            <div className="desc"><p>Perfect for startups</p></div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-title="Features">Unlimited users</td>
                                        <td data-title="Free" className="icon active"><i className="las la-check" /></td>
                                        <td data-title="Basic" className="icon active popular"><i className="las la-check" /></td>
                                        <td data-title="Pro" className="icon active"><i className="las la-check" /></td>
                                    </tr>
                                    <tr>
                                        <td data-title="Features">Chat support</td>
                                        <td data-title="Free" className="icon active"><i className="las la-check" /></td>
                                        <td data-title="Basic" className="icon active popular"><i className="las la-check" /></td>
                                        <td data-title="Pro" className="icon active"><i className="las la-check" /></td>
                                    </tr>
                                    <tr>
                                        <td data-title="Features">Unlimited users</td>
                                        <td data-title="Free" className="icon"><i className="las la-times" /></td>
                                        <td data-title="Basic" className="icon active popular"><i className="las la-check" /></td>
                                        <td data-title="Pro" className="icon active"><i className="las la-check" /></td>
                                    </tr>
                                    <tr>
                                        <td data-title="Features">Account Manager</td>
                                        <td data-title="Free">1 users</td>
                                        <td data-title="Basic" className="popular">5 users</td>
                                        <td data-title="Pro">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Features">Number of users</td>
                                        <td data-title="Free" className="icon"><i className="las la-times" /></td>
                                        <td data-title="Basic" className="icon popular"><i className="las la-times" /></td>
                                        <td data-title="Pro" className="icon active"><i className="las la-check" /></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td />
                                        <td data-title="Free"><Link href="/contact-01" className="button fullfield-dark" title="Get Started">Get Started</Link></td>
                                        <td data-title="Basic" className="popular"><Link href="/contact-01" className="button fullfield" title="Get Started">Get Started</Link></td>
                                        <td data-title="Pro"><Link href="/contact-01" className="button fullfield-dark" title="Get Started">Get Started</Link></td>
                                    </tr>
                                    <tr className="note">
                                        <td />
                                        <td data-title="Free">No credit card required</td>
                                        <td data-title="Basic" className="popular">No credit card required</td>
                                        <td data-title="Pro">No credit card required</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="clients align-center mt60">
                            <span className="title">Trusted by 1000+ brands worldwide</span>
                            <ul className="content">
                                <li><img src="/assets/images/client-01.webp" alt="Client" /></li>
                                <li><img src="/assets/images/client-02.webp" alt="Client" /></li>
                                <li><img src="/assets/images/client-03.webp" alt="Client" /></li>
                                <li><img src="/assets/images/client-04.webp" alt="Client" /></li>
                                <li><img src="/assets/images/client-05.png" alt="Client" /></li>
                                <li><img src="/assets/images/client-06.webp" alt="Client" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section-table spdt">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title">Full Plan Comparison</h2>
                            <p className="heading-desc">Easy to switch, upgrade, or cancel at any time.</p>
                        </div>
                        <table className="full-plan table-responsive">
                            <thead>
                                <tr>
                                    <th>Features</th>
                                    <th>
                                        <div className="name">Free</div>
                                        <div className="price">$0/month</div>
                                    </th>
                                    <th>
                                        <div className="name">Basic</div>
                                        <div className="price">$9/month</div>
                                    </th>
                                    <th>
                                        <div className="name">Pro</div>
                                        <div className="price">${isToggled ? " 59" : " 29"}/month</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={4} className="colspan-full">Pricing</td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Real-time team reports</td>
                                    <td className="is-active" data-title="Free"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Easy-to-share results</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="colspan-full">Features</td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Real-time team reports</td>
                                    <td className="is-active" data-title="Free"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Easy-to-share results</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Team goal setting</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Manager learning center</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td data-title="Basic"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Industry benchmarking</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td data-title="Basic"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="colspan-full">Security</td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Real-time team reports</td>
                                    <td className="is-active" data-title="Free"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Easy-to-share results</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Team goal setting</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="section spdt">
                    <div className="container">
                        <div className="heading align-center mb60">
                            <h2 className="heading-title">Pricing FAQs</h2>
                            <p className="heading-desc">Haven’t got your answer? <Link href="/" title="Contact our support now">Contact our support now</Link></p>
                        </div>
                        <div className="block-accordion layout-01">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="accordion-item">
                                        <h4 className="title"><i className="las la-question-circle" />Do I have to pay for each agent account?</h4>
                                        <div className="content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-item">
                                        <h4 className="title"><i className="las la-question-circle" />Are there any additional costs?</h4>
                                        <div className="content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-item">
                                        <h4 className="title"><i className="las la-question-circle" />Do you provide customer service agents?</h4>
                                        <div className="content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-item">
                                        <h4 className="title"><i className="las la-question-circle" />Are there any discounts avalaible?</h4>
                                        <div className="content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section spdt align-center">
                    <div className="block-trial layout-01">
                        <div className="container">
                            <img className="image-top" src="/assets/images/macaroni-vertical.webp" alt="Trial" />
                            <h2 className="title">Start your <span>14-days</span> Free trial</h2>
                            <div className="desc"><p>Bring your team together. No contracts, no commitments.</p></div>
                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Try It Free Now">Try It Free Now<i className="las la-long-arrow-alt-right" /></Link></div>
                        </div>
                    </div>
                </section>
            </Layout>


        </>
    )
}
