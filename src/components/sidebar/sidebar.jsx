import React from "react";
import Logo from "../../assets/images/logo.png";

const Sidebar = () => {
  return (
    <div>
      <div className="w-full p-4 flex">
        <img src={Logo} alt="kanban logo" />
        <h4>kanban</h4>
      </div>
    </div>
  );
};

export default Sidebar;
