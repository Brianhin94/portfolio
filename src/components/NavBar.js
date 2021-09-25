import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";



export default function Navbar() {

  return (
    <header className="sticky top-0 fixed z-10 bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="flex flex-col justify-center items-center px-3 mr-4 text-blue-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"

          >
            Brian Hinchey
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-Purple-800"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Skills
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
            activeClassName="text-blue-100 bg-blue-700"
          >
            About Me
          </NavLink>
          <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
            <div className="flex  md:flex-row justify-between items-center">
          

             
            </div>
          </div>

        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.instagram.com/callmederry/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://github.com/Brianhin94"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/brian-hinchey/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </header>
  );
}