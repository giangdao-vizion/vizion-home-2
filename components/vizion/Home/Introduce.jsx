import { useTranslation } from 'react-i18next';

export default function Introduce() {
  const { t } = useTranslation();
  return (
    <>
      <section
        className="section background-full layout-12 opt160 opb200"
        style={{ backgroundImage: 'url(/assets/images/hvr-04.jpeg)' }}
      >
        <div className="container">
          <div className="heading align-left heading-alway-white mb32">
            <h2 className="heading-title size-xl">{t('Introduce.title')}</h2>
            <div className="heading-desc">
              Giải pháp công nghệ Thực tế ảo, đồng hành cùng doanh nghiệp <br /> trong quá trình chuyển đổi số
            </div>
          </div>
          <div className="button-wrap">
            {/* <Link href="/contact-01" className="button borderline-white" title="Watch Video"><i className="las la-play-circle icon-before" />Watch Video</Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
