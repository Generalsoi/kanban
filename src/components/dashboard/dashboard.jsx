import React, { useState } from "react";
import Sidebar from "./../sidebar/sidebar";
import Content from "./../content/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  // creating a state for hiding and showing sidebar
  const [sidebar, setSidebar] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <div className="flex relative">
      <div
        className={`${sidebar ? "sm:w-1/5 w-0" : "w-0"} ${
          mobile ? "w-40 z-40" : "w-0"
        }  w-0 lg:block h-screen border-r-1 border-r-[#E4EBFA]`}
      >
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} mobile={mobile} />
      </div>
      <div
        className={`bg-[#F4F7FD] dark:bg-[#20212C] h-screen ${
          sidebar ? "sm:w-4/5 w-full" : "w-full"
        } w-full`}
      >
        <Content sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      {/* <div className="fixed top-0">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div> */}
      <div
        className="fixed top-5 left-4 sm:hidden z-50"
        onClick={() => setMobile(!mobile)}
      >
        <div className="w-7 h-1 mb-1 rounded-full bg-[#635FC7] dark:bg-white"></div>
        <div className="w-7 h-1 mb-1 rounded-full bg-[#635FC7] dark:bg-white"></div>
        <div className="w-7 h-1 mb-1 rounded-full bg-[#635FC7] dark:bg-white"></div>
      </div>
    </div>
  );
};

export default Dashboard;
