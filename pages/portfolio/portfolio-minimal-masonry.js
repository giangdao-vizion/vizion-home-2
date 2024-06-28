import Layout from "@/components/layout/Layout";
import dynamic from 'next/dynamic';
import Link from "next/link";
const PortfolioFilterOne = dynamic(() => import('@/components/portfolio/PortfolioFilterOne'), {
    ssr: false,
})
export default function PorfolioMinimalMasonary() {
    return (
        <>
            <Layout
                pageTitle="Minimal  Masonry"
                pageTitleDesc="Take a look at our recent projects"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-middle portfolio-isotope">
                            <PortfolioFilterOne portfolioStyle="masonary style-minimal" />
                            </div>
                            <div className="pagination align-center loadmore">
                                <div className="inner">
                                    <Link href="/" title="Load More"><i className="las la-redo-alt" />Load More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
