import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const links = <>
    <Link to="/alltasks" className="bg-green-800 text-white text-lg font-bold px-3 py-1.5 rounded-md">All Tasks</Link>
  </>
  return (
    <div>
      <div className="navbar bg-teal-100 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn text-xl text-teal-800 italic">Orbitask</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn bg-purple-600 text-white">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
