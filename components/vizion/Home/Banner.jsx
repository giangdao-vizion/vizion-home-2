export default function Banner({ title, iframeUrl }) {
  return (
    <>
      <section className="section opt120 overflow-hidden linear-gradient-07 banner">
        <div id="banner-video-iframe-id" className="banner-video">
          <iframe
            src={iframeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="banner-content">
          <h1
            data-wow-delay="0.5s"
            className="heading-title size-l text-center wow animate__animated animate__fadeInRight"
          >
            {title}
          </h1>
        </div>
      </section>
    </>
  );
}
