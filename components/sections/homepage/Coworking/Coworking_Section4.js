import CoworkingTestimonialSlider from "@/components/slider/CoworkingTestimonialSlider";

export default function Coworking_Section4() {
    return (
        <>
            <section className="section linear-gradient-04 mt80 spdtb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="wow animate__animated   animate__fadeInLeft" src="/assets/images/cw-07.png" alt="Banner" />
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl50">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">Testimonial</div>
                                    <h2 className="heading-title size-l">People who already love us</h2>
                                </div>
                                <div className="block-testimonial layout-04">
                                    <div className="swiper uxp-swiper-slider testimonial-slider">
                                        <CoworkingTestimonialSlider />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}