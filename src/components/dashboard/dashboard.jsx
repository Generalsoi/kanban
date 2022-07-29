import React from "react";
import Sidebar from "./../sidebar/sidebar";
import Content from "./../content/content";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className={`w-1/6 h-screen`}>
        <Sidebar />
      </div>
      <div className="bg-black h-screen w-5/6">
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
