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
                    <ul className="sub-menu">
                      <li>
                        <Link href="/virtual-solution-360">
                          Giải Pháp Virtual 360
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/about-company">VR Room</Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/about-company">Showroom 3D</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-mega-menu">
            <Link href="/">Story</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
