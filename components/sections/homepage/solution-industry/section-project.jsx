import React from 'react';
import Link from 'next/link';
const SectionProject = ({ project }) => {
  const { title, text, reviewText, author, jobTitle, buttonText, img, cardName, cardText } = project;
  return (
    <section className="section projects">
      <div className="page-padding">
        <div className="container in-projects w-container">
          <div className="projects__row">
            <div className="heading projects__heading">
              <h2 className="h2 projects__h2">{title}</h2>
              <p className="p projects__text">{text}</p>
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
                  <p className="review__text">{reviewText}</p>
                  <p className="review__author">{author}</p>
                  <p className="case__review-author-job-title">{jobTitle}</p>
                  <Link href="/contact-sales" className="btn-1 in-review">
                    {buttonText}
                  </Link>
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
                      src={img}
                      loading="lazy"
                      alt="Empowering Industry 4.0: Digital Twins and IoT Integration at the Vodafone Business Edge Innovation Lab."
                      className="img cover"
                    />
                    <div className="article-card__img-gradient"></div>
                  </div>
                  <div className="article-card__box">
                    <p className="article-card__name">{cardName}</p>
                    <p className="article-card__text">{cardText}</p>
                    <Link
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
                    </Link>
                  </div>
                  <Link
                    href="/case-studies/empowering-industry-4-0-digital-twins-and-iot-integration-at-the-vodafone-business-edge-innovation-lab"
                    className="article-card__link-wrap w-inline-block"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
