import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem("token");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    console.log("Working");
  };
  return (
    <>
      <div className="flex justify-between border border-slate-700 mb-32 rounded-md shadow-md bg-orange-300 px-14 py-4 font-bold">
        <Link to={`/`}>Home</Link>
        {isUserSignedIn ? (
          <>
            {" "}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-6 py-1 rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={`/login`}>Login</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
