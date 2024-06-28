import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore from "swiper/core"

SwiperCore.use([Pagination])

export default function Shopify_App_Section8() {
    return (
        <>
            <section className="section background-grey spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title">People Who Already Love Us</h2>
                        <div className="heading-desc">
                            Easy to switch, upgrade, or cancel at any time.
                        </div>
                    </div>
                    <div className="block-testimonial layout-03">
                        <div className="swiper">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                pagination={{
                                    clickable: true,
                                    el: '.js-pagination'
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                            >
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="meta">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img
                                                        src="/assets/images/post-author-01.jpg"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="name">Iruka Akuchi</div>
                                                    <div className="position">CEO of Wipple</div>
                                                </div>
                                            </div>
                                            <i className="las la-quote-right" />
                                        </div>
                                        <p>
                                            "Easy to follow but incredibly insightful tutorials. Makes
                                            learning new software and techniques and real pleasure
                                            everyday! Keep up the good work"
                                        </p>
                                        <div className="logo">
                                            <img src="/assets/images/client-01.webp" alt="Logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="meta">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img
                                                        src="/assets/images/post-author-02.jpg"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="name">Clarke Gillebert</div>
                                                    <div className="position">CEO of Tinyclues</div>
                                                </div>
                                            </div>
                                            <i className="las la-quote-right" />
                                        </div>
                                        <p>
                                            "Easy to follow but incredibly insightful tutorials. Makes
                                            learning new software and techniques and real pleasure
                                            everyday! Keep up the good work"
                                        </p>
                                        <div className="logo">
                                            <img src="/assets/images/client-02.webp" alt="Logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="meta">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img
                                                        src="/assets/images/post-author-03.jpg"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="name">Carole Chimako</div>
                                                    <div className="position">Fourder Data</div>
                                                </div>
                                            </div>
                                            <i className="las la-quote-right" />
                                        </div>
                                        <p>
                                            "Easy to follow but incredibly insightful tutorials. Makes
                                            learning new software and techniques and real pleasure
                                            everyday! Keep up the good work"
                                        </p>
                                        <div className="logo">
                                            <img src="/assets/images/client-03.webp" alt="Logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="meta">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img
                                                        src="/assets/images/post-author-01.jpg"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="name">Iruka Akuchi</div>
                                                    <div className="position">CEO of Wipple</div>
                                                </div>
                                            </div>
                                            <i className="las la-quote-right" />
                                        </div>
                                        <p>
                                            "Easy to follow but incredibly insightful tutorials. Makes
                                            learning new software and techniques and real pleasure
                                            everyday! Keep up the good work"
                                        </p>
                                        <div className="logo">
                                            <img src="/assets/images/client-01.webp" alt="Logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-pagination block-gallery-pagination js-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}