import { useRef } from 'react';
import { useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  gap: 0.75em;
`;

const StyledButton = styled.button`
  padding: 1rem;
  border: 0.5em groove black;
  border-radius: 2em;
  color: black;
  font-weight: bold;
  font-size: 0.6em;
  &:disabled {
    font-style: italic;
  }
`;

function TodoForm({ onAddTodo, isSaving }) {
  const [workingTodo, setWorkingTodo] = useState('');
  const todoTitleInput = useRef('');
  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo(workingTodo);
    setWorkingTodo('');
    todoTitleInput.current.focus();
  }
  return (
    <StyledForm onSubmit={handleAddTodo}>
      <TextInputWithLabel
        elementId="todoTitle"
        ref={todoTitleInput}
        value={workingTodo}
        onChange={(e) => setWorkingTodo(e.target.value)}
        labelText="Todo"
      />
      <StyledButton type="submit" disabled={workingTodo === ''}>
        {isSaving ? 'Saving...' : 'Add Todo'}
      </StyledButton>
    </StyledForm>
  );
}

export default TodoForm;
