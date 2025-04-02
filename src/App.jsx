import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState('hi');
  return (
   <div>
    <h1>My Todo List</h1>
    <TodoForm />
    <p>{newTodo}</p>
    <TodoList />
   </div>
  );
}

export default App;
