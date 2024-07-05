import Link from 'next/link';
export default function OurServices() {
  const ourServicesData = [
    {
      imageUrl: '/assets/images/vizion/our-services/pano1.jpeg',
      title: 'Giải Pháp Virtual 360',
      // desc: 'Giới thiệu các địa điểm kinh doanh của bạn bằng tour tham quan 360° của chúng tôi.',
      link: '',
    },
    {
      imageUrl: '/assets/images/vizion/our-services/pano1.jpeg',
      title: 'VR Room',
      // desc: 'Nâng tầm thương hiệu với trải nghiệm 3D được tùy chỉnh theo nhu cầu kinh doanh của bạn.',
      link: '',
    },
    {
      imageUrl: '/assets/images/vizion/our-services/pano1.jpeg',
      title: 'Showroom 3D',
      // desc: 'Tối ưu hoá doanh nghiệp, phục vụ nhu cầu cụ thể và tạo ra trải nghiệm 3D độc đáo.',
      link: '',
    },
  ];
  return (
    <>
      <section className="section spdt spdb vizion-our-services min-vh100 flex flex-align-c">
        <div className="container">
          <div data-wow-delay="0.2s" className="heading align-center wow animate__animated animate__fadeInRight">
            <h2 className="heading-title size-l">Giải Pháp Phục Vụ Cho Doanh Nghiệp</h2>
          </div>
          <div data-wow-delay="0.2s" className="block-image-box align-items-center layout-04 wow animate__animated animate__fadeInRight">
            {ourServicesData.map((data, index) => (
              <div className="image-box" key={index}>
                <div className="thumbnail">
                  <img src={data.imageUrl} className="thumb-img" alt="Thumbnail" />
                </div>
                <div className="content">
                  <h4 className="title">{data.title}</h4>
                  <div className="desc">{data.desc}</div>
                  <div className="button-wrap">
                    <Link href="/contact-01" className="button text" title="Xem thêm">
                      Xem thêm <i className="las la-long-arrow-alt-right color-navy" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
