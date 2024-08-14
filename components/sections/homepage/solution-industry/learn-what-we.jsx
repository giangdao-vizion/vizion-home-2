import React from 'react';

const LearnWhatWe = () => {
  return (
    <section className="section projects">
      <div className="page-padding">
        <div className="container in-projects w-container">
          <div className="projects__row">
            <div className="heading projects__heading">
              <h2 className="h2 projects__h2">
                Learn What We <br />
                Did For Our Clients
              </h2>
              <p className="p projects__text">
                More than 5,000 clients including Google, Starbucks, Optical Center, and Skoda have used our product to
                make the impossible possible. Are you ready to join them?
              </p>
            </div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="projects-slide w-dyn-item">
                <div className="review">
                  <img
                    src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2cdd58f7602b72b41708_63557440d13ee92e0157c407_review-quotes.svg"
                    loading="lazy"
                    alt=""
                    className="review__quotes"
                  />
                  <p className="review__text">
                    No matter where customers start from, we believe that in the in the mid-term generational trends
                    will drive to the same destination &amp; resulting IT-OT Frameworks: A unified architecture which
                    spans data collection &amp; contextualization, spatial data lakes, &amp; predictive modelling into a
                    Digital Twin Framework which includes the various applications that consume &amp; action the data.
                  </p>
                  <p className="review__author">Pallavi Chari</p>
                  <p className="case__review-author-job-title">
                    WW GTM Lead - Industrial IoT Applications and Digital Twins at AWS
                  </p>
                  <a href="/contact-sales" className="btn-1 in-review">
                    Contact Sales
                  </a>
                  <img
                    src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f825e9b04018e5b8cfb_04-bg-frame.svg"
                    loading="lazy"
                    alt=""
                    className="review__bg"
                  />
                </div>
                <div className="article-card in-review">
                  <div className="article-card__img">
                    <img
                      src="https://cdn.prod.website-files.com/636d1da0a8aa09584a47d1b7/6620b14853aeaac410145201_Screenshot_2024-04-18_at_07.33.36_optimized.png"
                      loading="lazy"
                      alt="Empowering Industry 4.0: Digital Twins and IoT Integration at the Vodafone Business Edge Innovation Lab."
                      className="img cover"
                    />
                    <div className="article-card__img-gradient"></div>
                  </div>
                  <div className="article-card__box">
                    <p className="article-card__tag">
                      Empowering Industry 4.0: Digital Twins and IoT Integration at the Vodafone Business Edge
                      Innovation Lab.
                    </p>
                    <p className="article-card__name">
                      Empowering Industry 4.0: Digital Twins and IoT Integration at the Vodafone Business Edge
                      Innovation Lab.
                    </p>
                    <p className="article-card__text">
                      This case study dives into a collaborative digital twin IoT project between AWS, Vodafone
                      Business, ifm, Matterport, and Treedis.
                    </p>
                    <a
                      href="/case-studies/empowering-industry-4-0-digital-twins-and-iot-integration-at-the-vodafone-business-edge-innovation-lab"
                      className="article-card__link w-inline-block"
                    >
                      <div className="article-card__link-text">Read More</div>
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
                  </div>
                  <a
                    href="/case-studies/empowering-industry-4-0-digital-twins-and-iot-integration-at-the-vodafone-business-edge-innovation-lab"
                    className="article-card__link-wrap w-inline-block"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnWhatWe;
