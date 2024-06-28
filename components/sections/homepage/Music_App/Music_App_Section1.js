export default function Music_App_Section1() {
    return (
        <>
            <section className="section section-banner has-shape background-grey opt120">
                <div className="shape-bottom h50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" fill="var(--sala-neutral-white, $neutral_white)" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z" />
                    </svg>
                </div>
                <div className="container">
                    <div className="heading align-center mb32">
                        <h2 className="heading-title size-xl">Anytime. Anywhere. <br /> All your music.</h2>
                        <div className="heading-desc size-l">Listen and contribute to your favorite music.</div>
                    </div>
                    <div className="apps flex-content-c m220">
                        <img src="/assets/images/app-store.png" alt="App Store" />
                        <img src="/assets/images/google-play.png" alt="Google Play" />
                    </div>
                    <img className="mt60 mb24 wow animate__animated   animate__zoomIn" src="/assets/images/hma-01.png" alt="Banner" />
                </div>
            </section>
        </>
    )
}