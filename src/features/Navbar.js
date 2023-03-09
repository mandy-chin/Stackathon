import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-end">
      <Link to="/home">
        <p className="text-yellow">Home</p>
      </Link>
      <Link to="/about">
        <p className="text-yellow">About</p>
      </Link>
    </div>
  );
};

export default Navbar;
