import Link from 'next/link';
import React from 'react';

const ContactForm = () => {
  return (
    <section id="contactform" className="section try">
      <div className="page-padding">
        <div className="container w-container">
          <div className="try__wrap">
            <div className="try__box">
              <h2 className="h2 try__h2">Try Our Product For Free</h2>
              <p className="p try__text">
                Vizion is your go-to platform to enhance custom-branded digital twins, create hybrid experiences, and
                navigate the metaverse
              </p>
              <Link href="https://my.treedis.com/admin/register" className="btn-2 in-try hide-he">
                Start your Free Trial Now
              </Link>
              <Link href="https://he.treedis.com/contact-sales" className="btn-2 in-try show-he">
                Start your Free Trial Now
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
  );
};

export default ContactForm;
