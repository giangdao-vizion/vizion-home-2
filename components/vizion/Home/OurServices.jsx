import Link from 'next/link';
export default function OurServices() {
  const ourServicesData = [
    {
      imageUrl: '/assets/images/vizion/our-services/pano1.jpeg',
      title: '360° Business Tours',
      desc: 'Giới thiệu các địa điểm kinh doanh của bạn bằng tour tham quan 360° của chúng tôi.',
      link: '',
    },
    {
      imageUrl: '/assets/images/vizion/our-services/pano1.jpeg',
      title: '360° Tours Integration',
      desc: 'Nâng tầm thương hiệu với trải nghiệm 3D được tùy chỉnh theo nhu cầu kinh doanh của bạn.',
      link: '',
    },
    {
      imageUrl: '/assets/images/vizion/our-services/pano1.jpeg',
      title: 'Custom 3D Experience',
      desc: 'Tối ưu hoá doanh nghiệp, phục vụ nhu cầu cụ thể và tạo ra trải nghiệm 3D độc đáo.',
      link: '',
    },
  ];
  return (
    <>
      <section className="section background-grey spdt spdb vizion-our-services">
        <div className="container">
          <div className="heading align-center">
            <h2 className="heading-title size-l">3 Giải Pháp</h2>
            <div className="heading-desc">Dịch vụ của chúng tôi.</div>
          </div>
          <div className="block-image-box layout-04">
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
