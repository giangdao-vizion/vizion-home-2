import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function HomePage_Live_Demo({ iframeUrl }) {
  return (
    <>
      <div className="section spdt mb60">
        <div className="container">
          <div className="heading align-center">
            <div className="heading-sub color-vizion">Khám Phá</div>
            <h2 className="heading-title size-l">Trải Nghiệm Ngay <span className="heading-title-hightlight color-vizion">Live Demo</span></h2>
          </div>
          <div className="iframe-container">
            {/* <div
              className="popup-wrapper ratio br20"
              style={{ aspectRatio: 4 / 2 }}
            >
              <img src="/assets/images/nft-11.jpg" alt="Popup Video" />
              <a
                onClick={() => setOpen(true)}
                className="icon-popup background-navy size-l"
              >
                <i className="las la-play" />
              </a>
            </div>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="vfhzo499OeA"
              onClose={() => setOpen(false)}
            /> */}
            <iframe
              className="homepage-iframe"
              src={iframeUrl}
              title="tour-immerse"
              style={{ height: 540, width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
