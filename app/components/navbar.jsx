import React from "react";

export default function navbar() {
  return (
    <div className="navbar fixed bg-transparent ps-1 pe-4 lg:ps-10 lg:pe-10">
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
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Me</a>
              <ul className="p-2">
                <li>
                  <a>Education</a>
                </li>
                <li>
                  <a>Experience</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="text-xl">AlitWira</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>About Me</summary>
              <ul className="p-2">
                <li>
                  <a>Education</a>
                </li>
                <li>
                  <a>Experience</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className=" text-white bg-gray-800 border border-black hover:text-white px-4 py-2 transition-all duration-300 hover:bg-pink-600 hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_0_0_black] active:translate-x-0 active:translate-y-0 active:shadow-none">
          Hire Me !
        </button>
      </div>
    </div>
  );
}
