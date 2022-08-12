import React, { useState } from "react";
import OpenEyeIcon from "../../assets/images/openeye.png";
import Column from "./column";
import NewColumn from "./../modals/newColumn";

const Content = (props) => {
  // passing the props using object destructuring
  const { sidebar, setSidebar } = props;

  const [disabled, setDisabled] = useState(false);

  // setting the state for the column.
  const [column, setColumn] = useState(false);

  return (
    <div className="h-screen relative">
      <div className="flex w-full h-20 p-4 justify-between items-center bg-white dark:bg-[#2B2C37] border-l-2 ">
        <h3 className="font-jakarta font-bold text-2xl dark:text-white">
          Platform Launch
        </h3>

        <div>
          <button
            className={`${disabled ? "bg-opacity-50" : "bg-opacity-100"} ${
              column && !disabled
            } bg-[#635FC7] text-white p-4 rounded-full border-none w-40 h-12 flex items-center justify-center font-jakarta`}
            disabled={true}
          >
            +Add New Task
          </button>
        </div>
      </div>
      {column ? (
        <NewColumn />
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <h4 className="mt-64 text-[#828FA3] text-lg font-bold font-jakarta">
            This board is empty. Create a new column to get started.
          </h4>
          <button
            className="bg-[#635FC7] text-white p-4 rounded-full border-none w-48 mt-4 h-12 flex items-center justify-center font-jakarta"
            onClick={() => setColumn(true)}
          >
            +Add New Column
          </button>
        </div>
      )}

      {!sidebar && (
        <div
          className="absolute left-0 bottom-6 rounded-r-full flex items-center justify-center bg-[#635FC7] w-12 h-12 cursor-pointer transition-all duration-300"
          onClick={() => setSidebar(true)}
        >
          <img src={OpenEyeIcon} alt="open-eye-icon" />
        </div>
      )}
    </div>
  );
};

export default Content;
