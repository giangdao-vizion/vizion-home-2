import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home1() {
    return (
        <>
            <Layout
                pageTitle="Shop Checkout"
                pageTitleDesc="2 items on your cart"
            >
                <div className="container">
                    <div className="notices">
                        <div className="notice">
                            <i className="las la-sync-alt" />
                            <span>Returning customer?</span>
                            <Link href="/" title="Click here to login">Click here to login</Link>
                        </div>
                        <div className="notice">
                            <i className="las la-gift" />
                            <span>Have a coupon?</span>
                            <Link href="/" className="show-form-coupon" title="Click here to enter your code">Click here to enter your code</Link>
                        </div>
                        <form action="#" className="checkout-coupon">
                            <p>If you have a coupon code, please apply it below.</p>
                            <div className="field-input">
                                <input type="text" name="coupon" placeholder="Coupon code" />
                                <input type="submit" name="submit" defaultValue="Apply coupon" />
                            </div>
                        </form>
                    </div>
                    <form action="#" className="checkout">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="billing-details">
                                    <h3 className="title">Billing Details</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="first-name">First name</label>
                                                <input type="text" name="first_name" id="first-name" placeholder="First name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="last-name">Last name</label>
                                                <input type="text" name="last_name" id="last-name" placeholder="Last name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="address">Street Address</label>
                                                <input type="text" name="address" id="address" placeholder="Street Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="country">Country / Region</label>
                                                <select name="country" id="country">
                                                    <option value="united_states">United States</option>
                                                    <option value="united_kingdom">United Kingdom</option>
                                                    <option value="france">France</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="town">Town / City</label>
                                                <select name="town" id="town">
                                                    <option value="new_york">New York</option>
                                                    <option value="chicago">Chicago</option>
                                                    <option value="boston">Boston</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="zip">ZIP</label>
                                                <input type="text" name="zip" id="zip" placeholder="Ex: 10000" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" id="email" placeholder="Your email address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="phone">Phone</label>
                                                <input type="tel" name="phone" id="phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input field-checkbox">
                                                <input type="checkbox" name="create_account" id="create-account" defaultValue={0} />
                                                <label htmlFor="create-account">Create an account?</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment">
                                    <h3 className="title">Payment</h3>
                                    <div className="payment-item">
                                        <div className="field-radio">
                                            <input type="radio" id="check-payment" name="payment" defaultValue={0} />
                                            <label htmlFor="check-payment">Check payments</label>
                                        </div>
                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                    </div>
                                    <div className="payment-item">
                                        <div className="field-radio">
                                            <input type="radio" id="cash" name="payment" defaultValue={0} />
                                            <label htmlFor="cash">Cash on delivery</label>
                                        </div>
                                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href="/" title="privacy policy">privacy policy</Link>.</p>
                                    </div>
                                    <div className="field-submit">
                                        <input type="submit" name="submit" defaultValue="Place Order" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="order">
                                    <h3 className="title">Your Order</h3>
                                    <div className="content">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="table-title">Product order</th>
                                                    <th className="table-price">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="table-title">Fair Trade Ghana  × 1</td>
                                                    <td className="table-price">$58.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-title">KingSo Round Table  × 1</td>
                                                    <td className="table-price">$34.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-title">Subtotal</td>
                                                    <td className="table-price">$92.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-title">Shipping</td>
                                                    <td className="table-price">Free shipping</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td className="table-title">Total</td>
                                                    <td className="table-price">$92.00</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>

        </>
    )
}
