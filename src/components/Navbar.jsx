// import React from 'react';
import logo from "../assets/navlogoo-removebg-preview.png";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import "animate.css";

const Navbar = () => {
  const { user, handleSignOut } = useContext(authContext);
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/allAdventures", label: "Adventures" },
    { path: "/allBlogs", label: "Blogs" },
    { path: "/updateProfile", label: "Update Profile", private: true },
    { path: "/userProfile", label: "User Profile", private: true },
  ];
  const filteredNavItems = navItems.filter((item) => !item.private || user);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "active text-[#536493] text-xl font-extrabold"
      : "font-thin text-base text-gray-400 hover:text-[#536493]";

  return (
    <div className="w-full fixed z-50">
      <div className="navbar bg-base-100 backdrop-blur-xl bg-white/30 z-50 pt-3 max-w-[1600px] mx-auto">
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
              {filteredNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navLinkClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>
          <div id="logo" className="flex relative">
            <div className=" absolute -top-3 left-3 -rotate-12">
              <img
                className="w-10 animate__animated animate__fadeInTopLeft animate__infinite
          animate__slower "
                src={logo}
                alt=""
              />
            </div>
            <Link to="/" className="font-bold text-primary text-3xl ml-10 z-10">
              <> EcoTrailblazers</>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
            {filteredNavItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end ">
          {user?.email ? (
            <div className="flex gap-2 justify-center items-center">
              <div className="user-info relative ">
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div
                  className="user-name absolute bottom--10 left-0 w-full text-xs  text-center
            font-semibold p-2 rounded opacity-0 transition-opacity duration-300"
                >
                  {user.displayName}
                </div>
              </div>
              <button
                className="btn bg-primary mx-4 text-white btn-sm hover:text-black"
                onClick={handleSignOut}
              >
                logout
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn bg-primary mr-4 text-white btn-sm hover:text-black">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
