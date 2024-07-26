import Link from 'next/link';
import React, { useState } from 'react';

('use clients');

export default function Partner() {
  const [hover, setHover] = useState('');
  return (
    <section className="section spdt mb-5">
      <div className="container">
        <div className="row flex-align-c">
          <div className="col-lg-6 lg-order-2">
            <div className="pdr80 lg-mt32">
              <div className="heading mb24">
                <h2 className="heading-title size-l">What is Digital Twin Technology</h2>
                <div className="heading-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum ut lacus eu egestas. Duis
                  fringilla sed ligula sed ultricies. Ut consectetur malesuada magna, vitae elementum elit imperdiet
                  tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="button-wrap mt-4">
                  <Link href="/contact-01" className="button fullfield vz-btn " title="Try it free">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 lg-order-1">
            <div className="images layout-03">
              <div className="inner">
                <div className="block-infinite use-case--block-infinite layout-02">
                  <div className="infinite use-case--infinite  partner-infinite" data-speed={100}>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('microsoft')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'microsoft' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/microsoft.svg"
                            alt="microsoft"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-microsoft.svg"
                            alt="microsoft"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">Microsoft</span>
                    </div>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('google')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'google' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/google.svg"
                            alt="youtube"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-google.svg"
                            alt="youtube"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">Google</span>
                    </div>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('mapbox')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'mapbox' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/mapbox.svg"
                            alt="youtube"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-mapbox.svg"
                            alt="youtube"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">Mapbox</span>
                    </div>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('sketchfab')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'sketchfab' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/sketchfab.svg"
                            alt="sketchfab"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-sketchfab.svg"
                            alt="sketchfab"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">Sketchfab</span>
                    </div>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('shapespark')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'shapespark' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/shapespark.svg"
                            alt="shapespark"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-shapespark.svg"
                            alt="shapespark"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">Shapespark</span>
                    </div>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('lumaai')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'lumaai' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/lumaai.svg"
                            alt="lumaai"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-lumaai.svg"
                            alt="lumaai"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">LumaAI</span>
                    </div>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('youtube')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'youtube' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/youtube.svg"
                            alt="youtube"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-youtube.svg"
                            alt="youtube"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">Youtube</span>
                    </div>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('vimeo')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'vimeo' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/vimeo.svg"
                            alt="vimeo"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-vimeo.svg"
                            alt="vimeo"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">Vimeo</span>
                    </div>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('matterport')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'matterport' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/matterport.svg"
                            alt="matterport"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-matterport.svg"
                            alt="matterport"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">Matterport</span>
                    </div>
                    <div
                      className="item use-case--item partner-item"
                      onMouseEnter={() => setHover('typeform')}
                      onMouseLeave={() => setHover('')}
                    >
                      <div className="thumb partner-thumb">
                        {hover === 'typeform' ? (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/typeform.svg"
                            alt="typeform"
                          />
                        ) : (
                          <img
                            className="partner-thumb--image"
                            src="/assets/images/vizion/partners/bw-typeform.svg"
                            alt="typeform"
                          />
                        )}
                      </div>
                      <span className="partner-thumb--title">Typeform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
