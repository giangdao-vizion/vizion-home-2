import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="footer-item footer-about">
                                        <div className="logo">
                                            <Link href="/">
                                                <img
                                                    src="/assets/images/vizion/logos/vz-logo-white.png"
                                                    alt="logo-vizion"
                                                    style={{
                                                        width: 100,
                                                    }}
                                                />
                                            </Link>
                                        </div>
                                        <p>
                                            19A Cộng Hòa, Phường 12, Tân Bình,
                                            Hồ Chí Minh, Việt Nam, 700000
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="footer-item footer-menu">
                                        <h6>Company</h6>
                                        <ul>
                                            <li>
                                                <Link
                                                    href="/about-company"
                                                    title="About us"
                                                >
                                                    About us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/blog-simple-grid"
                                                    title="Blog"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/careers"
                                                    title="Careers"
                                                >
                                                    Careers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/contact-01"
                                                    title="Contact"
                                                >
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="footer-item footer-menu">
                                        <h6>Social Media</h6>
                                        <ul>
                                            <li>
                                                <Link
                                                    href="https://www.facebook.com"
                                                    title="Facebook"
                                                >
                                                    Facebook
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="https://www.twitter.com"
                                                    title="Twitter"
                                                >
                                                    Twitter
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="https://www.instagram.com"
                                                    title="Instagram"
                                                >
                                                    Instagram
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="https://www.linkedin.com"
                                                    title="Linkedin"
                                                >
                                                    Linkedin
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer-item footer-newsletter">
                                        <h6>Thành tựu của chúng tôi</h6>
                                        {/* <p>
                                            Subcribe our newsletter and stay up
                                            to date about the company
                                        </p> */}
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img
                                                    src="/assets/images/vizion/achievement/saokhue-v4.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <img
                                                    src="/assets/images/vizion/achievement/VZ-TOP20_StartupViet.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <img
                                                    src="/assets/images/vizion/achievement/VZ-TOP20_TECHFEST.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner flex flex-content-sb flex-align-c">
                            <div className="copyright">
                                © 2023 Vizion. All rights reserved
                            </div>
                            <div className="menu">
                                {/* <ul>
                                    <li>
                                        <Link href="/privacy-policy" title="Terms">
                                            Terms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy" title="Privacy Policy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
