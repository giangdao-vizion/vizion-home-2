import React from 'react';
import Link from 'next/link';

const UseCase = () => {
  return (
    <section className="section use-case">
      <div className="page-padding">
        <div className="container w-container">
          <div className="use-case__wrap">
            <div className="heading solutions__heading">
              <h2 className="h2-2 solutions__h2">Use Case</h2>
              <div className="head-line"></div>
            </div>
            <div className="heading use-case__heading">
              <h2 className="h2-2 use-case__h2">Use Case</h2>
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f81662598ee58070b65_01-underline-vector.svg"
                loading="lazy"
                alt="Underline Vector"
                className="heading-line"
              />
            </div>
            <p className="p use-case__text">We provide dozens of solutions that can be used by diverse end markets</p>
            <div className="use-case__items">
              <div className="use-case__item">
                <div className="use-case__item-row">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/63849d7ee157e499054ab28e_Planning%20and%20Designing.png"
                    alt="Planning and Designing icon"
                    className="use-case__item-icon"
                  />
                  <p className="use-case__item-title">Planning and Designing</p>
                </div>
                <p className="p use-case__item-text">
                  Vizion digital twin design and planning solutions allow you to streamline documentation, visualize
                  your space, and organize it beforehand to maximize manufacturing effectiveness.
                </p>
                <Link href="/solutions-by-use-case/planning-and-designing" legacyBehavior>
                  <a className="link-block-2 w-inline-block">
                    <div className="text-link">Learn More</div>
                    <div className="embed-icon arrow-right flip w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="arrow-right"
                      ></svg>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="use-case__item">
                <div className="use-case__item-row">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/638f4c99072de31663b0d75d_Learning%20and%20Training.png"
                    alt=""
                    className="use-case__item-icon"
                  />
                  <p className="use-case__item-title">Training &amp; Onboarding</p>
                </div>
                <p className="p use-case__item-text">
                  Use our solutions to provide Immersive Learning experiences to your employees
                </p>
                <Link href="/solutions-by-use-case/immersive-training-onboarding" legacyBehavior>
                  <a className="link-block-2 w-inline-block">
                    <div className="text-link">Learn More</div>
                    <div className="embed-icon arrow-right flip w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="arrow-right"
                      ></svg>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="use-case__item">
                <div className="use-case__item-row">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/638f4c9abb7d4d3b9bff0226_Indoor%20Navigation.png"
                    alt=""
                    className="use-case__item-icon"
                  />
                  <p className="use-case__item-title">Indoor Navigation</p>
                </div>
                <p className="p use-case__item-text">
                  Improve location pinpointing and wayfinding with Vizion Digital Twins Indoor Navigation. Improve your
                  visitors’ experience with real time data.
                </p>
                <Link href="/solutions-by-use-case/indoor-navigation" legacyBehavior>
                  <a className="link-block-2 w-inline-block">
                    <div className="text-link">Learn More</div>
                    <div className="embed-icon arrow-right flip embed2 w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="arrow-right"
                      ></svg>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="use-case__item">
                <div className="use-case__item-row">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/638f4c998bf547299f487a0f_IoT.png"
                    alt=""
                    className="use-case__item-icon"
                  />
                  <p className="use-case__item-title">IoT</p>
                </div>
                <p className="p use-case__item-text">
                  Monitor key IoT systems in real time to gain valuable feedback. Connecting your IoT systems enables
                  precise and real-time tracking of critical data
                </p>
                <Link href="/product-by-feature/iot" legacyBehavior>
                  <a className="link-block-2 w-inline-block">
                    <div className="text-link">Learn More</div>
                    <div className="embed-icon arrow-right flip w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="arrow-right"
                      ></svg>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
