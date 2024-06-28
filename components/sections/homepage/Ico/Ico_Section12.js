import Link from "next/link";
export default function Ico_Section12() {

    return (
        <>
            <section className="section background-grey spdtb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="pdr30">
                                <div className="heading mb32">
                                    <div className="heading-sub color-navy">OUR DATA</div>
                                    <h2 className="heading-title size-l">Token Distribution</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button text color-navy" title="Know More">Know More <i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="block-chart lg-mt32">
                                    <img src="/assets/images/chart.png" alt="" className="img-fluid" />
                                <div className="chart-list">
                                    <ul>
                                        <li><span style={{ backgroundColor: '#c6db03' }} />Distribute to Community: 11%</li>
                                        <li><span style={{ backgroundColor: '#FF1F25' }} />Reserved Funding: 12%</li>
                                        <li><span style={{ backgroundColor: '#A3276A' }} />Founders and Team: 10%</li>
                                        <li><span style={{ backgroundColor: '#052D84' }} />Partner/Investor: 5%</li>
                                        <li><span style={{ backgroundColor: '#0057FC' }} />Bounty campaign: 8%</li>
                                        <li><span style={{ backgroundColor: '#FFDD0F' }} />Product Develoment: 40%</li>
                                        <li><span style={{ backgroundColor: '#FE8202' }} />Marketing: 14%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}