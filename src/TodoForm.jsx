function TodoForm() {
    return (
        <form>
            <label htmlFor="todoTitle"> To Do </label>
            <input type="text" id="todoTitle" />
            <button type="submit"> Add Todo </button>
        </form>
    );
};

export default TodoForm;