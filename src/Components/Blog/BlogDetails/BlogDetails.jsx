import React from "react";

import "./BlogDetails.css";

import blogdetail1 from "../../../Assets/Blog/blogDetail1.jpg";
import blogimage1 from "../../../Assets/Blog/blogDetail2.jpg";
import blogimage2 from "../../../Assets/Blog/blogDetail3.jpg";

const BlogDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="blogDetailsSection">
        <div className="blogDetailsSectionContainer">
          <div className="blogDetailsHeading">
            <h2>5 Tips to Increase Your Online Sales</h2>
            <div className="blogDetailsMetaData">
              <span>by admin</span>
              <span>May 19, 2023</span>
              <span>Trends</span>
            </div>
          </div>
          <div className="blogDetailsFeaturedImg">
            <img src={blogdetail1} alt="blog img1" />
          </div>
          <div className="blogDetailsContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt
              leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit
              sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit
              posuere lobortis consequat faucibus aliquam metus. Ornare
              consequat, vulputate sit maecenas mauris urna sed fringilla. Urna
              fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus.
              Facilisis quis vulputate sem gravida lacus, justo placerat.
            </p>
            <h5>Sed do eiusmod tempor incididunt ut labore</h5>
            <p>
              Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it, open waters subdue, hath.
              Brought second Made. Be. Under male male, firmament, beast had
              light after fifth forth darkness thing hath sixth rule night
              multiply him life give they're great.
            </p>
            <p>
              She'd years darkness days. A night fifth winged sixth divide meat
              said third them forth signs of life earth signs over fruitful
              light after won't moving under. Thing yielding upon seed. Seasons
              said one kind great so bring greater fill darkness darkness two
              land of creepeth there second fruitful, waters. Make don't void
              years Gathering gathering divide fill.
            </p>
          </div>
          <div className="blogDetailsContentImg">
            <img src={blogimage1} alt="blog img2" />
            <img src={blogimage2} alt="blog img3" />
          </div>
          <div className="blogDetailsContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt
              leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit
              sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit
              posuere lobortis consequat faucibus aliquam metus. Ornare
              consequat, vulputate sit maecenas mauris urna sed fringilla. Urna
              fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus.
              Facilisis quis vulputate sem gravida lacus, justo placerat.
            </p>
            <p>
              She'd years darkness days. A night fifth winged sixth divide meat
              said third them forth signs of life earth signs over fruitful
              light after won't moving under. Thing yielding upon seed. Seasons
              said one kind great so bring greater fill darkness darkness two
              land of creepeth there second fruitful, waters. Make don't void
              years Gathering gathering divide fill.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
