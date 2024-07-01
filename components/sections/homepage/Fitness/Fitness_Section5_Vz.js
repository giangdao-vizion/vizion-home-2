import { useState } from "react";
export default function Fitness_Section5_Vz() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
      <div className="section spdt">
        <div className="container">
          <div className="section spdt mb60">
            <div className="container">
              <div className="heading align-center">
                {/* <div className="heading-sub color-navy">Khám Phá</div> */}
                <h2 className="heading-title size-l">
                  Tại sao chọn <span className="vz-span">Vizion</span>?
                </h2>
              </div>
            </div>
          </div>
          <div className="block-tab tab-wrap layout-02">
            <div className="row flex-align-c">
              <div className="col-xl-3 col-lg-6">
                <div className="tab-navs pdr30">
                  <ul>
                    <li onClick={() => handleOnClick(1)}>
                      <a
                        className={
                          activeIndex === 1 ? "tab-nav is-active" : "tab-nav"
                        }
                      >
                        <i className="la la-paper-plane" />
                        Nhanh
                      </a>
                    </li>
                    <li onClick={() => handleOnClick(2)}>
                      <a
                        className={
                          activeIndex === 2 ? "tab-nav is-active" : "tab-nav"
                        }
                      >
                        <i className="la la-smile-o" />
                        Dễ
                      </a>
                    </li>
                    <li onClick={() => handleOnClick(3)}>
                      <a
                        className={
                          activeIndex === 3 ? "tab-nav is-active" : "tab-nav"
                        }
                      >
                        <i className="la la-line-chart" />
                        Thông minh
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="images layout-12 pt30 pb30">
                  <div className="inner">
                    <div
                      id="custom-course"
                      className={
                        activeIndex === 1
                          ? "tab-content is-active"
                          : "tab-content"
                      }
                    >
                      <img
                        className="vizion-img03"
                        src="/assets/images/vizion-fast.png"
                        alt="Image"
                      />
                    </div>
                    <div
                      id="settings"
                      className={
                        activeIndex === 2
                          ? "tab-content is-active"
                          : "tab-content"
                      }
                    >
                      <img
                        className="vizion-img03"
                        src="/assets/images/vizion-easy.png"
                        alt="Image"
                      />
                    </div>
                    <div
                      id="helps"
                      className={
                        activeIndex === 3
                          ? "tab-content is-active"
                          : "tab-content"
                      }
                    >
                      <img
                        className="vizion-img03"
                        src="/assets/images/vizion-smart.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`col-xl-5 col-lg-12 ${
                  activeIndex === 1 ? "vz-is-active" : "vz-discover"
                }`}
              >
                <div className="heading align-left mb24">
                  <h2 className="heading-title size-l">
                    Tốc độ load <span className="vz-span">siêu nhanh</span>
                  </h2>
                  <div className="heading-desc">
                    Tôi ưu hóa hiệu suất của tour để có thể hoạt động mượt mà
                    trên nhiều thiết bị thông minh, đảm bảo tính khả dụng và
                    tiện lợi cho khách hàng của bạn.
                  </div>
                </div>
              </div>

              <div
                className={`col-xl-5 col-lg-12 ${
                  activeIndex === 2 ? "vz-is-active" : "vz-discover"
                }`}
              >
                <div className="heading align-left mb24">
                  <h2 className="heading-title size-l">
                    Giao diện <span className="vz-span">dễ dàng sử dụng</span>
                  </h2>
                  <div className="heading-desc">
                    Luôn nổ lực hướng đến sự tiện lợi và dễ dàng cho cả người
                    xem lẫn người tạo nội dung. Chỉ trong 5 phút, với các thao
                    tác đơn giản, bạn đã có ngay 1 tour 360 chuyên nghiệp.
                  </div>
                </div>
              </div>

              <div
                className={`col-xl-5 col-lg-12 ${
                  activeIndex === 3 ? "vz-is-active" : "vz-discover"
                }`}
              >
                <div className="heading align-left mb24">
                  <h2 className="heading-title size-l">
                    Dữ liệu phân tích{" "}
                    <span className="vz-span">thông minh</span>
                  </h2>
                  <div className="heading-desc">
                    Cung cấp dữ liệu phân tích quan trọng về hành vi của khách
                    hàng xem tour, giúp doanh nghiệp nắm bắt được nhu cầu khách
                    hàng để đưa ra những định hướng sáng suốt nhất.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
