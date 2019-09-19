import React from "react"

const TodoForm = props => (
  <div>
    <form onSubmit={props.handleCreateTodoItem}>
      <label htmlFor="todoItem">Todo: </label>
      <input
        id="todoItem"
        placeholder="Starting"
        type="text"
        value={props.todoItem}
        onChange={props.handleItemNameChange}
      />
      <button type="submit">Add Item</button>
      <button onClick={props.handleClearList}>Clear List</button>
    </form>
  </div>
)

export default TodoForm
