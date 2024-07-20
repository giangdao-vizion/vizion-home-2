import Link from 'next/link';

export default function Banner({ title, videoUrl }) {
  return (
    <>
      <section className="section opt120 overflow-hidden linear-gradient-07 banner">
        <div id="banner-video-iframe-id" className="banner-video">
          <iframe
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="banner-content">
          {/* <h1
            data-wow-delay="0.5s"
            className="heading-title size-l text-center wow animate__animated animate__fadeInRight"
          >
            {title}
          </h1> */}

          <div className="container">
            <div className="row flex-align-c">
              <div className="col-lg-6">
                <div className="heading heading-alway-white mb32">
                  <div className="heading-sub">AWARD WINNING SEO</div>
                  <h2 className="heading-title size-xxl">Best 2023 Digital Marketing</h2>
                  <div className="heading-desc">Nunc molestie tellus sapien, quis laoreet orci.</div>
                </div>
                <div className="button-wrap mt32">
                  <Link href="/contact-01" className="button fullfield-white xs-mb10" title="Let's Talk">
                    Let's Talk
                  </Link>
                  <Link href="/tel:00342834445" className="button text-white xs-mb10" title="Call. + 00 342 834 445">
                    Call. + 00 342 834 445
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
