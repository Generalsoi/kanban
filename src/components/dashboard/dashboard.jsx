import React from "react";
import Sidebar from "./../sidebar/sidebar";
import Content from "./../content/content";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className={`w-1/5 h-screen border-r-1 border-r-[#E4EBFA]`}>
        <Sidebar />
      </div>
      <div className="bg-[#F4F7FD] dark:bg-[#20212C] h-screen w-4/5">
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
