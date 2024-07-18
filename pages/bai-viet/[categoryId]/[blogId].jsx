import Layout from '@/components/layout/Layout';
import BlogSection from '@/components/vizion/Blog/BlogSection';
import BlogTitle from '@/components/vizion/Blog/BlogTitle';
import Banner from '@/components/vizion/Home/Banner';
import { blogDetailPagesMock } from '@/mock/blog';
import { useRouter } from 'next/router';

export default function BlogDetail(props) {
  const router = useRouter();
  const { blogId } = router.query || {};
  const blogDetailData = blogDetailPagesMock.find(blog => blogId === String(blog.id));

  return (
    <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
      <Banner
        title={<BlogTitle {...props} />}
        iframeUrl="https://www.youtube.com/embed/SgvqXpPo6Ts?si=0RWsZPLbmiCKhRLp&autoplay=1&mute=1&loop=1&controls=0&playlist=SgvqXpPo6Ts&vq=hd1080"
      />
      <div className="container blog-detail-page">
        {blogDetailData ? (
          blogDetailData.sections.map((section, index) => (
            <div className="section-container" key={index}>
              <BlogSection blogSectionData={section} />
            </div>
          ))
        ) : (
          <p>Không tìm thấy bài viết</p>
        )}
      </div>
    </Layout>
  );
}
