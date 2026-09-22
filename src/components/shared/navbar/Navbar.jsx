import React from "react";
import { NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";



const Navbar = () => {

  const links =( <>
  <li className="flex items-center gap-2">
    <NavLink to={"/"} className={({isActive})=>isActive?"text-white bg-[#244D3F]":""}>
      <RiHome2Line size={24} />
      Home
    </NavLink>
  </li>
  <li className="flex items-center gap-2">
    <NavLink to={"/books"} className={({isActive})=>isActive?"text-white bg-[#244D3F]":""} >
      <RiTimeLine size={24} />
      Timeline
    </NavLink>
  </li>
  <li className="flex items-center gap-2">
    <NavLink to={"/statspage"} className={({isActive})=>isActive?"text-white bg-[#244D3F]":""}>
      <TfiStatsUp size={24} />
      Stats
    </NavLink>
  </li>
  
  </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
