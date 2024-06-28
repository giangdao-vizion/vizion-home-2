import dynamic from 'next/dynamic';

const BusinessFilterItems = dynamic(() => import('./BusinessFilterItems'), {
    ssr: false,
})

export default function BusinessSection() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="portfolio-middle portfolio-isotope">
                        <BusinessFilterItems />
                    </div>
                    {/* <div className="pagination align-center loadmore">
                        <div className="inner">
                            <Link href="/" title="Load More">
                                <i className="las la-redo-alt" />
                                Load More
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
