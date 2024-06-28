import EmailGallerySlider from "@/components/slider/EmailGallerySlider";

export default function Email_Section5() {
    return (
        <>

            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Our free templates</h2>
                    </div>
                    <div className="swiper uxp-swiper-slider image-full">
                        <EmailGallerySlider />
                    </div>
                </div>
            </section>

        </>
    )
}