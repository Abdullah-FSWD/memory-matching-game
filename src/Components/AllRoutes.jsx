import React from "react";
import { Routes, Route } from "react-router-dom";
import Screen1 from "./Screen1";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen2 from "./Screen2";
import ActivityScreen from "./ActivityScreen";
import OutOfMoves from "./OutOfMoves";
import Completed from "./Completed";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<Screen1 />} path="/" />
        <Route element={<Screen2 />} path="/page2" />
        <Route element={<Screen3 />} path="/page3" />
        <Route element={<Screen4 />} path="/page4" />
        <Route element={<ActivityScreen />} path="/activity" />
        <Route element={<OutOfMoves />} path="/outOfMoves" />
        <Route element={<Completed />} path="/completed" />
      </Routes>
    </div>
  );
};

export default AllRoutes;
