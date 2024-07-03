'use client';

// import Link from 'next/link';
import { useEffect } from 'react';

export default function Banner() {
  return (
    <>
      <section className="section opt120 overflow-hidden linear-gradient-07 banner">
        <div className="container banner-container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="pdr60">
                <div className="heading heading-alway-dark mb32">
                  {/* <div className="heading-sub layout-02">OCULUS QUEST</div>
                  <h2 className="heading-title size-xl">Oculus Go Standalone Virtual Reality Headse - 32GB</h2>
                  <div className="heading-desc">User controlled playback of 360° video content</div>
                </div>
                <div className="button-wrap">
                  <Link href="/contact-01" className="button fullfield" title="Buy Now">
                    Buy Now
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lg-mt32">
                <div className="images layout-03">
                  <div className="inner banner-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-video">
          <iframe
            src="https://www.youtube.com/embed/ZlDUvmBOGOE?si=H5_iR821YI086svv&autoplay=1&mute=1&loop=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
}
