import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>

    </form>
  );
};

export default TodoForm;