import { useEffect, useState } from "react";
import "./App.css";
import AddEditTodo from "./Components/AddEditTodo";
import Header from "./Components/Header";
import List from "./Components/List";
import Alert from "./Components/Modal/Alert";

function App() {
  const [todosList, setTodosList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [showAlert, setShowAlert] = useState({
    show: false,
    onDone: () => {},
  });
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodosList(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const onDelete = (item) => {
    console.log("delete", item);
    setShowAlert({
      show: true,
      onDone: () => {
        setTodosList((pd) => {
          let newData = pd.filter((td) => td.id !== item.id);
          return newData;
        });
        setShowAlert({ show: false, onDone: () => {} });
      },
    });
  };
  const onEdit = (item) => {
    console.log("edit", item);
    setEditTodo(item);
  };
  return (
    <div className="App">
      <div className={`app_container ${showAlert.show ? "blur-sm" : ""}`}>
        <Header />
        <AddEditTodo
          todosList={todosList}
          setTodosList={setTodosList}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <List
          todosList={todosList}
          setTodosList={setTodosList}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
      <div
        style={{
          transition: "all 300ms ease-in-out",
          opacity: showAlert.show ? "1" : "0",
        }}
      >
        {showAlert.show && (
          <Alert
            onDone={showAlert.onDone}
            onCancle={() => {
              setShowAlert({ show: false, onDone: () => {} });
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
