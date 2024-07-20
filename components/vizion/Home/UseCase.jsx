import React from 'react';

export default function UseCase() {
  return (
    <section className="section spdt min-vh100 flex flex-align-c">
      <div className="container">
        <div data-wow-delay="0.2s" className="heading align-center wow animate__animated animate__fadeInRight">
          <h2 className="heading-title size-l text-uppercase">Use Case</h2>
        </div>
        <div className="block-infinite use-case--block-infinite layout-02">
          <div className="infinite use-case--infinite" data-speed={100}>
            <div className="item use-case--item">
              <div className="thumb">
                <img src="/assets/images/binance.png" alt="Binance" />
              </div>
              <span>Binance</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb">
                <img src="/assets/images/optimism.png" alt="Optimism" />
              </div>
              <span>Optimism</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb">
                <img src="/assets/images/harmony.png" alt="Harmony" />
              </div>
              <span>Harmony</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb">
                <img src="/assets/images/polygon.png" alt="Polygon" />
              </div>
              <span>Polygon</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb">
                <img src="/assets/images/near.png" alt="Near" />
              </div>
              <span>Near</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb">
                <img src="/assets/images/fantom.png" alt="Fantom" />
              </div>
              <span>Fantom</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb">
                <img src="/assets/images/solana.png" alt="Solana" />
              </div>
              <span>Solana</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb">
                <img src="/assets/images/ethereum.png" alt="Ethereum" />
              </div>
              <span>Ethereum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
