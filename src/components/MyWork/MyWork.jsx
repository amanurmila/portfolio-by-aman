import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import my_work_data from "../../assets/mywork_data";
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id="work" className="my-work">
      <div className="my-work-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="my-work-container">
        {my_work_data.map((work, index) => {
          return <>
            <img key={index} src={work.w_img} alt="" />
          </>;
        })}
      </div>
      <div className="my-work-show-more">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
