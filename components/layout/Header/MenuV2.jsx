import Arrow from '@/components/icons/Arrow';
import LangSelectIcon from '@/components/icons/LangSelectIcon';
import DigitalTwinIcon from '@/components/icons/TwinIcon';
import VRIcon from '@/components/icons/VRIcon';
// import VRTourIcon from '@/components/icons/VRTourIcon';
import Link from 'next/link';
import { useState } from 'react';

('use clients');

export default function MenuV2({ isTop, openMenu, setOpenMenu }) {
  const handleMenu = menuName => {
    if (openMenu === menuName) {
      setOpenMenu('');
    } else {
      setOpenMenu(menuName);
    }
  };

  return (
    <>
      <div className="main-menu">
        <div className="menu-action">
          <span className="item menu-back">
            <i className="las la-arrow-left" />
          </span>
          <span className="item menu-close">
            <i className="las la-times" />
          </span>
        </div>

        <ul>
          <li className="is-mega-menu menuV2-mega--menu">
            <button
              className={`vz-sub-menu menu-text--black ${openMenu === 'product' ? 'menu-text--red' : ''} menuV2-btn`}
              onClick={() => handleMenu('product')}
            >
              Products
              <div className={`menuV2-btn--arrow ${openMenu === 'product' ? 'arrow-active' : ''}`}>
                <Arrow height={6} />
              </div>
            </button>
            <ul className={`sub-menu menuV2-sub--menu ${openMenu === 'product' ? 'open' : ''}`}>
              <li>
                <div className="mega-menu flex-content-c flex industries-menu menuV2-product">
                  <div className="menuV2-bg">
                    <div className="menuV2-bg--item"></div>
                    <div className="menuV2-bg--item background-grey"></div>
                  </div>
                  <div className="menuV2-product--container">
                    <div className="menuV2-product--item menuV2-product--item-left">
                      <h4 className="menuV2-title">Product by Feature</h4>
                      <ul className="sub-menu">
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/3dtour.svg" alt="3dtour" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/nha-may-san-xuat"
                          >
                            3D Tour
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/cac-linh-vuc/bat-dong-san">
                            VR Room
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/showroom-3d.svg" alt="showroom-3d" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Showroom 3D
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img
                            src="/assets/images/vizion/icon-images/experience-creator.svg"
                            alt="experience-creator"
                          />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/product-by-feature/experience-creator"
                          >
                            Experience Creator
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/space-analytics.svg" alt="3dtour" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/product-by-feature/analytics"
                          >
                            Space Analytics
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menuV2-product--item menuV2-product--item-right">
                      <h4 className="menuV2-title">Product By Client Type</h4>
                      <ul className="sub-menu">
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/3d-creator.svg" alt="3dtour" />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/product-by-type/3d-creators">
                            3D Creators
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/photographers.svg" alt="photographers" />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="#">
                            Photographers
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/enterpise.svg" alt="enterpise" />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/product-by-type/enterprise">
                            Enterprise
                          </Link>
                        </li>
                      </ul>

                      <h4 className="menuV2-title">Product By Technology</h4>
                      <ul className="sub-menu">
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/tour360.svg" alt="tour360" />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="#">
                            360 Virtual Tour
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/virtual-reality.svg" alt="virtual-reality" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/product-by-technology/virtual-reality"
                          >
                            Virtual Reality
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/augmented-reality.svg" alt="augmented-reality" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/product-by-technology/augmented-reality"
                          >
                            Augmented Reality
                          </Link>
                        </li>
                      </ul>

                      <h4 className="menuV2-title">Trusted by Market Leaders</h4>

                      <div className="menuV2-leaders">
                        <div className="menuV2-leaders--container mb-4">
                          <div className="menuV2-leaders--item">
                            <img src="/assets/images/vizion/leaders/test.svg" />
                          </div>
                          <div className="menuV2-leaders--item">
                            <img src="/assets/images/vizion/leaders/test.svg" />
                          </div>
                          <div className="menuV2-leaders--item">
                            <img src="/assets/images/vizion/leaders/test.svg" />
                          </div>
                          <div className="menuV2-leaders--item">
                            <img src="/assets/images/vizion/leaders/test.svg" />
                          </div>
                          <div className="menuV2-leaders--item">
                            <img src="/assets/images/vizion/leaders/test.svg" />
                          </div>
                          <div className="menuV2-leaders--item">
                            <img src="/assets/images/vizion/leaders/test.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-mega-menu menuV2-mega--menu">
            <button
              href="/"
              className={`vz-sub-menu menu-text--black 
              ${openMenu === 'solutions' ? 'menu-text--red' : ''}
              menuV2-btn`}
              onClick={() => handleMenu('solutions')}
            >
              Solutions
              <div className={`menuV2-btn--arrow ${openMenu === 'solutions' ? 'arrow-active' : ''}`}>
                <Arrow height={6} />
              </div>
            </button>
            <ul className={`sub-menu menuV2-sub--menu ${openMenu === 'solutions' ? 'open' : ''}`}>
              <li>
                <div className="mega-menu flex-content-c flex industries-menu menuV2-product">
                  <div className="menuV2-bg">
                    <div className="menuV2-bg--item"></div>
                    <div className="menuV2-bg--item background-grey"></div>
                  </div>
                  <div className="menuV2-product--container">
                    <div className="menuV2-product--item menuV2-product--item-left">
                      <h4 className="menuV2-title">Solutions by Industry</h4>
                      <ul className="sub-menu">
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img
                            src="/assets/images/vizion/icon-images/real-estate-architechture.svg"
                            alt="real-estate-architechture"
                          />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/solutions-industry/real-estate-architecture"
                          >
                            Real Estate & Architecture
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/industry4.svg" alt="industry4" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/solutions-industry/industry-4-0"
                          >
                            Industry 4.0
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img
                            src="/assets/images/vizion/icon-images/retail-and-showroom.svg"
                            alt="retail-and-showroom"
                          />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/solutions-industry/retail-showrooms"
                          >
                            Retail and Showrooms
                          </Link>
                        </li>
                      </ul>

                      <h4 className="menuV2-title">Our Achievements</h4>
                      <ul className="sub-menu">
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img
                            className="menuV2-solution--img"
                            src="/assets/images/vizion/achievement/sao-khue.png"
                            alt="achievements"
                          />
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img
                            className="menuV2-solution--img"
                            src="/assets/images/vizion/achievement/startup-viet.png"
                            alt="achievements"
                          />
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img
                            className="menuV2-solution--img"
                            src="/assets/images/vizion/achievement/techfest.png"
                            alt="achievements"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="menuV2-product--item menuV2-product--item-right">
                      <h4 className="menuV2-title">Solutions by Use Case</h4>
                      <ul className="sub-menu">
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img
                            src="/assets/images/vizion/icon-images/marketing-and-advertising.svg"
                            alt="marketing-and-advertising"
                          />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/solutions-usecase/market-adv"
                          >
                            Marketing and Advertising
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img
                            src="/assets/images/vizion/icon-images/planning-and-design.svg"
                            alt="planning-and-design"
                          />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/solutions-usecase/planning-design"
                          >
                            Planning and Design
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/indoor-navigation.svg" alt="indoor-navigation" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/solutions-usecase/indoor-nav"
                          >
                            Indoor Navigation
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/online-shopping.svg" alt="online-shopping" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/solutions-usecase/online-shopping"
                          >
                            Online Shopping
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img
                            src="/assets/images/vizion/icon-images/facilities-and-management.svg"
                            alt="facilities-and-management"
                          />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/solutions-usecase/facilities-management"
                          >
                            Facilities Management
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/immersive-traning.svg" alt="immersive-traning" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/solutions-usecase/immersive-training"
                          >
                            Immersive Training
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-mega-menu menuV2-mega--menu">
            <button
              href="/"
              className={`vz-sub-menu menu-text--black
              ${openMenu === 'resources' ? 'menu-text--red' : ''}
              menuV2-btn`}
              onClick={() => handleMenu('resources')}
            >
              Resources
              <div className={`menuV2-btn--arrow ${openMenu === 'resources' ? 'arrow-active' : ''}`}>
                <Arrow height={6} />
              </div>
            </button>
            <ul className={`sub-menu menuV2-sub--menu ${openMenu === 'resources' ? 'open' : ''}`}>
              <li>
                <div className="mega-menu flex-content-c flex industries-menu menuV2-product">
                  <div className="menuV2-bg">
                    <div className="menuV2-bg--item"></div>
                    <div className="menuV2-bg--item background-grey"></div>
                  </div>
                  <div className="menuV2-product--container">
                    <div className="menuV2-product--item menuV2-product--item-left">
                      <h4 className="menuV2-title">Company</h4>
                      <ul className="sub-menu">
                        <li className={`menuV2-li ${openMenu === 'resources' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/case-studies.svg" alt="case-studies" />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/case-studies">
                            Case Studies
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'resources' ? 'pointer-event' : ''}`}>
                          <img src="/assets/images/vizion/icon-images/blog.svg" alt="blog" />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/blog">
                            Blog
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'resources' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/career">
                            Career
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menuV2-product--item menuV2-product--item-right">
                      <h4 className="menuV2-title">Solutions by Use Case</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
