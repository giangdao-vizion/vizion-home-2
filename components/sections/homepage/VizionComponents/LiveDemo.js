import LiveDemoItem from "./LiveDemoItem";

export default function LiveDemo({ dataLiveDemo, swiperCustom }) {

    return (
        <>

            <section className="section spdt overflow-hidden mb-5">
                <div className="container">
                    <div className="block-gallery layout-04">
                        <div className="row row-full">
                            <div className="col-lg-12 col-full-right">
                                <div className="swiper uxp-swiper-slider">
                                    <LiveDemoItem dataLiveDemo={dataLiveDemo} swiperCustom={swiperCustom} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}