import Link from "next/link";

export default function App_Showcase_Section1() {
  return (
    <>
      <section
        className="section background-overlay background-full pdt180 oveflow-hidden"
        style={{ backgroundImage: "url(/assets/images/hero-01.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading wow animate__animated animate__fadeInLeft ">
                <h2 className="heading-title size-xl vz-text-red">
                  Nâng Cao Năng Lực Bán Hàng Cho Doanh Nghiệp
                </h2>
              </div>

              <div className="button-wrap">
                <Link
                  href="/contact-01"
                  className="button fullfield-dark"
                  title="Buy Now"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="images align-right layout-01 lg-mt32">
                <img
                  className="img01 wow animate__animated animate__fadeInUp "
                  data-wow
                  animate__animated-delay="0.5s"
                  src="/assets/images/vz-asc1.png"
                  alt="Image"
                />
                <img
                  className="img02 wow animate__animated animate__fadeInUp "
                  src="/assets/images/phone-honepage-v2.png"
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
