import Link from 'next/link';
import React, { useState } from 'react';

('user client');

export default function JoinOurPlatform() {
  const [state, setState] = useState(0);
  return (
    <section className="section background-grey spdtb">
      <div className="container">
        <div className="heading align-center joinourplatform-heading">
          <h2 className="heading-title size-l">Join Our Platform</h2>
        </div>

        <div className="joinourplatform-btns">
          <button
            className={`joinourplatform-btn ${state === 0 ? 'joinourplatform-btn--on' : ''}`}
            onClick={() => setState(0)}
          >
            For 3D Creators
          </button>
          <button
            className={`joinourplatform-btn ${state === 1 ? 'joinourplatform-btn--on' : ''}`}
            onClick={() => setState(1)}
          >
            For Enterpise
          </button>
        </div>
        <div className="block-icon-box layout-15">
          {state === 0 ? (
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
          ) : (
            <div className="row">
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
            </div>
          )}
        </div>

        <div className="button-wrap joinourplatform-learn--btn">
          <Link href="/contact-01" className="button fullfield" title="Try it free">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
