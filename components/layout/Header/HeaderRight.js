'use clients';
import LanguageSelector from '@/components/elements/LanguageSelector';

export default function HeaderRight({ locale }) {
  return (
    <div className="header-right flex flex-align-c flex-content-e">
      <LanguageSelector locale={locale} />
    </div>
  );
}
