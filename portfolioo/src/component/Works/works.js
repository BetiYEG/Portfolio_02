import React, { useState } from "react";
import "./works.css";
import Portfolio1 from "../../asset/portpolio1.jpg";
import Portfolio12 from "../../asset/portpolio12.jpg";
import Portfolio13 from "../../asset/portpolio13.jpg";
import Portfolio14 from "../../asset/portpolio14.png";
import Portfolio2 from "../../asset/portpolio2.png";
import Portfolio3 from "../../asset/portpolio3.png";

const Works = () => {
  const [showMoreClicks, setShowMoreClicks] = useState(0);

  const handleSeeMore = () => {
    setShowMoreClicks(showMoreClicks + 1);
  };

  const handleSeeLess = () => {
    setShowMoreClicks(0);
  };

  const displayPictures = () => {
    if (showMoreClicks === 1) {
      return (
        <>
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio12} alt="" className="worksImg" />
          <img src={Portfolio13} alt="" className="worksImg" />
          <img src={Portfolio14} alt="" className="worksImg" />
          <img src={Portfolio2} alt="" className="worksImg" />
          <img src={Portfolio3} alt="" className="worksImg" />
        </>
      );
    } else if (showMoreClicks === 2) {
      return (
        <a href="https://github.com/BetiYEG" target="_blank" className="workBtn" rel="noopener noreferrer">
          GitHub Repository
        </a>
      );
    } else {
      return (
        <>
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio12} alt="" className="worksImg" />
          <img src={Portfolio13} alt="" className="worksImg" />
        </>
      );
    }
  };

  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <div className="worksDesc">
        <span>The smallest detailed description of my project in the image is given below:</span>
      </div>
      <div className="worksImgs">
        {displayPictures()}
      </div>
      {showMoreClicks < 2 ? (
        <button onClick={handleSeeMore} className="workBtn">
          See More
        </button>
      ) : (
        <button onClick={handleSeeLess} className="workBtn">
          See Less
        </button>
      )}
    </section>
  );
};

export default Works;