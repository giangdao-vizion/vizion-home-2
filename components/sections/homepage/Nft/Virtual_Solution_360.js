import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Virtual_Solution_360() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="section spdt mb60">
        <div className="container">
          <div className="heading align-center">
            <div className="heading-sub color-navy">Khám Phá</div>
            <h2 className="heading-title size-l">Trải Nghiệm Ngay Live Demo</h2>
          </div>
          <div className="block-video">
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
              src="https://view.vizion.space/demo?mode=no-intro&menu-ui=gallery"
              title="tour-immerse"
              style={{ height: 540, width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
