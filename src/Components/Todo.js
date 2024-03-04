import React from "react";

const Todo = ({ item, edit, setEdit, onEdit, onDelete }) => {
  //  color from figma design #242320
  return (
    <div className="todo p-3 py-3 flex items-center justify-between max-w-full border border-[#ff8303] rounded-md bg-[#1f1e1b]">
      <div className="flex flex-col max-w-full overflow-hidden w-2/3">
        <div className="title text-lg w-9/12 font-normal text-ellipsis whitespace-nowrap overflow-hidden">
          {item?.title}
        </div>
        <div className="body text-xs w-full font-normal text-ellipsis whitespace-nowrap overflow-hidden">
          {item?.body}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {edit && edit === item?.id ? (
          <>
            <span className="cursor-pointer" onClick={() => onEdit(item)}>
              <img src="/icons/edit.png" alt="" className="w-8" />
            </span>
            <span className="cursor-pointer" onClick={() => onDelete(item)}>
              <img src="/icons/delete.png" alt="" className="w-8" />
            </span>
          </>
        ) : (
          <span
            className="border border-[#ff8303] px-3 py-0.5 rounded-md cursor-pointer"
            onClick={(e) => setEdit(item?.id)}
          >
            i
          </span>
        )}
      </div>
    </div>
  );
};

export default Todo;
