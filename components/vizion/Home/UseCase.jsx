import React from 'react';

export default function UseCase() {
  return (
    <section className="section min-vh100 flex flex-align-c background-grey">
      <div className="container">
        <div data-wow-delay="0.2s" className="heading align-center wow animate__animated animate__fadeInRight">
          <h2 className="heading-title size-l">Use Case</h2>
        </div>
        <div className="block-infinite use-case--block-infinite layout-02">
          <div className="infinite use-case--infinite" data-speed={100}>
            <div className="item use-case--item">
              <div className="thumb use-case--thumb">
                <img
                  src="/assets/images/vizion/icon-images/marketing-and-advertising.svg"
                  alt="marketing-and-advertising"
                />
              </div>
              <span>Marketing and Advertising</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb use-case--thumb">
                <img src="/assets/images/vizion/icon-images/planning-and-design.svg" alt="planning-and-design" />
              </div>
              <span>Planning and Design</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb use-case--thumb">
                <img src="/assets/images/vizion/icon-images/indoor-navigation.svg" alt="indoor-navigation" />
              </div>
              <span>Indoor Navigation</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb use-case--thumb">
                <img src="/assets/images/vizion/icon-images/online-shopping.svg" alt="online-shopping" />
              </div>
              <span>Online Shopping</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb use-case--thumb">
                <img
                  src="/assets/images/vizion/icon-images/facilities-and-management.svg"
                  alt="facilities-and-management"
                />
              </div>
              <span>Facilities Management</span>
            </div>
            <div className="item use-case--item">
              <div className="thumb use-case--thumb">
                <img src="/assets/images/vizion/icon-images/immersive-traning.svg" alt="immersive-traning" />
              </div>
              <span>Immersive Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
