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
        className={`${sidebar ? "sm:w-1/5 w-0" : "sm:w-0"}  ${
          mobile && "fixed z-40 bg-white w-full"
        }  h-screen border-r-1 border-r-[#E4EBFA]`}
      >
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} mobile={mobile} />
      </div>
      <div
        className={`bg-[#F4F7FD] dark:bg-[#20212C] h-screen ${
          sidebar ? "sm:w-4/5" : "w-full"
        } w-full`}
      >
        <Content sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      {/* <div className="fixed top-0">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div> */}
      {!mobile ? (
        <div
          className="fixed top-5 right-4 sm:hidden z-50"
          onClick={() => {
            setMobile(true);
            setSidebar(false);
          }}
        >
          <div
            className={`w-7 h-1 mb-1 rounded-full bg-[#635FC7] dark:bg-white `}
          ></div>
          <div
            className={`w-7 h-1 mb-1 rounded-full bg-[#635FC7] dark:bg-white `}
          ></div>
          <div
            className={`w-7 h-1 mb-1 rounded-full bg-[#635FC7] dark:bg-white `}
          ></div>
        </div>
      ) : (
        <div
          className="fixed top-5 right-4 sm:hidden z-50"
          onClick={() => {
            setMobile(false);
            setSidebar(true);
          }}
        >
          <div className="w-7 h-1 rounded-full bg-[#635FC7] rotate-45 -translate-x-1"></div>
          <div className="w-7 h-1 rounded-full bg-[#635FC7] -rotate-45 -translate-y-1 -translate-x-1"></div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
