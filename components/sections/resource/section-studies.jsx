import React from 'react';
import Link from 'next/link';
const SectionStudies = () => {
  return (
    <>
      <section className="section studies">
        <div className="page-padding">
          <div className="container w-container">
            <div class="heading studies__heading">
              <h1 class="h1 studies__h1">Case Studies</h1>
              <p class="p studies__subtitle">
                Real Stories, Real Results: dive into Vizion case studies. Explore how our solutions drive growth and
                success for businesses just like yours
              </p>
            </div>
            <div className="studies__filter w-form">this is the filter form </div>
            <div className="w-dyn-list">this is the list </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionStudies;
