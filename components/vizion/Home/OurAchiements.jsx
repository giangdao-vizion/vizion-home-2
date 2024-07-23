import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function OurAchiements() {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="section-pricing section spdtb">
      <div className="container">
        <div className="heading align-center">
          <h2 className="heading-title size-l">Our Achievements</h2>
        </div>

        <div className="pricing-table layout-01 is-active">
          <div className="row">
            <div className="col-lg-4">
              <div className="pricing-box">
                <div className="inner background-grey ourachievement-inner">
                  <img src="/assets/images/vizion/achievement/saokhuev1.png" alt="achievements" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-box popular">
                <div className="inner background-grey ourachievement-inner">
                  <img src="/assets/images/vizion/achievement/startupviet.png" alt="achievements" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-box">
                <div className="inner background-grey ourachievement-inner">
                  <img src="/assets/images/vizion/achievement/techfest-v3.png" alt="achievements" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
