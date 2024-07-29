'use clients';
import LanguageSelector from '@/components/elements/LanguageSelector';
import MenuMobile from '@/components/elements/MenuMobile';

export default function HeaderRight({ locale }) {
  return (
    <div className="header-right flex flex-align-c flex-content-e">
      <LanguageSelector locale={locale} />
      <MenuMobile locale={locale} />
    </div>
  );
}
