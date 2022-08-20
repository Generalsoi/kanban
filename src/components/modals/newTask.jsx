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
        className="w-80 h-80 bg-white rounded-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Add New Task</h2>

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
