import React, { useState } from "react";
import Sidebar from "./../sidebar/sidebar";
import Content from "./../content/content";

const Dashboard = () => {
  // creating a state for hiding and showing sidebar
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="flex">
      <div
        className={`${
          sidebar ? "sm:w-1/5" : "w-0"
        } w-0 lg:block h-screen border-r-1 border-r-[#E4EBFA]`}
      >
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <div
        className={`bg-[#F4F7FD] dark:bg-[#20212C] h-screen ${
          sidebar ? "sm:w-4/5" : "w-full"
        } w-full`}
      >
        <Content sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
};

export default Dashboard;
