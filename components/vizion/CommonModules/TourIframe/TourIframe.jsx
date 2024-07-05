export default function TourIframe({ iframeUrl }) {
  return (
    <>
      <div className="section background-grey spdt mb40 vh100">
        <div className="container">
          <div data-wow-delay="0.2s" className="heading align-center wow animate__animated animate__fadeInRight">
            <h2 className="heading-title size-l">Khám phá</h2>
            <div className="heading-desc">
              Trải nghiệm ngay <span className="vz-span">Live Demo</span>.
            </div>
          </div>
        </div>
        <div className="iframe-container">
          <iframe
            className="homepage-iframe"
            src={iframeUrl}
            title="tour-immerse"
            style={{ height: 590, width: '100%' }}
          />
        </div>
      </div>
    </>
  );
}
