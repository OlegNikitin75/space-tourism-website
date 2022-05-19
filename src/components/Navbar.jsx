import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../img/Logo.svg";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  return (
    <div>
      <header
        className="fixed flex items-center justify-between px-4 left-0 right-0 mx-auto h-[96px] lg:mt-10 md:pl-[55px]">
        <Link
          className="flex-none inline-block w-10 h-10 lg:w-12 lg:h-12 md:mr-16 hover:scale-90 transition-all duration-300"
          to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <nav className="relative hidden sm:flex w-full bg-white-rgba h-[100%] px-4 items-center pl-28 md:pl-20 xl:ml-[35vw] lg:ml-[25vw] md:ml-[12vw] backdrop-blur-2xl
          before:absolute 2xl:before:w-[600px] xl:before:w-[500px] lg:before:w-[320px] before:h-[1px]  before:bg-dusty-gray before:right-[calc(100%-30px)]">
          <ul className="flex xl:gap-12 lg:gap-7 md:gap-9 sm:gap-8">
            <li>
              <NavLink
                className="text-sm lg:text-base border-b-2 border-solid border-transparent uppercase tracking-[3px] pb-9 hover:border-dusty-gray transition-all duration-300"
                to="/">
                <span className="mr-2 font-bold hidden lg:inline">00</span>Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm lg:text-base border-b-2 border-solid border-transparent uppercase tracking-[3px] pb-9 hover:border-dusty-gray transition-all duration-300"
                to="/destination">
                <span className="mr-2 font-bold hidden lg:inline">01</span>Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm lg:text-base border-b-2 border-solid border-transparent uppercase tracking-[3px] pb-9 hover:border-dusty-gray transition-all duration-300"
                to="/crew">
                <span className="mr-2 font-bold hidden lg:inline">02</span>Crew
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm lg:text-base border-b-2 border-solid border-transparent uppercase tracking-[3px] pb-9 hover:border-dusty-gray transition-all duration-300"
                to="/technology">
                <span className="mr-2 font-bold hidden lg:inline">03</span>Technology
              </NavLink>
            </li>
          </ul>
        </nav>
        <FaBars onClick={handleClick} className={menu ? "hidden" : "sm:hidden"} size={40}/>
      </header>


      <nav
        className={menu ? "mobile left-0" : "mobile left-[-100%]"} >
        <ul className="flex flex-col gap-12">
          <li>
            <NavLink
              className="text-sm lg:text-base border-b-2 border-solid border-transparent uppercase tracking-[3px] pb-3 hover:border-dusty-gray transition-all duration-300"
              to="/">
              <span className="mr-2 font-bold hidden lg:inline">00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-sm lg:text-base border-b-2 border-solid border-transparent uppercase tracking-[3px] pb-3 hover:border-dusty-gray transition-all duration-300"
              to="/destination">
              <span className="mr-2 font-bold hidden lg:inline">01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-sm lg:text-base border-b-2 border-solid border-transparent uppercase tracking-[3px] pb-3 hover:border-dusty-gray transition-all duration-300"
              to="/crew">
              <span className="mr-2 font-bold hidden lg:inline">02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-sm lg:text-base border-b-2 border-solid border-transparent uppercase tracking-[3px] pb-3
                   hover:border-dusty-gray transition-all duration-300"
              to="/technology">
              <span className="mr-2 font-bold hidden lg:inline">03</span>Technology
            </NavLink>
          </li>
        </ul>
        <FaTimes onClick={handleClick} size={30}/>
      </nav>


    </div>
  );
};

export default Navbar;
