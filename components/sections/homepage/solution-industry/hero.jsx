import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="section hero-2">
        <div className="page-padding tablet-0">
          <div className="container w-container">
            <div className="hero-2__top">
              <div className="hero-2__left">
                <h1 className="h1 hero-2__h1">
                  <span className="title-span-turquoise">Industry 4.0</span>
                </h1>
                <p className="p subtitle">
                  Increase the value and operational efficiency of your space while decreasing operational costs
                </p>
                <p className="p hero-2__text">
                  The Treedis Retail Solutions platform gives you the ability to completely revolutionize the way your
                  customers interact with your online store and showroom
                </p>
                <a href="#tyfy" className="btn-5">
                  Give it a try
                </a>
              </div>
              <div className="hero-2__right">
                <img
                  src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/64c764633e56baecf0fbd949_industry40.png"
                  loading="lazy"
                  width="710"
                  alt="Industry 4.0 Factory"
                  className="img in-hero-2 desktop"
                />
                <img
                  src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/63871615b348d17d2c3b4896_Component%204%20(1).png"
                  loading="lazy"
                  width="344"
                  alt=""
                  className="img in-hero-2 mobile"
                />
              </div>
            </div>
            <div className="hero-2__bottom">
              <div className="hero-2__percent">
                <div className="hero-2__percent-text">25%</div>
                <img
                  src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d3252a62e06f7d4b1cfeb_percent-vector.svg"
                  loading="lazy"
                  alt=""
                  className="percent-img"
                />
              </div>
              <div className="hero-2__flex">
                <p className="p hero-2__text-2">
                  reduction in risks and costs when employees are trained using digital twins and AR/VR{' '}
                </p>
                <p className="p hero-2__text-3">with Treedis’ V-commerce Solution</p>
              </div>
              <div id="w-node-f13e5aab-c6a7-9e7f-0721-9575abe3c5a9-766bac0a" className="logos-slider w-dyn-list">
                <div role="list" className="logos-wrapper w-dyn-items">
                  <div role="listitem" className="logos-slide w-dyn-item">
                    <a href="#" className="logo-slide in-slider w-inline-block">
                      <img
                        loading="lazy"
                        alt="optical-center"
                        src="https://cdn.prod.website-files.com/636d1da0a8aa09584a47d1b7/636d58dc62d869660fb9781a_optical-center.svg"
                        className="logo-slide__img"
                        style={{}}
                      />
                      <img
                        alt=""
                        src="https://cdn.prod.website-files.com/636d1da0a8aa09584a47d1b7/636d58de34d44a72a65aed41_optical-center-color.svg"
                        className="logo-slide__img color"
                        style={{}}
                      />
                    </a>
                  </div>
                  <div role="listitem" className="logos-slide w-dyn-item">
                    <a href="#" className="logo-slide in-slider w-inline-block">
                      <img
                        loading="lazy"
                        alt="lg"
                        src="https://cdn.prod.website-files.com/636d1da0a8aa09584a47d1b7/636d58b1a115957ece6b6810_lg.svg"
                        className="logo-slide__img"
                        style={{ display: 'none' }}
                      />
                      <img
                        alt=""
                        src="https://cdn.prod.website-files.com/636d1da0a8aa09584a47d1b7/636d58b3709c5018907277cb_lg-color.svg"
                        className="logo-slide__img color"
                        style={{ display: 'block' }}
                      />
                    </a>
                  </div>
                  <div role="listitem" className="logos-slide w-dyn-item">
                    <a href="#" className="logo-slide in-slider w-inline-block">
                      <img
                        loading="lazy"
                        alt="luxottica"
                        src="https://cdn.prod.website-files.com/636d1da0a8aa09584a47d1b7/636d58bd260c6ac2604d03f9_luxottica.svg"
                        className="logo-slide__img"
                        style={{}}
                      />
                      <img
                        alt=""
                        src="https://cdn.prod.website-files.com/636d1da0a8aa09584a47d1b7/636d58bf5b88e04b95e87586_luxottica-color.svg"
                        className="logo-slide__img color"
                        style={{}}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dot-bg-8-mobile">
          <img
            src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d31d804bf290f19dc77af_dots-bg-8-mobile.svg"
            loading="lazy"
            alt=""
            className="img dots"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
