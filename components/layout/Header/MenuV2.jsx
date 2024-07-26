import Arrow from '@/components/icons/Arrow';
import DigitalTwinIcon from '@/components/icons/TwinIcon';
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
                          <DigitalTwinIcon />
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
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Showroom 3D
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Experience Creator
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
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
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/nha-may-san-xuat"
                          >
                            3D Creators
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/cac-linh-vuc/bat-dong-san">
                            Photographers
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Enterprise
                          </Link>
                        </li>
                      </ul>

                      <h4 className="menuV2-title">Product By Technology</h4>
                      <ul className="sub-menu">
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/nha-may-san-xuat"
                          >
                            360 Virtual Tour
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/cac-linh-vuc/bat-dong-san">
                            Virtual Reality
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'product' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
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
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/nha-may-san-xuat"
                          >
                            Real Estate & Architecture
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/cac-linh-vuc/bat-dong-san">
                            Industry 4.0
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
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
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/nha-may-san-xuat"
                          >
                            Marketing and Advertising
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/cac-linh-vuc/bat-dong-san">
                            Planning and Design
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Indoor Navigation
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Online Shopping
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Facilities Management
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'solutions' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
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
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/nha-may-san-xuat"
                          >
                            Real Estate & Architecture
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'resources' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/cac-linh-vuc/bat-dong-san">
                            Industry 4.0
                          </Link>
                        </li>
                        <li className={`menuV2-li ${openMenu === 'resources' ? 'pointer-event' : ''}`}>
                          <DigitalTwinIcon />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Retail and Showrooms
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
