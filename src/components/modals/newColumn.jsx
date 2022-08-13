import React from "react";
import CloseBtn from "../../assets/images/close.png";

const NewColumn = (props) => {
  // passing the column and setcolumn props to this NewColumn modal component
  const { column, setColumn } = props;

  return (
    <div
      className="fixed h-full w-full inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center "
      onClick={() => setColumn(false)}
    >
      <div
        className="w-80 h-48 rounded-lg bg-white p-8 flex font-jakarta relative "
        onClick={(e) => e.stopPropagation()}
      >
        <form action="" className="w-full">
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="columnName" className="mb-4 font-bold">
              Title
            </label>
            <input
              type="text"
              id="columnName"
              placeholder="Enter column title"
              className="border border-[#635FC7] focus:outline-none focus:border-[#635FC7]-700 rounded-sm mb-4 p-3 h-10 w-full"
            />

            <div className="flex justify-center">
              <button className="w-40 h-10 bg-[#635FC7] text-white rounded-full text-xs">
                Add column
              </button>
            </div>
          </div>
        </form>

        <img
          src={CloseBtn}
          alt="close button"
          className="w-4 h-4 cursor-pointer absolute top-4 right-4"
          onClick={() => setColumn(false)}
        />
      </div>
    </div>
  );
};

export default NewColumn;
