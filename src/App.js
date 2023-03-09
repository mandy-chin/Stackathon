import React from "react";
import "./app.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./features/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
