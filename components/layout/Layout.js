import { useEffect } from 'react';
import BackToTop from '../elements/BackToTop';
import SwitchDarkLight from '../elements/SwitchDarkLight';

import Footer1 from './Footer/Footer1';
import Header1 from './Header/Header1';
import PageHead from './PageHead';
import Header3 from './Header/Header3';

export default function Layout({
  headerLayout,
  footerLayout,
  children,
  siteContentClass,
  pageTitle,
  pageTitleSub,
  pageTitleDesc,
  pageTitleBtn,
  headerClass,
  headTitle,
}) {
  useEffect(() => {
    const WOW = require('wowjs');
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  });
  return (
    <>
      <PageHead headTitle={headTitle} />
      <div id="wrapper">
        {/* <Header3 /> */}
        {!headerLayout && <Header1 headerClass={headerClass} />}
        {headerLayout == 1 ? <Header1 headerClass={headerClass} /> : null}

        <main id="main" className="site-main">
          {pageTitle && (
            <section className="page-title">
              <div className="container">
                <div className="inner align-center">
                  {pageTitleSub && <div className="sub">{pageTitleSub}</div>}
                  {pageTitle && <h1 className="title">{pageTitle}</h1>}
                  {pageTitleDesc && <p className="desc">{pageTitleDesc}</p>}
                  {pageTitleBtn && (
                    <div className="button-wrap">
                      <a href="#" className="button fullfield" title="Opportunities">
                        {pageTitleBtn}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          <div className={`site-content ${siteContentClass ? siteContentClass : ''}`}>{children}</div>
        </main>

        {!footerLayout && <Footer1 />}
        {footerLayout == 1 ? <Footer1 /> : null}

        <BackToTop />
        {/* <SwitchDarkLight /> */}
      </div>
    </>
  );
}
