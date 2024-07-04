export default function Banner() {
  return (
    <>
      <section className="section opt120 overflow-hidden linear-gradient-07 banner">
        <div className="banner-video">
          <iframe
            // src="https://www.youtube.com/embed/ZlDUvmBOGOE?si=JxkfoEbOGAwlyjxE&autoplay=1&mute=1&loop=1&controls=0"
            src="https://www.youtube.com/embed/bXlQ3Mw4uGc?si=Izi3mZObD6T5zKY8&autoplay=1&mute=1&loop=1&controls=0&playlist=bXlQ3Mw4uGc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}
