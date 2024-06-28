import EcommerceTestimonialSlider from "@/components/slider/EcommerceTestimonialSlider";


export default function Ecommerce_Platform_Section9() {

    return (
        <>
            <section className="section background-grey spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title">People Who Already Love Us</h2>
                        <div className="heading-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                    <div className="block-testimonial layout-01">
                        <div className="swiper uxp-swiper-slider testimonial-slider">
                            <EcommerceTestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}