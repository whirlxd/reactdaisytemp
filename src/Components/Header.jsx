import React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import Headroom from "react-headroom";

function Header() {
  return (
    <Headroom
      style={{
        webkitTransition: "all .10s ease-in-out",
        mozTransition: "all .10s ease-in-out",
        oTransition: "all .10s ease-in-out",
        transition: "all .1s ease-in-out",
        opacity: 50,
      }}
    >
      <div className="navbar transparent">
        <div className="navbar-start bg-transparent">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-neutral lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52"
            >
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
            </ul>
          </div>
          <a
            href="#maine"
            className="btn btn-ghost normal-case text-xl hove:bg-base-100"
          >
            CYBERSEC101
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="#features">Vulnerbalities</a>
            </li>
            <li>
              <a href="#faq">HTTP(s)</a>
            </li>
            <li>
              <a href="#prevention">Resources</a>
            </li>
            <li>
              <a href="#team">Practices</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </Headroom>
  );
}

export default Header;
