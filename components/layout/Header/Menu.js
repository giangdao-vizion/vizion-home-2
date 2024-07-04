import Link from 'next/link';

export default function Menu({ isTop }) {
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
            <Link href="/" className={`vz-sub-menu ${isTop ? '' : 'text-black'}`}>
              Lĩnh Vực Ứng Dụng
              <span className={`toggle-sub-menu vz-toggle-sub--menu ${isTop ? '' : 'arrow-black'}`}></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex industries-menu">
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/dich-vu/nha-may-san-xuat">
                          Sản Xuất & Nhà Máy
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/dich-vu/bat-dong-san">
                          Bất Động Sản
                        </Link>
                      </li>

                      <li>
                        <Link className="vz-sub-menu--item" href="/dich-vu/showroom-xe-hoi">
                          Showroom Xe Hơi
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          Bán Lẻ & Thương Mại
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          Nội Thất Và Đồ Gỗ
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          Du Lịch Và Khám Phá
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          Khách Sạn & Resort
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          Cơ Sở Giáo Dục
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          Nhà Hàng & Quán Ăn
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          Giải Trí & Văn Hóa
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          Gym & Spa
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
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
            <Link href="/" className={`vz-sub-menu ${isTop ? '' : 'text-black'}`}>
              Giải Pháp <span className={`toggle-sub-menu vz-toggle-sub--menu ${isTop ? '' : 'arrow-black'}`}></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex solution-menu">
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/virtual-solution-360">
                          Giải Pháp Virtual 360
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          VR Room
                        </Link>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/">
                          Showroom 3D
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-mega-menu">
            <Link href="/" className={`vz-sub-menu ${isTop ? '' : 'text-black'}`}>
              Story
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
