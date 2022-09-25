import React from "react";

import TitleImage from "../../common/Assets/Images/titleImage.png";

export default function TitleBar() {
  return (
    <div className="titlebar">
      <div className="left">
        <img src={TitleImage} alt="foodoo" />
        <div >
          <h2>Only the best recipes</h2>
          <p>Todays new recipes for you</p>
        </div>
      </div>
      <div className="right">
        <div className="tutorials">
          <h2>168</h2>
          <span>Tutorials</span>
        </div>
        <div>
          <h2>304</h2>
          <span>recipes</span>
        </div>
      </div>
    </div>
  );
}
