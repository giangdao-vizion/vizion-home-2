'user client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Header({ headerClass, locale, fixedMenu }) {
  const [isTop, setIsTop] = useState(true);

  const enableMenu = isTop && !fixedMenu;
  const [openMenu, setOpenMenu] = useState('');

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
    <header
      id="header"
      className={`site-header ${headerClass} vz-header ${openMenu ? 'bg-color' : ''} ${enableMenu ? '' : 'bg-color'}`}
    >
      <div className="container-fluid desktop">
        <div className="row flex-align-c inner">
          <div className="col-4 mb-0">
            <div className="header-left flex flex-align-c">
              <Logo isTop={enableMenu} />
            </div>
          </div>
          <div className="col-8">
            <div className="button-wrap align-right">
              <Link
                href="https://zalo.me/0866455605"
                target="blank"
                className="button fullfield vz-btn"
                title="Contact us"
              >
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
