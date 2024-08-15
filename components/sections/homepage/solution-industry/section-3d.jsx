import React from 'react';

const Section3D = () => {
  return (
    <section id="tifysjjjjj" className="section _3d">
      <div className="page-padding">
        <div className="container w-container">
          <div id="tyfy" className="_3d__wrap">
            <div className="_3d__top">
              <div className="heading solutions__heading">
                <h2 className="h2-2 solutions__h2">Try It For Yourself</h2>
                <div className="head-line"></div>
              </div>
              <div className="heading _3d__heading">
                <h2 className="h2 _3d__h2">Try It For Yourself</h2>
                <img
                  src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f8251e53a5ac2d837b9_06-underline-vector.svg"
                  loading="lazy"
                  alt=""
                  className="heading-line in-3d"
                />
              </div>
              <p className="p">You can immerse yourself in an 3D tour experience right here on our website.</p>
            </div>
            <div className="_3d__tour">
              <div className="_3d__embed w-embed w-iframe">
                <iframe
                  src="https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4"
                  height="100%"
                  width="100%"
                  allowFullScreen
                  style={{ overflow: 'hidden', borderRadius: '8px', border: 'none' }}
                ></iframe>
              </div>
            </div>
            <a href="#" className="btn-5 in-3d hide-he">
              Get Started for Free
            </a>
            <a href="/contact-sales" className="btn-5 in-3d show-he">
              Get Started for Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3D;
