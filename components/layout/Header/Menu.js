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
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/nha-may-san-xuat">
                          Sản Xuất & Nhà Máy
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/bat-dong-san">
                          Bất Động Sản
                        </Link>
                      </li>

                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/showroom-xe-hoi">
                          Showroom Xe Hơi
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/ban-le-thuong-mai">
                          Bán Lẻ & Thương Mại
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/noi-that-do-go">
                          Nội Thất Và Đồ Gỗ
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/du-lich-kham-pha">
                          Du Lịch Và Khám Phá
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/khach-san-resort">
                          Khách Sạn & Resort
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/co-so-giao-duc">
                          Cơ Sở Giáo Dục
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/nha-hang-quan-an">
                          Nhà Hàng & Quán Ăn
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <ul className="sub-menu">
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/giai-tri-van-hoa">
                          Giải Trí & Văn Hóa
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/gym-spa">
                          Gym & Spa
                        </Link>
                      </li>
                      <li>
                        <Link className="vz-sub-menu--item" href="/cac-linh-vuc/benh-vien-tts-suc-khoe">
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
