import React from "react";

const Alert = ({ onDone, onCancle }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center p-5">
      <div
        className="backdrop fixed top-0 left-0 right-0 bottom-0 z-10 blur-md bg-[#00000039]"
        onClick={onCancle}
      ></div>
      <div className="bg-[#1b1a17] p-6 border-t-4 border-[#a35709] w-full max-w-[300px] text-center z-20">
        <div className="text-2xl py-3">Delete this task?</div>
        <div className="flex gap-3 items-center justify-center mt-7">
          <button
            className="bg-[#1f1e1b] w-20 px-5 text-xs py-1 rounded-md border border-[#a35709] hover:border-[#ff8303]"
            onClick={onDone}
          >
            Yes
          </button>
          <button
            className="bg-[#1f1e1b] w-20 px-5 text-xs py-1 rounded-md border border-[#a35709] hover:border-[#ff8303]"
            onClick={onCancle}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
