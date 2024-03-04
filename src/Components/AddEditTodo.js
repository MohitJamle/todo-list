import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const AddEditTodo = ({ todosList, setTodosList, editTodo, setEditTodo }) => {
  const [todosData, setTodosData] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    if (editTodo) {
      setTodosData({
        title: editTodo.title,
        body: editTodo.body,
      });
    } else {
      setTodosData({ title: "", body: "" });
    }
  }, [editTodo]);

  const addTodo = (e) => {
    e.preventDefault();
    const unique_id = uuid();
    if (todosData?.title?.length || todosData?.body?.length) {
      localStorage.setItem(
        "todos",
        JSON.stringify([...todosList, { ...todosData, id: unique_id }])
      );
      setTodosList((pd) => [...pd, { ...todosData, id: unique_id }]);
      setTodosData({
        title: "",
        body: "",
      });
    } else {
    }
  };
  const editTodoData = (e) => {
    e.preventDefault();
    if (todosData?.title?.length || todosData?.body?.length) {
      let getOldTodo = todosList.map((item) =>
        item.id === editTodo.id
          ? { ...item, title: todosData.title, body: todosData.body }
          : item
      );
      localStorage.setItem("todos", JSON.stringify([...getOldTodo]));
      setTodosList((pd) => getOldTodo);
      setTodosData({
        title: "",
        body: "",
      });
      setEditTodo(null);
    } else {
    }
  };

  return (
    <div className="flex justify-center md:py-14 py-4 px-4">
      <form
        className={`flex ${
          editTodo ? "items-start flex-col md:flex-row" : "items-center"
        } max-w-[500px] w-full gap-2`}
        onSubmit={editTodo ? editTodoData : addTodo}
      >
        <div className="flex flex-col gap-2 w-full">
          <input
            type="text"
            placeholder="Title"
            value={todosData.title}
            onChange={(e) =>
              setTodosData((pd) => ({ ...pd, title: e.target.value }))
            }
            className="bg-[#1f1e1b] w-full px-8 py-1 rounded-sm border border-[#ff8303] active:border-[#ff8303] !outline-none"
          />
          {editTodo ? (
            <textarea
              placeholder="Input"
              value={todosData.body}
              rows={3}
              onChange={(e) =>
                setTodosData((pd) => ({ ...pd, body: e.target.value }))
              }
              className="resize-none bg-[#1f1e1b] w-full px-8 py-1 rounded-sm border border-[#ff8303] active:border-[#ff8303] !outline-none"
            ></textarea>
          ) : (
            <input
              type="text"
              placeholder="Input"
              value={todosData.body}
              onChange={(e) =>
                setTodosData((pd) => ({ ...pd, body: e.target.value }))
              }
              className="bg-[#1f1e1b] w-full px-8 py-1 rounded-sm border border-[#ff8303] active:border-[#ff8303] !outline-none"
            />
          )}
        </div>
        {editTodo ? (
          <div className="flex md:flex-col gap-3 items-center justify-center">
            <button
              className="bg-[#1f1e1b] px-5 text-base py-1 rounded-md border border-[#a35709] hover:border-[#ff8303]"
              onClick={editTodoData}
            >
              Update
            </button>
            <button
              className="bg-[#1f1e1b] px-5 text-base py-1 rounded-md border border-[#a35709] hover:border-[#ff8303]"
              onClick={() => setEditTodo(null)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button className="button rounded-md border-2 border-[#ff8303] h-full flex items-center justify-center px-5 pb-1">
            <span className="text-[#ff8303] add text-5xl font-light leading-3">
              +
            </span>
          </button>
        )}
      </form>
    </div>
  );
};

export default AddEditTodo;
