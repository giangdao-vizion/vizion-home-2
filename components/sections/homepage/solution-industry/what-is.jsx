// import Link from "next/link";
// export default function WhatIs() {

//     return (
//         <>

//             <section className="section spdtb">
//                 <div className="container">
//                     <div className="row flex-align-c">

//                         <div className="col-lg-6 lg-order-1">
//                             <div className="pdl80">
//                                 <div className="images layout-02">
//                                     <div className="inner">
//                                         <img className="wow animate__animated animate__fadeInLeft" src="/assets/images/vizion/solution/video.png" alt="Image" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 lg-order-2">
//                             <div className="pdr80 lg-mt32">
//                                 <div className="heading mb24">
//                                     <div className="heading-sub color-navy">What is Vizion for</div>
//                                     <div className="heading-sub layout-02">Industry 4.0</div>
//                                     <div className="heading-desc">Vizion for Industry 4.0 enables manufacturers to leverage AR, VR, IoT, and Digital Twin technologies for smart factories. With one scan, your plant will be digitized and ready for editing, turning your factory into a smart factory in days. Seamlessly integrate factory operations, optimize processes, and achieve improved ROI.</div>
//                                 </div>

//                                 <div className="button-wrap mt32"><Link href="/contact-01" className="button fullfield" title="Get in touch">Contact Sales</Link></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }

import React from 'react';

const WhatIs = () => {
  return (
    <section className="section what-is-2">
      <div className="page-padding">
        <div className="container w-container">
          <div className="what-is__wrap">
            <div className="video-wrap">
              <div className="video-1__box">
                <img
                  src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg"
                  loading="lazy"
                  width="580"
                  alt=""
                  className="video-1__bg-pink-mobile"
                />
                <img
                  src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg"
                  loading="lazy"
                  width="580"
                  alt=""
                  className="video-1__bg-pink-desktop"
                />
                <div className="video-1__box-inner">
                  <div className="w-embed w-iframe">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                      <iframe
                        src="https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="what-is__right">
              <h2 className="h2 what-is__h2">
                What is Vizion for <span className="title-span-pink">Industry 4.0?</span>
                <br />
              </h2>
              <p className="p what-is__text">
                Vizion for Industry 4.0 enables manufacturers to leverage AR, VR, IoT, and Digital Twin technologies for
                smart factories. With one scan, your plant will be digitized and ready for editing, turning your factory
                into a smart factory in days. Seamlessly integrate factory operations, optimize processes, and achieve
                improved ROI.
              </p>
              <a href="#" className="btn-1 global-sales">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
