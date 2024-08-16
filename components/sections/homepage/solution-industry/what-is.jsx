import React from 'react';
import Link from 'next/link';
const WhatIs = ({ whatis }) => {
  const { mobileImage, desktopImage, video, title, text, buttonText } = whatis;
  return (
    <section className="section what-is-2">
      <div className="page-padding">
        <div className="container w-container">
          <div className="what-is__wrap">
            <div className="video-wrap">
              <div className="video-1__box">
                <img src={mobileImage} loading="lazy" width="580" alt="" className="video-1__bg-pink-mobile" />
                <img src={desktopImage} loading="lazy" width="580" alt="" className="video-1__bg-pink-desktop" />
                <div className="video-1__box-inner">
                  <div className="w-embed w-iframe">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                      <iframe
                        src={video}
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
                <span className="title-span-turquoise">{title}</span>
              </h2>
              <p className="p what-is__text">{text}</p>
              <Link href="#" className="btn-1 global-sales">
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
