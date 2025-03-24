import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="relative">
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 bg-richblack-800">
        {/* Logo - Left */}
        <div className="w-[120px] md:w-[160px]">
          <Link to="/">
            <img src={logo} className="w-full" loading="lazy" alt="Logo" />
          </Link>
        </div>

        {/* Navigation - Center - Hidden on mobile */}
        <nav className="hidden md:block">
          <ul className="flex justify-center gap-x-6 text-richblack-100">
            <li>
              <Link to="/" className="text-yellow-200 text-sm md:text-base hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-yellow-200 text-sm md:text-base hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link to="/content" className="text-yellow-200 text-sm md:text-base hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Buttons - Right - Hidden on mobile */}
        <div className="hidden md:flex justify-end items-center gap-x-4">
          {/* //  1--when user is not logged in then show login and signup button--
        // flase state of isLoggedIn */}
          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-richblack-800 text-sm text-white py-2 px-4 rounded-md border border-yellow-50 hover:bg-yellow-50 hover:text-richblack-900 transition-all">
                Login
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup">
              <button
                // Simulate a successful signup
              className="bg-white py-[8px] px-[12px] rounded-[8px] border border-yellow-700 hover:bg-richblack-700 transition-all duration-200">
                Sign Up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/logout">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logout Successfully");
                }}
                className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:bg-richblack-700 transition-all duration-200"
              >
                Log Out
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:bg-richblack-700 transition-all duration-200">
                Dashboard
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-full left-0 w-full bg-richblack-800 py-4 md:hidden">
          <nav className="px-4">
            <ul className="flex flex-col gap-y-4 text-richblack-100">
              <li>
                <Link to="/" className="text-yellow-200 text-sm hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-yellow-200 text-sm hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/content" className="text-yellow-200 text-sm hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-y-4 px-4 mt-4">
            {!isLoggedIn && (
              <Link to="/login">
                <button className="w-full bg-richblack-800 text-sm text-white py-2 px-4 rounded-md border border-yellow-50 hover:bg-yellow-50 hover:text-richblack-900 transition-all">
                  Login
                </button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/signup">
                <button className="w-full bg-white py-[8px] px-[12px] rounded-[8px] border border-yellow-700 hover:bg-richblack-700 transition-all duration-200">
                  Sign Up
                </button>
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/logout">
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logout Successfully");
                  }}
                  className="w-full bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:bg-richblack-700 transition-all duration-200"
                >
                  Log Out
                </button>
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/dashboard">
                <button className="w-full bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:bg-richblack-700 transition-all duration-200">
                  Dashboard
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
