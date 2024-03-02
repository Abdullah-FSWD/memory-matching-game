import React from "react";
import yes3 from "../images/yes3.png";
import backbtn from "../images/backArrow.png";
import { Link } from "react-router-dom";

const Screen3 = () => {
  return (
    <div className="container">
      <div className="bgimg3">
        <Link to="/page2">
          <img className="backbtn" src={backbtn} />
        </Link>
        <Link to="/page4">
          <img className="btn" src={yes3} />
        </Link>
      </div>
    </div>
  );
};

export default Screen3;
