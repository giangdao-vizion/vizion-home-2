import '../public/assets/libs/bootstrap/css/bootstrap.min.css';
import '../public/assets/libs/line-awesome/css/line-awesome.min.css';
// import '../public/assets/libs/swiper/swiper-bundle.min.css'

import 'animate.css';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../public/assets/css/style.css';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let iframe = document.createElement('iframe');
    iframe.onload = function () {
      document.body.classList.add('app-mounted');
      setLoading(false);
    };
    iframe.src =
      'https://www.youtube.com/embed/SgvqXpPo6Ts?si=0RWsZPLbmiCKhRLp&autoplay=1&mute=1&loop=1&controls=0&playlist=SgvqXpPo6Ts&vq=hd1080';
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullScreen = true;
    document.getElementById('banner-video-iframe-id')?.appendChild(iframe);
  }, []);

  return (
    <>
      {loading && (
        <div id="preload" className="preload">
          <div className="spin"></div>
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
