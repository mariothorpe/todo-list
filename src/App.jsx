import './App.css'

function App() {
  const todos = [
    { id: 1, title: "Review Resources"},
    { id: 2, title: "Take Notes"},
    { id: 3, title: "Code Out App"},
  ]

  return (
   <div>
    <h1>My Todos</h1>
    <ul>
    {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
   </div>
  )
}

export default App
