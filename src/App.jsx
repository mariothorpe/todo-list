import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  // console.log(JSON.stringify(todoList, null, 2));
  function handleAddTodo(title) {
    const newTodo = { title: title, id: Date.now() };
    setTodoList([...todoList, newTodo]);
  }
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
