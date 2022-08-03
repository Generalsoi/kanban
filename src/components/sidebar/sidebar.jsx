import React from "react";
import Logo from "../../assets/images/logo.png";
import MenuIcon from "../../assets/images/menuicons.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  //created an array containing the menus in the sidebar.
  const sidebarMenu = ["Platform Launch", "Marketing Plan", "Roadmap"];
  return (
    <div className="bg-white dark:bg-[#2B2C37] h-screen">
      <div className="w-full p-4 flex gap-3 items-center ">
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
          <ul>
            {sidebarMenu.map((menu) => (
              <li className="w-full h-12 p-4 text-mediumGrey flex items-center gap-3 cursor-pointer font-jakarta text-sm">
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

      <div className="h-1/3">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-toggle-off" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
