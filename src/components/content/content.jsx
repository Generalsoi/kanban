import React from "react";

const Content = () => {
  return (
    <div>
      <div className="flex w-full p-4 justify-between items-center bg-white border-l-2 ">
        <h3 className="font-jakarta font-bold text-2xl">Platform Launch</h3>

        <div>
          <button className="bg-[#635FC7] text-white p-4 rounded-full border-none w-40 h-12 flex items-center justify-center font-jakarta">
            +Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
