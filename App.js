import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div id="root">
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </div>
  );
}

export default App;
