// App.js
import React, { useState } from "react";
import introScreen from "./images/introScreen.svg";
import "./App.css";
import Screen1 from "./Components/Screen1";
import Screen2 from "./Components/Screen2";
import Screen3 from "./Components/Screen3";
import Screen4 from "./Components/Screen4";
import AllRoutes from "./Components/AllRoutes";

const styledComponent = {
  backgroundImage: "url(../images/introScreen.svg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

const App = () => {
  return (
    <div className="container">
      <AllRoutes/>
    </div>
  );
};

export default App;

/* Intro Screen */

// position: relative;
// width: 1512px;
// height: 982px;

// background: #FFFFFF;
