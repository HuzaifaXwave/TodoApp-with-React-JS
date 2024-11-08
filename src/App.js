import { useState } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
// bootstrap configuration //
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  let addList = (inputText) => {
    setTodoList([...todoList, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...todoList];
    newListTodo.splice(key, 1);
    setTodoList([...newListTodo]);
  };
  return (
    <div className="bg-dark todo-container">
      <h1 className="text-center text-white">TODO APP</h1>
      <TodoApp addList={addList} />
      {todoList.map((listItem, index) => {
        return (
          <TodoList
            key={index}
            index={index}
            item={listItem}
            deleteItem={deleteListItem}
          />
        );
      })}
    </div>
  );
}

export default App;
