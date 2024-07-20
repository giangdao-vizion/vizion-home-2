import Link from 'next/link';
import React from 'react';

export default function JoinOurPlatform() {
  return (
    <section className="section background-grey spdtb">
      <div className="container">
        <div className="heading align-center">
          <h2 className="heading-title size-l">Join Our Platform</h2>
        </div>

        <div className="joinourplatform-btns">
          <button className="joinourplatform-btn">For 3D Creators</button>
          <button className="joinourplatform-btn">For Enterpise</button>
        </div>
        <div className="block-icon-box layout-15">
          <div className="row">
            <div className="col-lg-6">
              <div className="icon-box">
                <div className="icon">
                  <i className="lab la-telegram" />
                </div>
                <div className="content">
                  <h4 className="title">Telegram</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="icon-box">
                <div className="icon">
                  <i className="lab la-discord" />
                </div>
                <div className="content">
                  <h4 className="title">Discord</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="icon-box">
                <div className="icon">
                  <i className="lab la-twitter" />
                </div>
                <div className="content">
                  <h4 className="title">Twitter</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="icon-box">
                <div className="icon">
                  <i className="lab la-facebook-f" />
                </div>
                <div className="content">
                  <h4 className="title">Facebook</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="icon-box">
                <div className="icon">
                  <i className="lab la-medium" />
                </div>
                <div className="content">
                  <h4 className="title">Medium</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="icon-box">
                <div className="icon">
                  <i className="lab la-linkedin-in" />
                </div>
                <div className="content">
                  <h4 className="title">Linkedin</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
