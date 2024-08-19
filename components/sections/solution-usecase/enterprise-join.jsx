import Link from 'next/link';
import React, { useState } from 'react';

const EnterPrisesJoin = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <section className="section join">
      <div className="page-padding">
        <div className="container w-container">
          <div className="join__wrap">
            <div className="heading solutions__heading">
              <h2 className="h2-2 solutions__h2">Join Our &nbsp;Platform</h2>
              <div className="head-line"></div>
            </div>
            <div className="heading join__heading">
              <h2 className="h2-2 join__h2">Join Our &nbsp;Platform</h2>
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2f81709c50028a6f10be_02-underline-vector.svg"
                loading="lazy"
                alt=""
                className="heading-line"
              />
            </div>
            <div data-easing="ease" data-duration-in="300" data-duration-out="100" className="tabs-1 w-tabs">
              <div className="tabs-1__menu w-tab-menu" role="tablist">
                <button
                  className={`tabs-1__title hide-he w-inline-block w-tab-link ${activeTab === 'Tab 1' ? 'w--current' : ''}`}
                  onClick={() => handleTabClick('Tab 1')}
                >
                  For 3D Creators
                </button>
                <button
                  className={`tabs-1__title hide-he w-inline-block w-tab-link ${activeTab === 'Tab 2' ? 'w--current' : ''}`}
                  onClick={() => handleTabClick('Tab 2')}
                >
                  For Enterprise
                </button>
              </div>
              <div className="tabs-1__content in-join w-tab-content">
                {activeTab === 'Tab 1' && (
                  <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active" role="tabpanel">
                    <div className="tabs-1__pane">
                      <div className="tabs-1__box">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2e68662598a2920700ee_icon-witch-check.svg"
                          className="tabs-1__icon"
                        />
                        <p className="tabs-1__title-text">Access hundreds of AR and VR tools</p>
                      </div>
                      <div className="tabs-1__box">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2e68662598a2920700ee_icon-witch-check.svg"
                          className="tabs-1__icon"
                        />
                        <p className="tabs-1__title-text">Enhance custom-branded digital twins</p>
                      </div>
                      <div className="tabs-1__box">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2e68662598a2920700ee_icon-witch-check.svg"
                          className="tabs-1__icon"
                        />
                        <p className="tabs-1__title-text">No coding required</p>
                      </div>
                      <div className="tabs-1__box">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2e68662598a2920700ee_icon-witch-check.svg"
                          className="tabs-1__icon"
                        />
                        <p className="tabs-1__title-text">Generate revenue across a variety of industries.</p>
                      </div>
                    </div>
                    <Link href="#" className="btn-4 in-join w-inline-block">
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
                )}
                {activeTab === 'Tab 2' && (
                  <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active" role="tabpanel">
                    <div className="tabs-1__pane">
                      <div className="tabs-1__box">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2e680a5e0fce69db0104_icon-witch-check-2.svg"
                          className="tabs-1__icon"
                        />
                        <p className="tabs-1__title-text">Enterprise Grade Security</p>
                      </div>
                      <div className="tabs-1__box">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2e680a5e0fce69db0104_icon-witch-check-2.svg"
                          className="tabs-1__icon"
                        />
                        <p className="tabs-1__title-text">Production and&nbsp;&nbsp;Content Creation Services</p>
                      </div>
                      <div className="tabs-1__box">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2e680a5e0fce69db0104_icon-witch-check-2.svg"
                          className="tabs-1__icon"
                        />
                        <p className="tabs-1__title-text">Custom Developments</p>
                      </div>
                      <div className="tabs-1__box">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/636d2e680a5e0fce69db0104_icon-witch-check-2.svg"
                          className="tabs-1__icon"
                        />
                        <p className="tabs-1__title-text">Project Management from A-Z</p>
                      </div>
                    </div>
                    <Link href="#" className="btn-4 in-join w-inline-block">
                      <div className="btn-text">Learn More</div>
                      <div className="embed-btn-arrow flip w-embed">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterPrisesJoin;
