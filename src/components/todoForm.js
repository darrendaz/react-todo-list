import React from "react"

const TodoForm = props => (
  <div>
    <form onSubmit={props.handleCreateTodoItem}>
      <label htmlFor="todoItem">Todo: </label>
      <input
        id="todoItem"
        placeholder="Starting"
        type="text"
        value={props.itemName}
        onChange={e => props.handleItemNameChange(e)}
      />
      <input type="submit" value="Add Item" />
    </form>
  </div>
)

export default TodoForm
