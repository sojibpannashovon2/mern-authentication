import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between border border-slate-700 mb-32 rounded-md shadow-md bg-orange-300 px-14 py-4">
        <Link to={`/`}>Home</Link>
        <Link to={`/login`}>Login</Link>
        <Link to={`/signup`}>Logout</Link>
      </div>
    </>
  );
};

export default Navbar;
