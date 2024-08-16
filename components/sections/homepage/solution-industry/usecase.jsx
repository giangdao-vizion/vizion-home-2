import React from 'react';
import Link from 'next/link';

const UseCase = ({ usecase }) => {
  const { title, text, items } = usecase;

  return (
    <section className="section use-case">
      <div className="page-padding">
        <div className="container w-container">
          <div className="use-case__wrap">
            <div className="heading solutions__heading">
              <h2 className="h2-2 solutions__h2">{title}</h2>
              <div className="head-line"></div>
            </div>
            <div className="heading use-case__heading">
              <h2 className="h2-2 use-case__h2">{title}</h2>
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f81662598ee58070b65_01-underline-vector.svg"
                loading="lazy"
                alt="Underline Vector"
                className="heading-line"
              />
            </div>
            <p className="p use-case__text">{text}</p>
            <div className="use-case__items">
              {items.map((item, index) => (
                <div className="use-case__item" key={index}>
                  <div className="use-case__item-row">
                    <img loading="lazy" src={item.icon} alt={`${item.title} icon`} className="use-case__item-icon" />
                    <p className="use-case__item-title">{item.title}</p>
                  </div>
                  <p className="p use-case__item-text">{item.itemText}</p>
                  <Link href={item.buttonLink} legacyBehavior>
                    <a className="link-block-2 w-inline-block">
                      <div className="text-link">{item.buttonText}</div>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
