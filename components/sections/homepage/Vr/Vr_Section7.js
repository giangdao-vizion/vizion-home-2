import CryptoTestimonialSlider from "@/components/slider/CryptoTestimonialSlider";


export default function Vr_Section7() {
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Customer reviews</h2>
                        <div className="heading-desc">Easy to switch, upgrade, or cancel at any time.</div>
                    </div>
                    <div className="block-testimonial item-border layout-03">
                        <div className="swiper uxp-swiper-slider testimonial-slider">
                            <CryptoTestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}