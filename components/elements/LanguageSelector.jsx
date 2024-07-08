import ViLangIcon from '@/components/icons/ViLangIcon';
import EnLangIcon from '@/components/icons/EnLangIcon';
import LangSelectIcon from '@/components/icons/LangSelectIcon';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function LanguageSelector({ locale }) {
  const langWrapper = useRef();
  const router = useRouter();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = event => {
      if (langWrapper.current && !langWrapper.current.contains(event.target)) {
        setToggleDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const changeLanguage = langCode => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      null,
      { locale: langCode },
    );
    setToggleDropdown(false);
  };

  const languages = [
    {
      label: 'Tiếng Việt',
      value: 'vi',
      icon: ViLangIcon,
      onClick: () => changeLanguage('vi'),
    },
    {
      label: 'English',
      value: 'en',
      icon: EnLangIcon,
      onClick: () => changeLanguage('en'),
    },
  ];

  return (
    <div className="lang-switcher" ref={langWrapper}>
      <button
        className="btn btn-sm btn-lang dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => setToggleDropdown(value => !value)}
      >
        <LangSelectIcon className="lang-icon" />
      </button>
      <ul className={`dropdown-menu dropdown-menu-end${toggleDropdown ? ' show' : ''}`}>
        {languages.map((lang, index) => (
          <li key={index}>
            <button
              className={`dropdown-item d-flex align-items-c${locale === lang.value ? ' active' : ''}`}
              onClick={lang.onClick}
            >
              <lang.icon className="lang-icon" /> {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
