import React from "react"

const TodoList = props => {
  const { todoList, handleDeleteTodoItem, toggleComplete } = props
  return (
    <div className="todolist-group">
      <div className="row container-fluid">
        {todoList.length === 1
          ? `${todoList.length} thing to do`
          : `${todoList.length} things to do`}
      </div>
      {todoList.map(todoItem => (
        <div className="row container-fluid " key={todoItem.id}>
          <input
            type="text"
            className="form-control col-6"
            id="todoItem"
            placeholder="Starting"
            value={todoItem.name}
          />
          <button
            type="button"
            className="btn btn-secondary col"
            value={todoItem.id}
            onClick={handleDeleteTodoItem.bind(this, todoItem.id)}
          >
            Delete
          </button>
          <button
            type="button"
            className={
              todoItem.completed
                ? "btn btn-success col"
                : "btn btn-outline-success col"
            }
            value={todoItem.id}
            onClick={toggleComplete.bind(this, todoItem.id)}
          >
            {todoItem.completed ? `Completed` : `Complete`}
          </button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
