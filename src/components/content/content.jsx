import React, { useState, useEffect, useCallback } from "react";
import OpenEyeIcon from "../../assets/images/openeye.png";
import Column from "./column";
import NewColumn from "./../modals/newColumn";
import randomColor from "randomcolor";
import NewTask from "../modals/newTask";

const Content = (props) => {
  // passing the props using object destructuring
  const { sidebar, setSidebar } = props;

  const [disabled, setDisabled] = useState(true);

  // setting the state for the column data.
  const [appData, setAppData] = useState(
    JSON.parse(localStorage.getItem("current_app_data")) ?? []
  );

  // to persist the appData state using local storage
  // useEffect(() => {
  //   let currentAppData = localStorage.getItem("current_app_data");
  //   setAppData(JSON.parse(currentAppData));
  //   console.log(appData);
  // }, [appData]);

  /// add to local storage
  // const updatedAppData = useCallback(() => {
  //   window.localStorage.setItem("current_app_data", JSON.stringify(appData));
  // }, [appData]);
  useEffect(() => {
    // localStorage.getItem("currentAppData");
    // console.log(appData);
    // updatedAppData();
    localStorage.setItem("current_app_data", JSON.stringify(appData));
  }, [appData]);

  // setting the state for opening the new column modal
  const [modal, setModal] = useState(false);

  // setting the state for opening the new task modal
  const [newTaskModal, setNewTaskModal] = useState(false);

  // const [divcolor, setDivColor] = useState("");
  // defining the function that generates random color
  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };

  // useEffect(() => {
  //   newColor = randColor();
  // }, []);

  // defining the function to create a column
  const handleCreateColumn = (columnName) => {
    if (!columnName) {
      return;
    }

    // initializing the randomColor variable so it can be used in the new column generated
    // let colorRandom = randColor();

    // defining the new column object
    const newColumn = {
      title: columnName,
      tasks: [],
      id: Date.now(),
      bgColor: randColor(),
    };

    setAppData((appData) => [...appData, newColumn]);
    setDisabled(false);

    // setDivColor(colorRandom);
    // randColor();
  };

  // console.log(colorRandom);

  // creating a state for getting the value from the new column input modal
  // const [value, setValue] = useState({ columnName: "" });

  return (
    <div className="h-screen relative">
      <div className="flex w-full h-14 md:h-20 p-4 justify-between items-center bg-white dark:bg-[#2B2C37] border-l-2 ">
        <h3 className="ml-10 sm:ml-0 font-jakarta font-bold text-sm md:text-2xl dark:text-white">
          Platform Launch
        </h3>

        <div>
          <button
            className=" bg-[#635FC7] text-white text-sm w-36 h-8 p-1 md:w-40 md:h-12 md:p-4 rounded-full border-none flex items-center justify-center font-jakarta disabled:bg-opacity-50"
            disabled={!appData.length ? true : false}
            onClick={() => setNewTaskModal(true)}
          >
            +Add New Task
          </button>
        </div>
      </div>

      {/* this is where I map the column names created in the app data array to be displayed on the page.
       they display if the length of the appData array is not 0.  */}
      {appData.length ? (
        <div className="flex h-full gap-4 p-4 ">
          <div className="w-4/5 flex gap-4 overflow-x-auto">
            {appData.map((column) => (
              <div className="w-auto md:w-40" key={column.id}>
                <div className=" flex items-center gap-1">
                  <div
                    className={` w-4 h-4 rounded-full p-0`}
                    style={{ backgroundColor: column.bgColor }}
                  ></div>
                  <p className=" font-jakarta uppercase text-[#828FA3] font-bold text-sm">
                    {column.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-1/5 h-full flex items-center justify-center bg-gradient-to-r from-[#E9EFFA] to-[#F2F2F2]">
            <p
              className="cursor-pointer font-bold text-lg text-[#635FC7]"
              onClick={() => setModal(true)}
            >
              + New Column
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <h4 className="mt-64 text-[#828FA3] text-lg font-bold font-jakarta">
            This board is empty. Create a new column to get started.
          </h4>
          <button
            className="bg-[#635FC7] text-white p-4 rounded-full border-none w-48 mt-4 h-12 flex items-center justify-center font-jakarta"
            onClick={() => setModal(true)}
          >
            +Add New Column
          </button>
        </div>
      )}

      {/* the logic for switching states for the new column modal */}
      {modal && (
        <NewColumn
          handleCreateColumn={handleCreateColumn}
          modal={modal}
          setModal={setModal}
        />
      )}

      {/* the logic for switching states for the new task modal */}
      {newTaskModal && (
        <NewTask
          newTaskModal={newTaskModal}
          setNewTaskModal={setNewTaskModal}
        />
      )}

      {/* the logic for hiding and releasing the sidebar view */}
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
