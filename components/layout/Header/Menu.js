import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="main-menu">
        <div className="menu-action">
          <span className="item menu-back">
            <i className="las la-arrow-left" />
          </span>
          <span className="item menu-close">
            <i className="las la-times" />
          </span>
        </div>

        <ul>
          <li className="is-mega-menu">
            <Link href="/">
              Lĩnh Vực Ứng Dụng <span className="toggle-sub-menu"></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex">
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link href="/home/home-app-showcase">
                          Sản Xuất & Nhà Máy
                        </Link>
                      </li>
                      <li>
                        <Link href="/home/home-shopify-app">Bất Động Sản</Link>
                      </li>

                      <li>
                        <Link href="/home/home-music-app">Showroom Xe Hơi</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link href="/home/home-hr-maganement">
                          Bán Lẻ & Thương Mại
                        </Link>
                      </li>
                      <li>
                        <Link href="/home/home-saas">Nội Thất Và Đồ Gỗ</Link>
                      </li>
                      <li>
                        <Link href="/home/home-nft">Du Lịch Và Khám Phá</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link href="/home/home-saas">Khách Sạn & Resort</Link>
                      </li>
                      <li>
                        <Link href="/home/home-nft">Cơ Sở Giáo Dục</Link>
                      </li>
                      <li>
                        <Link href="/home/home-saas">Nhà Hàng & Quán Ăn</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link href="/home/home-nft">Giải Trí & Văn Hóa</Link>
                      </li>
                      <li>
                        <Link href="/home/home-saas">Gym & Spa</Link>
                      </li>
                      <li>
                        <Link href="/home/home-nft">
                          Bệnh Viện & TTCS Sức Khỏe
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-mega-menu">
            <Link href="/">
              Giải Pháp <span className="toggle-sub-menu"></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex">
                  <div className="mega-menu-item">
                    <h6 className="mega-head">About</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/about-company">About Company</Link>
                      </li>
                      <li>
                        <Link href="/about-me">About Me</Link>
                      </li>
                      <li>
                        <Link href="/our-team">About Teams</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-mega-menu">
            <Link href="/">Story</Link>
            {/* <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex">
                  <div className="mega-menu-item">
                    <h6 className="mega-head">About</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/about-studio">About Studio</Link>
                      </li>
                      <li>
                        <Link href="/about-company">About Company</Link>
                      </li>
                      <li>
                        <Link href="/about-me">About Me</Link>
                      </li>
                      <li>
                        <Link href="/our-team">About Teams</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Services</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/services-01">Service 01</Link>
                      </li>
                      <li>
                        <Link href="/services-02">Service 02</Link>
                      </li>
                      <li>
                        <Link href="/services-03">Service 03</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Contact</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/contact-01">Contact 01</Link>
                      </li>
                      <li>
                        <Link href="/contact-02">Contact 02</Link>
                      </li>
                      <li>
                        <Link href="/contact-03">Contact 03</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Pricing</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/pricing-01">Pricing 01</Link>
                      </li>
                      <li>
                        <Link href="/pricing-02">Pricing 02</Link>
                      </li>
                      <li>
                        <Link href="/pricing-03">Pricing 03</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Utility</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/careers">Careers</Link>
                      </li>
                      <li>
                        <Link href="/careers-detail">Job Detail</Link>
                      </li>
                      <li>
                        <Link href="/sign-in">Login</Link>
                      </li>
                      <li>
                        <Link href="/sign-up">Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Misc</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/coming-soon">Coming Soon</Link>
                      </li>
                      <li>
                        <Link href="/maintainance">Maintenance</Link>
                      </li>
                      <li>
                        <Link href="/404">404 Page</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul> */}
          </li>
        </ul>
      </div>
    </>
  );
}
