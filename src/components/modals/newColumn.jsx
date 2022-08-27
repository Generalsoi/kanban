import React, { useRef, useState } from "react";
import CloseBtn from "../../assets/images/close.png";

const NewColumn = (props) => {
  // passing props to this NewColumn modal component
  const { modal, setModal, handleCreateColumn } = props;

  const [columnName, setColumnName] = useState("");

  // defining a function to close the modal on pressing the esc key down
  const handleOnKeyDown = (e) => {
    e.key === "Escape" && setModal(false);
  };

  // defining a function that is called when user clicks on the add column button in the form
  const handleAddColumn = () => {
    if (!columnName) {
      // throw an error
      return;
    }

    // add to app data state
    handleCreateColumn(columnName);
    setModal(false);

    // i need to be able to ensure the following:
    // - the user must enter a value
    // - if the input field is empty, clicking the add column button should not do anything
    // - if user enters a value, clicking the add column button should take the user's input
    // and display it as a new column in the content page.
    // if (value !== "") {
    //   setValue(inputRef.current.value);
    //   setColumn(true);
    //   setModal(false);
    // }

    // console.log(inputRef.current.value); // currently i have to click two times before this value is logged on the console. iono why?s
  };

  return (
    <div
      className="fixed h-full w-full inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center "
      onClick={() => setModal(false)}
      tabIndex={0}
      onKeyDown={handleOnKeyDown}
    >
      <div
        className="w-80 h-48 rounded-lg bg-white dark:bg-[#2B2C37] p-8 flex font-jakarta relative "
        onClick={(e) => e.stopPropagation()}
      >
        {/* <form onSubmit={handleAddColumn} className="w-full"> */}
        <div className="flex flex-col justify-center w-full">
          <label
            htmlFor="columnName"
            className="mb-4 font-bold dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="columnName"
            placeholder="Enter column title"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
            className="border border-[#635FC7] dark:bg-[#2B2C37] focus:outline-none focus:border-[#635FC7]-700 dark:focus:text-white rounded-sm mb-4 p-3 h-10 w-full"
          />

          <div className="flex justify-center">
            <button
              className="w-40 h-10 bg-[#635FC7] text-white rounded-full text-xs"
              onClick={handleAddColumn}
            >
              Add column
            </button>
          </div>
        </div>
        {/* </form> */}

        <img
          src={CloseBtn}
          alt="close button"
          className="w-4 h-4 cursor-pointer absolute top-4 right-4"
          onClick={() => setModal(false)}
        />
      </div>
    </div>
  );
};

export default NewColumn;
