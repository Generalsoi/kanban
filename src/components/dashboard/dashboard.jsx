import React from "react";
import Sidebar from "./../sidebar/sidebar";
import Content from "./../content/content";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-72">
        <Sidebar />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
