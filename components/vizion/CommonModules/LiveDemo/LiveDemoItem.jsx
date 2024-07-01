// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

export default function LiveDemoItem({ dataLiveDemo, swiperCustom = {} }) {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.block-gallery-pagination',
        }}
        navigation={{
          prevEl: '.navigation-prev',
          nextEl: '.navigation-next',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
        {...swiperCustom}
      >
        {dataLiveDemo.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <img src={data.imageUrl} alt="Gallery" />
              <div className="title">
                <h3 className="title-content">{data.title?.toLowerCase()}</h3>
                <p className="desc">{data.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-align-c">
        <div className="swiper-pagination block-gallery-pagination" />
        <div className="swiper-button-prev navigation-prev" />
        <div className="swiper-button-next navigation-next" />
      </div>
    </>
  );
}
