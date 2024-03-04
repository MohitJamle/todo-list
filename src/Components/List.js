import React, { useState } from "react";
import Todo from "./Todo";

const List = ({ todosList, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(null);

  return (
    <div className="todo-list p-5 md:p-12 md:pb-5">
      {!todosList?.length ? (
        <div className="flex h-full justify-center items-center rounded-md md:border md:border-[#ff8303] md:bg-[#1f1e1b] md:min-h-80">
          <div className="relative flex flex-col justify-center px-2 py-2 text-2xl gap-2 md:bg-[#1f1e1b]">
            <span className="py-[1px] rounded-full w-[80%] m-auto bg-[#ff8303]"></span>
            No tasks
            <span className="py-[1px] rounded-full w-[80%] m-auto bg-[#ff8303]"></span>
          </div>
        </div>
      ) : (
        <div
          className={`flex h-full justify-center items-center rounded-md md:border md:border-[#ff8303] md:bg-[#1f1e1b] md:min-h-80`}
        >
          <div className="w-full max-w-[500px] md:max-w-full grid grid-cols-1 md:grid-cols-3 gap-y-7 gap-x-10 md:p-14">
            {todosList.map((item) => (
              <Todo
                key={item?.id}
                item={item}
                setEdit={setEdit}
                edit={edit}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
