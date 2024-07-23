import Link from 'next/link';
import React from 'react';

export default function Partner() {
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
              {/* <div className="button-wrap">
            <Link href="/contact-01" className="button fullfield" title="Start Inverting">
              Start Inverting
            </Link>
          </div> */}
            </div>
          </div>
          <div className="col-lg-6 lg-order-1">
            <div className="images layout-03">
              <div className="inner">
                <div className="block-infinite use-case--block-infinite layout-02">
                  <div className="infinite use-case--infinite" data-speed={100}>
                    <div className="item use-case--item">
                      <div className="thumb partner-thumb">
                        <img src="/assets/images/binance.png" alt="Binance" />
                      </div>
                      <span>Binance</span>
                    </div>
                    <div className="item use-case--item">
                      <div className="thumb partner-thumb">
                        <img src="/assets/images/optimism.png" alt="Optimism" />
                      </div>
                      <span>Optimism</span>
                    </div>
                    <div className="item use-case--item">
                      <div className="thumb partner-thumb">
                        <img src="/assets/images/harmony.png" alt="Harmony" />
                      </div>
                      <span>Harmony</span>
                    </div>
                    <div className="item use-case--item">
                      <div className="thumb partner-thumb">
                        <img src="/assets/images/polygon.png" alt="Polygon" />
                      </div>
                      <span>Polygon</span>
                    </div>
                    <div className="item use-case--item">
                      <div className="thumb partner-thumb">
                        <img src="/assets/images/near.png" alt="Near" />
                      </div>
                      <span>Near</span>
                    </div>
                    <div className="item use-case--item">
                      <div className="thumb partner-thumb">
                        <img src="/assets/images/fantom.png" alt="Fantom" />
                      </div>
                      <span>Fantom</span>
                    </div>
                    <div className="item use-case--item">
                      <div className="thumb partner-thumb">
                        <img src="/assets/images/solana.png" alt="Solana" />
                      </div>
                      <span>Solana</span>
                    </div>
                    <div className="item use-case--item">
                      <div className="thumb partner-thumb">
                        <img src="/assets/images/ethereum.png" alt="Ethereum" />
                      </div>
                      <span>Ethereum</span>
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
