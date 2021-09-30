import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";



export default function Navbar() {

  return (
    <header className=" max-w-screen-sm:hidden sticky px-4 top-0 fixed z-10 bg-green-600">
      <div className="border-solid container mx-auto flex justify-between">
      
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="flex flex-col justify-center items-center px-3 mr-4 text-black-500 hover:text-red-800 text-4xl font-bold cursive tracking-widest"

          >
            Brian Hinchey
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-500 hover:text-red-800"
            activeClassName="text-blue-100 bg-black-700"
          >
            Skills
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-500 hover:text-red-800"
            activeClassName="text-blue-100 bg-black-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-500 hover:text-red-800"
            activeClassName="text-blue-100 black-700"
          >
            Contact Me
          </NavLink>
          <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
            <div className="flex  md:flex-row justify-between items-center">
          

             
            </div>
          </div>

        </nav>
        <div className=" align-baseline py-6 px-6 my-8">
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