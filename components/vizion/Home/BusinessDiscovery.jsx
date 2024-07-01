import dynamic from 'next/dynamic';

const BusinessDiscoveryItem = dynamic(() => import('./BusinessDiscoveryItem'), {
  ssr: false,
});

export default function BusinessDiscovery() {
  return (
    <div className="container">
      <div className="heading align-center">
        <div className="heading-sub color-vizion">SERVING MULTIPLE BUSINESS SECTORS</div>
        <h2 className="heading-title size-l">
          <span className="heading-title-hightlight color-vizion">Ứng Dụng Đa Dạng</span> Cho Nhiều Lĩnh Vực
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="portfolio-middle portfolio-isotope">
            <BusinessDiscoveryItem />
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
