import React, { useState } from "react";

const Content = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="h-screen">
      <div className="flex w-full h-20 p-4 justify-between items-center bg-white dark:bg-[#2B2C37] border-l-2 ">
        <h3 className="font-jakarta font-bold text-2xl dark:text-white">
          Platform Launch
        </h3>

        <div>
          <button
            className={`${
              disabled ? "opacity-70" : "opacity-100"
            } bg-[#635FC7] text-white p-4 rounded-full border-none w-40 h-12 flex items-center justify-center font-jakarta`}
            disabled={true}
          >
            +Add New Task
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <h4 className="mt-64 text-[#828FA3] text-lg font-bold font-jakarta">
          This board is empty. Create a new column to get started.
        </h4>
        <button className="bg-[#635FC7] text-white p-4 rounded-full border-none w-48 mt-4 h-12 flex items-center justify-center font-jakarta">
          +Add New Column
        </button>
      </div>
    </div>
  );
};

export default Content;
