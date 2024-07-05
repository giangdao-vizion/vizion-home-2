import Link from 'next/link';

export default function DiscoverV2() {
  return (
    <div className="discover-wrapper">
      <section className="section spdt">
        <div className="container">
          <div className="heading align-center">
            <h2 className="heading-title size-l">
              Tại sao chọn <span className="vz-span">Vizion</span>?
            </h2>
          </div>
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="images layout-03">
                <div className="inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width={570} height={570} viewBox="0 0 570 570">
                    <g fill="none" fillRule="evenodd">
                      <g fill="var(--sala-shade-background, $shade_background)">
                        <g>
                          <g>
                            <g transform="translate(-134.000000, -2219.000000) translate(-1.000000, 1277.000000) translate(135.000000, 776.000000) translate(0.000000, 166.000000)">
                              <rect width={570} height={570} rx={285} />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <img
                    className="img15 wow animate__animated animate__fadeInLeft"
                    src="/assets/images/vizion/discover/disco-back.png"
                    alt="Banner"
                  />
                  <img
                    className="img16 wow animate__animated animate__fadeInRight"
                    src="/assets/images/vizion/discover/disco-fastv2.png"
                    alt="Banner"
                    style={{ transform: 'scale(1)' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pdl100 pdr80 lg-mt32">
                <div className="heading mb32">
                  <h2 className="heading-title">
                    Tốc độ load <span className="vz-span">siêu nhanh</span>
                  </h2>
                  <div className="heading-desc">
                    Tối ưu hóa hiệu suất của tour để có thể hoạt động mượt mà trên nhiều thiết bị thông minh, đảm bảo
                    tính khả dụng và tiện lợi cho khách hàng của bạn.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section spdt discover-section">
        <div className="container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="pdl100 pdr80 lg-mt32">
                <div className="heading mb32">
                  <div className="heading mb32">
                    <h2 className="heading-title">
                      Giao diện <span className="vz-span">dễ dàng</span> sử dụng
                    </h2>
                    <div className="heading-desc">
                      Luôn nổ lực hướng đến sự tiện lợi và dễ dàng cho cả người xem lẫn người tạo nội dung. Chỉ trong 5
                      phút, với các thao tác đơn giản, bạn đã có ngay 1 tour 360 chuyên nghiệp.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="images layout-03">
                <div className="inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width={570} height={570} viewBox="0 0 570 570">
                    <g fill="none" fillRule="evenodd">
                      <g fill="var(--sala-shade-background, $shade_background)">
                        <g>
                          <g>
                            <g transform="translate(-134.000000, -2219.000000) translate(-1.000000, 1277.000000) translate(135.000000, 776.000000) translate(0.000000, 166.000000)">
                              <rect width={570} height={570} rx={285} />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <img
                    className="img15 wow animate__animated animate__fadeInLeft"
                    src="/assets/images/vizion/discover/disco-back.png"
                    alt="Banner"
                  />
                  <img
                    className="img16 wow animate__animated animate__fadeInRight"
                    src="/assets/images/vizion/discover/disco-easyv2.png"
                    alt="Banner"
                    style={{ transform: 'scale(1.4)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section spdt discover-section">
        <div className="container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="images layout-03">
                <div className="inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width={570} height={570} viewBox="0 0 570 570">
                    <g fill="none" fillRule="evenodd">
                      <g fill="var(--sala-shade-background, $shade_background)">
                        <g>
                          <g>
                            <g transform="translate(-134.000000, -2219.000000) translate(-1.000000, 1277.000000) translate(135.000000, 776.000000) translate(0.000000, 166.000000)">
                              <rect width={570} height={570} rx={285} />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <img
                    className="img15 wow animate__animated animate__fadeInLeft"
                    src="/assets/images/vizion/discover/disco-back.png"
                    alt="Banner"
                  />
                  <img
                    className="img16 wow animate__animated animate__fadeInRight"
                    src="/assets/images/vizion/discover/disco-smartv2.png"
                    alt="Banner"
                    style={{ transform: 'scale(1.4)' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pdl100 pdr80 lg-mt32">
                <div className="heading mb32">
                  <h2 className="heading-title">
                    Dữ liệu phân tích <span className="vz-span">thông minh</span>
                  </h2>
                  <div className="heading-desc">
                    Cung cấp dữ liệu phân tích quan trọng về hành vi của khách hàng xem tour, giúp doanh nghiệp nắm bắt
                    được nhu cầu khách hàng để đưa ra những định hướng sáng suốt nhất.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
