import EcommerceTestimonialSlider from "@/components/slider/EcommerceTestimonialSlider";

export default function Web3_Section6() {

    return (
        <>

            <section className="section spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub">Testimonial</div>
                        <h2 className="heading-title size-l w500">People Who Already Love Us</h2>
                    </div>
                    <div className="block-testimonial item-border layout-01">
                        <div className="swiper uxp-swiper-slider testimonial-slider">
                            <EcommerceTestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}