import Link from 'next/link';
import DigitalTwinIcon from '@/components/icons/TwinIcon';
export default function TopFea(){
    
    return(
        <>
            <section className="section background-half-right spdtb overflow-hidden" style={{ backgroundImage: 'url(/assets/images/wave-02.png)' }}>
                <div className="container">
                    <div className="row row-full flex-align-c">
                        <div className="col-lg-5">
                            <div className="pdr80">
                                <div className="heading heading-alway-black mb32">
                                    <h2 className="heading-title">Top Features for your Business</h2>
                                    <div className="heading-desc">Discover other Platform Features.</div>
                                    <div className="heading-desc">Transform your store into virtual experience.</div>
                                </div>
                                <div className="block-list color-black layout-03">
                                <ul className="sub-menu">
                        <li className={`menuV2-li`}>
                          <img src="/assets/images/vizion/icon-images/3dtour.svg" alt="3dtour" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/nha-may-san-xuat"
                          >
                            3D Tour
                          </Link>
                        </li>
                        <li className={`menuV2-li `}>
                          <DigitalTwinIcon />
                          <Link className="vz-sub-menu--item menuV2-sub--menu-item" href="/cac-linh-vuc/bat-dong-san">
                            VR Room
                          </Link>
                        </li>
                        <li className={`menuV2-li `}>
                          <img src="/assets/images/vizion/icon-images/showroom-3d.svg" alt="showroom-3d" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Showroom 3D
                          </Link>
                        </li>
                        <li className={`menuV2-li `}>
                          <img
                            src="/assets/images/vizion/icon-images/experience-creator.svg"
                            alt="experience-creator"
                          />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Experience Creator
                          </Link>
                        </li>
                        <li className={`menuV2-li `}>
                          <img src="/assets/images/vizion/icon-images/space-analytics.svg" alt="3dtour" />
                          <Link
                            className="vz-sub-menu--item menuV2-sub--menu-item"
                            href="/cac-linh-vuc/showroom-xe-hoi"
                          >
                            Space Analytics
                          </Link>
                        </li>
                      </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 d-none d-lg-block col-full-right">
                            <img className="wow animate__animated animate__fadeInRight" src="/assets/images/vizion/solution/industry4.png" alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}