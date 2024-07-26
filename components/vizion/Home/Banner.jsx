import Link from 'next/link';
import { useEffect, useState } from 'react';
import video from './test.mp4';

('use clients');

export default function Banner({ title, videoUrl }) {
  const [isMobile, setIsMobile] = useState(false);

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <>
      <section
        className="section opt120 overflow-hidden linear-gradient-07 banner"
        style={{ paddingTop: isTop ? 0 : 68, transition: '1s ease' }}
      >
        <div id="banner-video-iframe-id" className="banner-video">
          <div className="banner-mobile--video">
            <video
              src={
                isMobile
                  ? 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-mobile.mp4'
                  : 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
              }
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        <div className="banner-content">
          <div className="container">
            <div className="row flex-align-c">
              <div className="col-lg-6">
                <div className="heading heading-alway-white mb32">
                  <h2 className="heading-title size-xxl">Create immersive experiences powered by 3D Tour</h2>
                </div>
                <div className="button-wrap mt32">
                  <Link href="/contact-01" className="button fullfield xs-mb10 vz-btn" title="Let's Talk">
                    Book for Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <img
          src="https://images.unsplash.com/photo-1544644986-1b798640b29c?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="test"
          style={{ height: '100%', widows: '100%' }}
        /> */}
      </section>
    </>
  );
}
