import CryptoTestimonialSlider from "@/components/slider/CryptoTestimonialSlider";


export default function Dating_Section7() {
    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36">
                            <g fill="none" fillRule="evenodd">
                                <g fill="#0057FC" fillRule="nonzero">
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M8.266 16.609v3.039h7.163V36H0V16.608c0-6.17 1.675-10.752 4.98-13.62C7.264 1.007 10.157 0 13.577 0v8.76c-1.856 0-5.312 0-5.312 7.849zm25.884-7.85V0c-3.42 0-6.313 1.006-8.6 2.989-3.303 2.867-4.979 7.449-4.979 13.62V36H36V19.648h-7.163v-3.04c0-7.848 3.456-7.848 5.313-7.848z" transform="translate(-702.000000, -4038.000000) translate(0.000000, 1050.000000) translate(135.000000, 2988.000000) translate(567.000000, 0.000000)" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <h2 className="heading-title size-l">People Who Already Love Us</h2>
                    </div>
                    <div className="block-testimonial layout-03 item-grey">
                        <div className="swiper uxp-swiper-slider testimonial-slider" data-pagination="testimonial-pagination" data-direction="horizontal" data-slider-center="false" data-slider-loop="false" data-gap-xl={30} data-gap-md={10} data-xl={3} data-lg={2} data-md={1} data-sm={1} data-xs={1} data-es={1}>
                            <CryptoTestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}