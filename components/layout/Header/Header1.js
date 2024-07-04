'user client';

import { useEffect, useState } from 'react';
// import HeaderRight from './HeaderRight';
import Logo from './Logo';
import Menu from './Menu';
// import CanvasMenu from './CanvasMenu';

export default function Header({ headerClass }) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header" className={`site-header ${headerClass} vz-header ${isTop ? '' : 'bg-color'}`}>
        {/* <CanvasMenu /> */}
        <div className="container-fluid">
          <div className="row flex-align-c inner">
            <div className="col-lg-3 col-6">
              <div className="header-left flex flex-align-c">
                <Logo isTop={isTop} />
              </div>
            </div>
            <div className="col-lg-6 col-0 text-center">
              <div className="header-center">
                <Menu isTop={isTop} />
              </div>
            </div>
            <div className="col-lg-3 col-6">{/* <HeaderRight /> */}</div>
          </div>
        </div>
      </header>
    </>
  );
}
