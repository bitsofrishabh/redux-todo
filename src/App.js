import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo || { todos: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(AddTodoAction(todo));
      setTodo(""); // Clear input after submission
  };

    const handleDelete = (todo) => {
      dispatch(RemoveTodoAction(todo));
    };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Learn Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter something"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn" type="submit">
            {" "}
            Click
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((t) => {
             return (
               <li key={t.id} className="singleTodo">
                 <span>{t.todo}</span>
                 <button onClick={() => handleDelete(t)}>Delete</button>
               </li>
             );
            })}
        </ul>
      </header>
    </div>
  );
}

export default App;
