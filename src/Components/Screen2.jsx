import React from "react";
import "./Style.css";
import next2 from "../images/next2.png";
import backbtn from "../images/backArrow.png";
import { Link } from "react-router-dom";

const Screen2 = () => {
  return (
    <div className="container">
      <div className="bgimg2">
        <Link to="/">
          <img className="backbtn" src={backbtn} />
        </Link>
        <Link to={"/page3"}>
          <img className="btn" src={next2} />
        </Link>
      </div>
    </div>
  );
};
export default Screen2;
