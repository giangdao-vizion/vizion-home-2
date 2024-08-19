import React from 'react';
import Link from 'next/link';
const Hybrid = () => {
  return (
    <section className="section hybrid">
      <div className="page-padding">
        <div className="container w-container">
          <div className="hybrid__wrap">
            <div className="hybrid__left">
              <h2 className="h2 hybrid__h2">Hybrid Technology</h2>
              <p className="p hybrid__text _1">
                Your bridge to the hybrid world. One Process. Three dimensions.
                <br />
              </p>
              <p className="p hybrid__text">
                Activate two-in-one experiences by scanning your space and customizing the physical and virtual worlds.
                We power our solutions with the latest hybrid reality technologies.
              </p>
              <Link href="#" className="btn-5 in-hybrid w-inline-block">
                <div className="btn-text">Learn More</div>
                <div className="embed-btn-arrow w-embed">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    alt="arrow-right"
                  ></svg>
                </div>
              </Link>
            </div>
            <div className="hubrid__right">
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2c695b88e020c4e56494_63519c446e5f53be4748a63b_Hybrid%20-Technology.webp"
                loading="lazy"
                width="570"
                alt=""
                className="img in-hybrid"
              />
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2c682a2ccf0007ff182a_6356c681a7a147898d8813a5_Hybrid-Technology-mobile.webp"
                loading="lazy"
                width="320"
                alt=""
                className="img landscape"
              />
            </div>
            <img
              src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f81baa75735511fce5f_02-bg-frame.svg"
              loading="lazy"
              alt=""
              className="image-3 absolute flip"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hybrid;
