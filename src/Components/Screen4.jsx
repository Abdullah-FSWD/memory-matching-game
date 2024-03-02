import React from "react";
import play from "../images/play4.png";
import backbtn from "../images/backArrow.png";
import { Link } from "react-router-dom";

const Screen4 = () => {
  return (
    <div className="container">
      <div className="bgimg4">
        <Link to="/page3">
        <img className="backbtn" src={backbtn} />
        </Link>
        
        <Link to="/activity">
        <img className="btn" src={play} />

        </Link>
      </div>
    </div>
  );
};

export default Screen4;
