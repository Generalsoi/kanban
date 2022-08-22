import React from "react";
import CloseBtn from "../../assets/images/close.png";

const NewTask = (props) => {
  const { newTaskModal, setNewTaskModal } = props;

  return (
    <div
      className="fixed h-full w-full inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center "
      onClick={() => setNewTaskModal(false)}
    >
      <div
        className="w-80 h-80 p-4 bg-white rounded-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4">Add New Task</h2>

        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="text-[#828FA3] font-bold mb-1">
            Title
          </label>
          <input
            id="title"
            className="w-full h-10 p-4 border border-[#828FA3] dark:bg-[#2B2C37] focus:outline-none focus:border-[#635FC7]-700 dark:focus:text-white rounded-lg"
            type="text"
            placeholder="e.g. Take coffee break"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="w-full h-20 p-4 border border-[#828FA3] dark:bg-[#2B2C37] focus:outline-none focus:border-[#635FC7]-700 dark:focus:text-white rounded-lg"
            placeholder=""
          />
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
