import TodoListItem from './TodoListItem';
import styles from './TodoList.module.css';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo, isLoading }) {
  const filteredTodoList = todoList.filter(
    (todo) => todo.isCompleted === false
  );

  if (isLoading) {
    return <p>Todo list is loading...</p>;
  }

  return filteredTodoList.length === 0 ? (
    <p> Add todo above to get started </p>
  ) : (
    <ul className={styles.unorderedList}>
      {filteredTodoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
