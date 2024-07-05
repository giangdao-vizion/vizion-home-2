import Link from 'next/link';
import React from 'react';

export default function Industry({ dataLiveDemo }) {
  return (
    <div className="spec-industry-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-middle">
              <div className="row">
                {dataLiveDemo.map((data, index) => (
                  <div className="col-lg-4 col-sm-6 col-12" key={index}>
                    <article className="post post-grid format-video post-featured style-card spec-industry-post">
                      <div className="entry-thumbnail spec-industry-icon--top">
                        <div className="spec-industry-icon--top-cover"></div>
                        <img src={data.imageUrl} className="spec-industry-img" alt="spec-industry-image" />
                      </div>
                      <div className="entry-content spec-industry-entry--content">
                        <div className="entry-title spec-industry--entry-title">
                          <h3>{data.title}</h3>
                        </div>

                        <div className="spec-industry-desc">{data.desc}</div>
                        <Link href={'/'}>
                          <button className="spec-industry-btn">Xem demo</button>
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
