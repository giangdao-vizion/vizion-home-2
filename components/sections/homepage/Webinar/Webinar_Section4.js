import WebinarTestimonialSlider from "@/components/slider/WebinarTestimonialSlider";

export default function Webniar_Section4() {
    return (
        <>
            <section className="section background-grey spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">What They Say</h2>
                    </div>
                    <div className="block-testimonial layout-07">
                        <div className="swiper uxp-swiper-slider testimonial-slider">
                            <WebinarTestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}