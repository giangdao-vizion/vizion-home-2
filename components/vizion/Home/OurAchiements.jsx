import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function OurAchiements() {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {
    setToggled(!isToggled);
  };

  return (
    <>
      <section className="section spdt spdb vizion-our-services min-vh100 flex flex-align-c bussiness-discover background-grey">
        <div className="container">
          <div data-wow-delay="0.2s" className="heading align-center wow animate__animated animate__fadeInRight">
            <h2 className="heading-title size-l text-uppercase">Giải Pháp Đột Phá Cho Doanh Nghiệp</h2>
          </div>
          <div className="clients align-center mt60">
            <ul className="content">
              <li>
                <img
                  src="/assets/images/vizion/achievement/saokhue-v4.png"
                  style={{ height: 100 }}
                  alt="sao-khue-img"
                />
              </li>
              <li>
                <img
                  src="/assets/images/vizion/achievement/VZ-TOP20_StartupViet.png"
                  style={{ height: 100 }}
                  alt="startup-viet-img"
                />
              </li>
              <li>
                <img
                  src="/assets/images/vizion/achievement/VZ-TOP20_TECHFEST.png"
                  style={{ height: 100 }}
                  alt="techfest-img"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
