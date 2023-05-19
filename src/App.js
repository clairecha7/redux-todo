import "./App.css";
import TodoInput from "./components/todoInput/TodoInput";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Clarus Todos</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
