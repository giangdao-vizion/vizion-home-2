import React from 'react';
import Link from 'next/link';
const SectionContact = () => {
  return (
    <>
      <section id="contactform" className="section try">
        <div className="page-padding">
          <div className="container w-container">
            <div className="try__wrap">
              <div className="try__box">
                <h2 className="h2 try__h2">
                  Set up a call with our <br></br>Enterprise Team
                </h2>
                <p className="p try__text">
                  Speak with one of our experts and learn how we can help your business succeed!
                </p>
                <Link href="/" className="btn-2 in-try hide-he">
                  Get in Touch
                </Link>
                <Link href="/" className="btn-2 in-try show-he">
                  Get in Touch
                </Link>
              </div>
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f82723267490463c0ad_05-bg-frame.svg"
                alt=""
                className="try__bg _1"
              />
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f82f20a6a4ceefb6c26_06-bg-frame.svg"
                alt=""
                className="try__bg _2"
              />
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f846f3ffa62317524ac_12-bg-frame-mobile.svg"
                loading="lazy"
                alt=""
                className="try__bg _3"
              />
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f83b8612185c90df664_11-bg-frame-mobile.svg"
                loading="lazy"
                alt=""
                className="try__bg _4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionContact;
