import React from "react";

const NewTask = (props) => {
  const { newTaskModal, setNewTaskModal } = props;

  return (
    <div className="fixed h-full w-full inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center " onClick={() => setNewTaskModal(false)}>
      <div className="w-80 h-80 bg-white rounded-lg">
        <h2>Add New Task</h2>
      </div>
    </div>
  );
};

export default NewTask;
