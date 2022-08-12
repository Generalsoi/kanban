import React from "react";

const NewColumn = () => {
  return (
    <div className="fixed h-full w-full inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center ">
      <div>
        <form action="">
          <input type="text" placeholder="Enter column name" />
          <button>Add column</button>
        </form>
      </div>
    </div>
  );
};

export default NewColumn;
