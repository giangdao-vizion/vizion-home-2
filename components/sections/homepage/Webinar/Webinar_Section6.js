import WebinarSpeakerSlider from "@/components/slider/WebinarSpeakerSlider";

export default function Webniar_Section6() {

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Our Speakers</h2>
                    </div>
                    <div className="block-team layout-03">
                        <div className="swiper uxp-swiper-slider">
                            <WebinarSpeakerSlider />
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}