import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-end">
      <Link to="/home">
        <p className="text-yellow mx-3 font-noto mt-3 hover:underline decoration-dotted decoration-taupe">Home</p>
      </Link>
      <p className="text-yellow font-noto mt-3">|</p>
      <Link to="/about">
        <p className="text-yellow mx-3 font-noto mt-3 hover:underline decoration-dotted decoration-taupe">About</p>
      </Link>
    </div>
  );
};

export default Navbar;
