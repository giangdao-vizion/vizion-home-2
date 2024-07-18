import Layout from '@/components/layout/Layout';
import BlogTitle from '@/components/vizion/Blog/BlogTitle';
import Banner from '@/components/vizion/Home/Banner';
import { blogListMock } from '@/mock/blog';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export default function BlogListIndex(props) {
  return (
    <Layout siteContentClass="pt0 pb0" fixedMenu {...props}>
      <Banner
        title={<BlogTitle {...props} />}
        iframeUrl="https://www.youtube.com/embed/SgvqXpPo6Ts?si=0RWsZPLbmiCKhRLp&autoplay=1&mute=1&loop=1&controls=0&playlist=SgvqXpPo6Ts&vq=hd1080"
      />

      <section className="section blog-list-container background-full spdt spdb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-middle">
                <div className="row">
                  {blogListMock.map((blog, index) => (
                    <div className="col-lg-4 col-sm-6 col-12" key={index}>
                      <article className="post post-grid format-video post-featured">
                        <div className="entry-thumbnail">
                          <Link href={blog.linkBlogUrl} title={blog.title}>
                            <img src={blog.imageUrl} alt={blog.title} />
                          </Link>
                        </div>
                        <div className="entry-content">
                          <div className="entry-category">
                            <Link href={blog.linkCategoryUrl} title={blog.category}>
                              {blog.category}
                            </Link>
                          </div>
                          <div className="entry-title">
                            <h3 className="text-ellipsis line-2">
                              <Link href={blog.linkBlogUrl} title={blog.title}>
                                {blog.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="entry-description">
                            <p>{blog.desc}</p>
                          </div>
                          <div className="entry-action">
                            <Link href="/" title="Xem thêm">
                              Xem thêm
                              <i className="las la-long-arrow-alt-right" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async context => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  };
};
