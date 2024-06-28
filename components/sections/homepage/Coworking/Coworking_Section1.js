
export default function Coworking_Section1() {
    return (
        <>
            <section className="section linear-gradient-01 opt160 spdb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pdr100">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">COWORKING Space</div>
                                    <h2 className="heading-title size-xl">A place to develop your dreams</h2>
                                </div>
                                <form action="#" className="form-location">
                                    <div className="field-select">
                                        <label htmlFor="location">Where'd you like your office at?</label>
                                        <select name="location" id="location">
                                            <option value={0}>Select location</option>
                                            <option value="fr">France</option>
                                            <option value="gb">United Kingdom</option>
                                            <option value="us">United States</option>
                                        </select>
                                    </div>
                                    <div className="field-submit">
                                        <input type="submit" defaultValue="Start" name="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="lg-mt32 wow animate__animated   animate__fadeInRight" src="/assets/images/coworking-01.png" alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}