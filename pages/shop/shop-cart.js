import QuantityInput from "@/components/elements/QuantityInput";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home1() {
    return (
        <>
            <Layout
                pageTitle="Shop Cart"
                pageTitleDesc="2 items on your cart"
            >
                <div className="container">
                    <form action="#" className="cart-form">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th className="product-remove" />
                                    <th className="product-thumbnail" />
                                    <th className="product-name">Product</th>
                                    <th className="product-price">Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="product-remove" data-title>
                                        <Link href="/" title="Remove"><i className="las la-times" /></Link>
                                    </td>
                                    <td className="product-thumbnail" data-title>
                                        <Link href="/" title="Gosta Upholstery Chair"><img src="/assets/images/product-01.png" alt="Gosta Upholstery Chair" /></Link>
                                    </td>
                                    <td className="product-name" data-title="Product">
                                        <h4><Link href="/" title="Gosta Upholstery Chair">Gosta Upholstery Chair</Link></h4>
                                    </td>
                                    <td className="product-price" data-title="Price">$34.00</td>
                                    <td className="product-quantity" data-title="Quantity">
                                        <QuantityInput />
                                    </td>
                                    <td className="product-subtotal" data-title="Subtotal">$34.00</td>
                                </tr>
                                <tr>
                                    <td className="product-remove" data-title>
                                        <Link href="/" title="Remove"><i className="las la-times" /></Link>
                                    </td>
                                    <td className="product-thumbnail" data-title>
                                        <Link href="/" title="Gosta Upholstery Chair"><img src="/assets/images/product-02.png" alt="Gosta Upholstery Chair" /></Link>
                                    </td>
                                    <td className="product-name" data-title="Product">
                                        <h4><Link href="/" title="Gosta Upholstery Chair">Gosta Upholstery Chair</Link></h4>
                                    </td>
                                    <td className="product-price" data-title="Price">$24.00</td>
                                    <td className="product-quantity" data-title="Quantity">
                                        <QuantityInput />
                                    </td>
                                    <td className="product-subtotal" data-title="Subtotal">$24.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="field-group flex flex-align-c flex-content-sb">
                            <div className="field-input">
                                <input type="text" placeholder="Coupon Code" name="coupon" />
                                <input type="submit" defaultValue="Apply Coupon" name="apply_coupon" />
                            </div>
                            <div className="field-input">
                                <input type="submit" defaultValue="Update Cart" name="update_cart" />
                            </div>
                        </div>
                        <div className="cart-totals">
                            <div className="cart-total">
                                <h2 className="title">Cart total</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="table-title">Subtotal</td>
                                            <td className="table-price">$58.00</td>
                                        </tr>
                                        <tr>
                                            <td className="table-title">Shipping</td>
                                            <td className="table-price">Free shipping</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className="table-title">Total</td>
                                            <td className="table-price">$58.00</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <Link href="/contact-01" className="button fullfield">Proceed to checkout</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>

        </>
    )
}
