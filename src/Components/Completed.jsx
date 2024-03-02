import React from "react";
import { Link } from "react-router-dom";
import backbtn from "../images/backArrow.png";

const Completed = () => {
  return (
    <div className="container">
      <div className="final">
        <Link to="/activity">
          <img className="backbtn" src={backbtn} />
        </Link>
        <progress className="progressBar" value="100" max="100" />
      </div>
    </div>
  );
};

export default Completed;
