import React from 'react';

const ContactSale = () => {
  return (
    <section className="section capture">
      <div className="page-padding">
        <div className="container w-container">
          <div className="capture__wrap">
            <div className="capture__left">
              <div className="heading partners__heading">
                <h2 className="h2-2 capture__h2">We will capture for you</h2>
                <img
                  src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f812e7c38c62a085420_04-underline-vector.svg"
                  loading="lazy"
                  alt=""
                  className="heading-line in-capture"
                />
                <img
                  src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f81709c50028a6f10be_02-underline-vector.svg"
                  loading="lazy"
                  alt=""
                  className="heading-line in-capture-mobile"
                />
              </div>
              <p className="p capture__text">
                Capture your digital twin with Vizion Capture 3D Network. With more 3D creators joining every week, we
                are ready to match you with the right professional who meets Vizion' high standards for excellence and
                professionalism.
              </p>
              <a href="/contact-sales" className="btn-1 in-capture">
                Contact Sales
              </a>
            </div>
            <div className="capture__right">
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636da82718e574a1e13d1f6a_capture-img.webp"
                loading="lazy"
                alt=""
                className="img in-capture"
              />
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636da8280ab43e6c79766e5d_capture-img-mobile.webp"
                loading="lazy"
                width="356"
                alt=""
                className="img in-capture-mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSale;
