import React from "react"

const TodoForm = ({
  handleCreateTodoItem,
  todoItem,
  handleItemNameChange,
  handleClearList
}) => (
  <div className="container-fluid">
    <form className="form-group" onSubmit={handleCreateTodoItem}>
      <div className="form-row">
        <label className="col-2 col-form-label" htmlFor="todoItem">
          Add to your list
        </label>
      </div>
      <div className="form-row">
        <input
          type="text"
          className="form-control col-4"
          id="todoItem"
          placeholder="ex. grind coffee, submit PR, buy chocolate, repeat, etc."
          value={todoItem}
          onChange={handleItemNameChange}
        />
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClearList}
        >
          Clear List
        </button>
      </div>
    </form>
  </div>
)

export default TodoForm
