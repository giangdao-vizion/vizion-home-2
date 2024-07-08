import { SECTION_TYPE } from '@/constants/blog';
import { useMemo } from 'react';

const BlogH1 = ({ content }) => {
  return <h1>{content}</h1>;
};

const BlogP = ({ content }) => {
  return <p dangerouslySetInnerHTML={{ __html: content }}></p>;
};

const BlogImg = ({ content, extra }) => {
  return (
    <div className="img-content">
      <img src={content} alt="" />
      {/* image information */}
      {extra?.[SECTION_TYPE.P] && <p dangerouslySetInnerHTML={{ __html: extra[SECTION_TYPE.P] }}></p>}
    </div>
  );
};

const BlogUl = ({ content, extra }) => {
  // TODO: add extra content here
  return (
    <div className="ul-content">
      <ul>
        {content.map((contentData, index) => (
          <li key={index}>
            <p dangerouslySetInnerHTML={{ __html: contentData[SECTION_TYPE.P] }}></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function BlogSection({ blogSectionData }) {
  const getSectionType = useMemo(() => {
    return Object.keys(blogSectionData).reduce((sectionType, key) => {
      if (key !== SECTION_TYPE.EXTRA) sectionType = key;
      return sectionType;
    }, null);
  }, [blogSectionData]);

  const renderHtml = type => {
    switch (type) {
      case SECTION_TYPE.H1:
        return <BlogH1 content={blogSectionData[type]} extra={blogSectionData[SECTION_TYPE.EXTRA]} />;
      case SECTION_TYPE.P:
        return <BlogP content={blogSectionData[type]} extra={blogSectionData[SECTION_TYPE.EXTRA]} />;
      case SECTION_TYPE.IMG:
        return <BlogImg content={blogSectionData[type]} extra={blogSectionData[SECTION_TYPE.EXTRA]} />;
      case SECTION_TYPE.UL:
        return <BlogUl content={blogSectionData[type]} extra={blogSectionData[SECTION_TYPE.EXTRA]} />;
      default:
        return null;
    }
  };

  return <div className="blog-detail-container">{renderHtml(getSectionType)}</div>;
}
