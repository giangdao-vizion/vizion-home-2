export default function Discover() {
  return (
    <>
      <section className="section discover">
        <div className="linear-gradient-08 spdtb ">
          <div className="container">
            <div className="row flex-align-c">
              <div className="col-lg-6">
                <div className="heading">
                  <h2 className="heading-title size-l wow animate__animated animate__fadeInRight">
                    Tại sao chọn <span className="vz-span">Vizion</span>?
                  </h2>
                  {/* <div className="heading-desc">
                    It is a long established fact that a reader will be <br /> distracted by the readable content
                  </div> */}
                </div>
                <div className="block-icon-box layout-16">
                  <div data-wow-delay="0.2s" className="item wow animate__animated animate__fadeInRight">
                    <div className="icon discover-icon">
                      <img src="/assets/images/vizion/discover/fast.svg" />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        Tốc độ load <span className="vz-span">siêu nhanh</span>
                      </h4>
                      <p className="desc">
                        Tối ưu hóa hiệu suất của tour để có thể hoạt động mượt mà trên nhiều thiết bị thông minh, đảm
                        bảo tính khả dụng và tiện lợi cho khách hàng của bạn.
                      </p>
                    </div>
                  </div>
                  <div data-wow-delay="0.4s" className="item wow animate__animated animate__fadeInRight">
                    <div className="icon discover-icon">
                      <img src="/assets/images/vizion/discover/easy.svg" />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        Giao diện <span className="vz-span">dễ dàng sử dụng</span>
                      </h4>
                      <p className="desc">
                        Luôn nổ lực hướng đến sự tiện lợi và dễ dàng cho cả người xem lẫn người tạo nội dung. Chỉ trong
                        5 phút, với các thao tác đơn giản, bạn đã có ngay 1 tour 360 chuyên nghiệp.
                      </p>
                    </div>
                  </div>
                  <div data-wow-delay="0.4s" className="item wow animate__animated animate__fadeInRight">
                    <div className="icon discover-icon">
                      <img src="/assets/images/vizion/discover/smart.svg" />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        Dữ liệu phân tích <span className="vz-span">thông minh</span>
                      </h4>
                      <p className="desc">
                        Cung cấp dữ liệu phân tích quan trọng về hành vi của khách hàng xem tour, giúp doanh nghiệp nắm
                        bắt được nhu cầu khách hàng để đưa ra những định hướng sáng suốt nhất.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="wow animate__animated animate__fadeInRight"
                  src="/assets/images/vizion/discover/why-vizion.png"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
