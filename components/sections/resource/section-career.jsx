const SectionCareer = () => {
  return (
    <>
      <section className="section careers">
        <div className="page-padding">
          <div className="container w-container">
            <div className="heading about__heading">
              <h1 className="h1 careers__h1">Careers</h1>
              <p className="p careers__subtitle">
                Vizion is your go-to platform to enhance custom-branded digital twins, create hybrid experiences, and
                navigate the metaverse.
              </p>
            </div>
            <div className="careers__img-box">
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/6387fcdb106565a5f088ae49_careers-hero-img.webp"
                loading="lazy"
                width="1240"
                alt=""
                className="careers__img"
              />
              <img
                src="https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/6387fcda965fc5811e2798db_careers-hero-img-mobile.webp"
                loading="lazy"
                width="344"
                alt=""
                className="careers__img mobile"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionCareer;
