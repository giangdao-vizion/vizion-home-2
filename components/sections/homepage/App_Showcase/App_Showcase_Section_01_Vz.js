import Link from "next/link";

export default function App_Showcase_Section_01_Vz() {
  return (
    <>
      <section className="section pt120 spdb">
        <div className="container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="images layout-02 lg-mb60">
                <div className="inner">
                  <img
                    className="img01"
                    src="/assets/images/asc3.png"
                    alt="Image"
                  />
                  <img
                    className="img05 wow animate__animated   animate__fadeInLeft"
                    src="/assets/images/asc9.png"
                    alt="Image"
                  />
                  <img
                    className="img06 wow animate__animated   animate__fadeInRight"
                    src="/assets/images/asc10.png"
                    alt="Image"
                  />
                  <img
                    className="img07 lg-hidden"
                    src="/assets/images/asc8.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading mb24">
                {/* <div className="heading-sub color-navy">awesome features</div> */}
                <h2 className="heading-title size-l">Tốc Độ Load Siêu Nhanh</h2>
                <div className="heading-desc">
                  Nền tảng Vizion được tối ưu hóa hiệu suất để cung cấp tốc độ
                  load cực nhanh cho các tour 360 độ. Với kiến trúc
                  Mobile-First, các tour của Vizion có thể hoạt động mượt mà
                  trên nhiều thiết bị thông minh, đảm bảo tính khả dụng và tiện
                  lợi cho khách hàng của bạn.
                </div>
              </div>
              {/* <div className="block-list layout-01 block-list-flex">
                <ul>
                  <li>
                    <i className="las la-check" />
                    <span>Vivamus ac elementum urna.</span>
                  </li>
                  <li>
                    <i className="las la-check" />
                    <span>Feugiat metus suscipiti.</span>
                  </li>
                </ul>
              </div>
              <div className="button-wrap mt32">
                <Link
                  href="/contact-01"
                  className="button fullfield"
                  title="Start for Free"
                >
                  Start for Free
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
