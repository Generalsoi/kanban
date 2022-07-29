import React from "react";
import Logo from "../../assets/images/logo.png";
import MenuIcon from "../../assets/images/menuicons.png";

const Sidebar = () => {
  //created an array containing the menus in the sidebar.
  const sidebarMenu = ["Platform Launch", "Marketing Plan", "Roadmap"];
  return (
    <div>
      <div className="w-full p-4 flex gap-3 items-center">
        <img src={Logo} alt="kanban logo" />
        <h4 className="font-jakarta font-extrabold text-3xl">kanban</h4>
      </div>

      <div className="w-full my-4">
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
    </div>
  );
};

export default Sidebar;
