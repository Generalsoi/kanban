import React from "react";

const NewColumn = (props) => {
  // passing the column and setcolumn props to this NewColumn modal component
  const { column, setColumn } = props;

  return (
    <div
      className="fixed h-full w-full inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center "
      onClick={() => setColumn(false)}
    >
      <div
        className="w-80 h-48 rounded-lg bg-white p-4 flex "
        onClick={(e) => e.stopPropagation()}
      >
        <form action="">
          <input type="text" placeholder="Enter column name" />
          <br />
          <button>Add column</button>
        </form>
      </div>
    </div>
  );
};

export default NewColumn;
