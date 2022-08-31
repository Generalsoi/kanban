import React, { useState } from "react";
import CloseBtn from "../../assets/images/close.png";

const NewTask = (props) => {
  const { newTaskModal, setNewTaskModal, appData, setAppData } = props;

  const [taskName, setTaskName] = useState("");
  const [taskState, setTaskState] = useState("");

  //defining the function to handle adding new task
  const handleAddTask = () => {
    if (!taskName) {
      return;
    }

    setAppData((appData) => [...appData]);
  };

  return (
    <div
      className="fixed h-full w-full inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center "
      onClick={() => setNewTaskModal(false)}
      onKeyDown={(e) => e.key === "Escape" && setNewTaskModal(false)}
    >
      <div
        className="w-80 h-fit p-5 bg-white rounded-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 font-jakarta font-bold text-[#000112] text-sm">
          Add New Task
        </h2>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="title"
            className="text-[#828FA3] text-sm font-bold mb-1"
          >
            Title
          </label>
          <input
            id="title"
            className="flex items-start font-jakarta w-full h-8 p-2 border border-[#828FA3] dark:bg-[#2B2C37] focus:outline-none focus:border-[#635FC7]-700 dark:focus:text-white rounded placeholder:text-xs"
            type="text"
            placeholder="e.g. Take coffee break"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="description"
            className="text-[#828FA3] font-bold text-sm mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="w-full h-20 p-2 border font-jakarta border-[#828FA3] dark:bg-[#2B2C37] focus:outline-none focus:border-[#635FC7]-700 dark:focus:text-white rounded placeholder:text-xs"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
            recharge the batteries a little."
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="subtasks"
            className="text-[#828FA3] font-bold text-sm mb-1"
          >
            Subtasks
          </label>
          <div className="flex gap-3 items-center mb-4">
            <input
              type="text"
              id="subtasks"
              className="w-full h-8 p-2 border font-jakarta border-[#828FA3] dark:bg-[#2B2C37] focus:outline-none focus:border-[#635FC7]-700 dark:focus:text-white rounded placeholder:text-xs"
              placeholder="e.g Make coffee"
            />
            <img
              src={CloseBtn}
              alt="close button"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <button
            className="w-full h-8 rounded-full text-[#635FC7] text-sm font-bold  "
            style={{ background: "rgba(99, 95, 199, 0.1)" }}
          >
            +Add New Subtask
          </button>
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="status"
            className="text-[#828FA3] font-bold text-sm mb-1"
          >
            Status
          </label>
          <select
            name="status"
            id="status"
            className="w-full text-xs font-jakarta h-8 p-2 border border-[#828FA3] dark:bg-[#2B2C37] focus:outline-none focus:border-[#635FC7]-700 dark:focus:text-white rounded"
            value={taskState}
            onChange={(e) => setTaskState(e.target.value)}
          >
            {appData.map((data) => (
              <option key={data.id} value={data.title}>
                {data.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 flex justify-center">
          <button
            className="w-full h-8 bg-[#635FC7] text-white rounded-full text-xs"
            onClick={handleAddTask}
          >
            Create Task
          </button>
        </div>

        <img
          src={CloseBtn}
          alt="close button"
          className="w-4 h-4 cursor-pointer absolute top-4 right-4"
          onClick={() => setNewTaskModal(false)}
        />
      </div>
    </div>
  );
};

export default NewTask;
