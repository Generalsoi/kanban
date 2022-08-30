import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import MenuIcon from "../../assets/images/menuicons.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LightMode from "../../assets/images/lightmode.png";
import DarkMode from "../../assets/images/darkmode.png";
import EyeIcon from "../../assets/images/eye.png";

const Sidebar = (props) => {
  // creating an object destructuring for passing down the props
  const { sidebar, setSidebar, mobile } = props;
  console.log(sidebar);

  //created an array containing the menus in the sidebar.
  const sidebarMenu = ["Platform Launch", "Marketing Plan", "Roadmap"];

  // creating a dark state so I can toggle
  const [dark, setDark] = useState(false);

  // creating an active state for switching between different menus
  const [active, setActive] = useState("Platform Launch");

  // creating a function to handle the switch on clicking the toggle button.
  // const handleSwitch = () => {
  //   setDark(!dark);
  // };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className={` dark:bg-[#2B2C37] h-screen`}>
      <div className={` w-full p-4 flex gap-3 items-center `}>
        <img src={Logo} alt="kanban logo" />
        <h4 className="font-jakarta font-extrabold text-3xl text-[#000112] dark:text-white">
          kanban
        </h4>
      </div>

      <div className="w-full h-2/3 my-4">
        <p className="m-4 text-xs font-jakarta font-bold text-mediumGrey">
          ALL BOARDS (3)
        </p>
        <div>
          <ul className="pr-8">
            {sidebarMenu.map((menu, index) => (
              <li
                key={index}
                className={`w-full h-12 p-4  flex items-center gap-3 cursor-pointer font-jakarta text-sm ${
                  active === menu && "bg-[#635FC7]"
                } ${active === menu ? "text-white" : "text-mediumGrey"} ${
                  active === menu && "rounded-r-full"
                } `}
                onClick={() => setActive(menu)}
              >
                <img src={MenuIcon} alt="menuicon" /> {menu}
              </li>
            ))}

            <li className="w-full h-12 p-4 text-[#635FC7] cursor-pointer flex items-center gap-3 font-jakarta text-sm font-bold">
              <img src={MenuIcon} alt="menuicon" />
              +Create New Board
            </li>
          </ul>
        </div>
      </div>

      <div className="h-1/3 p-4 w-full">
        <div className="flex w-full rounded h-10 p-2 justify-center items-center gap-2 bg-[#F4F7FD] dark:bg-[#20212C]">
          <img
            className="cursor-pointer"
            onClick={() => setDark(false)}
            src={LightMode}
            alt="light mode"
          />
          {/* {dark ? (
            <img src={ToggleOn} alt="dark mode on" />
          ) : (
            <img src={ToggleOff} alt="dark mode off" />
          )} */}

          {/* this is the div for the toggle*/}
          <div
            className="w-10 h-4 rounded-full p-1 bg-[#635FC7] cursor-pointer"
            onClick={() => setDark(!dark)}
          >
            <div
              className={`w-2 h-2 rounded-full bg-white transition-all duration-500 ${
                dark ? "translate-x-[300%]" : "translate-x-0"
              } ${!sidebar && "hidden"}`}
            ></div>
          </div>

          <img
            className="cursor-pointer"
            onClick={() => setDark(true)}
            src={DarkMode}
            alt="dark mode"
          />
        </div>
        <p
          className="text-[#828FA3] mt-4 font-bold font-jakarta flex items-center gap-2 cursor-pointer transition-all duration-500"
          onClick={() => setSidebar(false)}
        >
          <img src={EyeIcon} alt="eye-icon" />
          Hide sidebar
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
