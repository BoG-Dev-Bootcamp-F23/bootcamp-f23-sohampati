import "./App.css";
import { useState } from "react";

// const todos = [
//   "do linear homework",
//   "finish exercise 5 for my bog bootcamp",
//   "eat dinner",
// ];
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function removeTodo(todo) {
    const newList = todos.filter((currTodo) => {
      return currTodo !== todo;
    });
    setTodos(newList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={newTodo}
        onChange={(event) => {
          console.log(event.target.value);
          setNewTodo(event.target.value);
        }}
      ></input>
      <button
        style={{ marginLeft: 10 }}
        onClick={() => {
          const newTodoList = [...todos, newTodo];
          setTodos(newTodoList);
          setNewTodo("");
        }}
      >
        Add Todo
      </button>
      {todos.map((todo) => {
        return (
          <div
            onClick={() => {
              removeTodo(todo);
            }}
          >
            {todo}
          </div>
        );
      })}
    </div>
  );
}

export default App;

// const [clicks, setClicks] = useState(0);

// function incrementClicks() {
//   setClicks(clicks + 1);
// }

// return (
//   <div className="App">
//     <button onClick={incrementClicks}>Increment</button>
//     <button
//       onClick={() => {
//         setClicks(clicks - 1);
//       }}
//     >
//       Decrement
//     </button>
//     <p>The button was clicked {clicks} times!</p>
//     <p>Click + 1: {clicks + 1}</p>
//   </div>
// );
