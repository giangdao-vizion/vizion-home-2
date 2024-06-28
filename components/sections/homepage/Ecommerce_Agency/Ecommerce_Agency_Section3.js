import CryptoTestimonialSlider from "@/components/slider/CryptoTestimonialSlider";
import HappyCustommerSlider from "@/components/slider/HappyCustommerSlider";

export default function Ecommerce_Agency_Section3() {

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="abs">
                        <div className="heading align-left">
                            <h2 className="heading-title font-third">Our <span className="color-navy no-underline">Happy</span> Customers</h2>
                        </div>
                        <div className="block-testimonial layout-03 item-grey">
                            <div className="swiper uxp-swiper-slider testimonial-slider" data-pagination="testimonial-pagination" data-direction="horizontal" data-slider-center="false" data-slider-loop="false" data-gap-xl={30} data-gap-md={10} data-xl={3} data-lg={2} data-md={1} data-sm={1} data-xs={1} data-es={1}>
                                <CryptoTestimonialSlider />
                            </div>
                            <div className="swiper uxp-swiper-slider">
                                <HappyCustommerSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}