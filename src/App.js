import React from "react";
import "./app.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./features/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-green">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
