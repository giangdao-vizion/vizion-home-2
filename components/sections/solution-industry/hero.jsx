import React from 'react';
import Link from 'next/link';
const Hero = ({ hero }) => {
  const {
    title,
    subtitle,
    text,
    buttonText,
    buttonLink,
    desktopImage,
    mobileImage,
    percentImage,
    percentText,
    bottomText1,
    bottomText2,
  } = hero;
  return (
    <>
      <section className="section hero-2">
        <div className="page-padding tablet-0">
          <div className="container w-container">
            {/* this is the hero top */}
            <div className="hero-2__top">
              <div className="hero-2__left">
                <h1 className="h1 hero-2__h1">
                  <span className="title-span-turquoise">{title}</span>
                </h1>
                <p className="p subtitle">{subtitle}</p>
                {/* <p className="p hero-2__text">{text}</p> */}
                <Link href={buttonLink} className="btn-5">
                  {buttonText}
                </Link>
              </div>
              <div className="hero-2__right">
                <img
                  src={desktopImage}
                  loading="lazy"
                  width="710"
                  alt="Industry 4.0 Factory"
                  className="img in-hero-2 desktop"
                />
                <img src={mobileImage} loading="lazy" width="344" alt="" className="img in-hero-2 mobile" />
              </div>
            </div>
            {/* this is the hero bottom */}
            <div className="hero-2__bottom">
              <div className="hero-2__percent">
                <div className="hero-2__percent-text">{percentText}</div>
                <img src={percentImage} loading="lazy" alt="" className="percent-img" />
              </div>
              <div className="hero-2__flex">
                <p className="p hero-2__text-2">{bottomText1}</p>
                <p className="p hero-2__text-3">{bottomText2}</p>
              </div>
              <div id="w-node-f13e5aab-c6a7-9e7f-0721-9575abe3c5a9-766bac0a" className="logos-slider w-dyn-list">
                <div role="list" className="logos-wrapper w-dyn-items">
                  {hero.logos.map((logo, index) => (
                    <div role="listitem" className="logos-slide w-dyn-item" key={index}>
                      <Link href="#" className="logo-slide in-slider w-inline-block">
                        <img loading="lazy" alt={logo.alt} src={logo.src} className="logo-slide__img" style={{}} />
                        <img alt="" src={logo.colorSrc} className="logo-slide__img color" style={{}} />
                      </Link>
                    </div>
                  ))}
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
