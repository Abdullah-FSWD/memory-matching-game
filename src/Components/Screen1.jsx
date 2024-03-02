import React from "react";
import "./Style.css";
import start1 from "../images/start1.png";
import { Link } from "react-router-dom";

const Screen1 = () => {
  return (
    <div className="container">
      <div className="bgimg1">
        <Link to={"/page2"}>
          <img className="btn" src={start1} />
        </Link>
      </div>
    </div>
  );
};

export default Screen1;
