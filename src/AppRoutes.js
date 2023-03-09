import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./features/Home";
import Recipe from "./features/Recipe";
import Cooking from "./features/Cooking";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/cooking" element={<Cooking />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
