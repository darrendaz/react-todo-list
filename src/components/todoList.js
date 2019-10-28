import React from "react"

const TodoList = props => {
  const {
    todoList,
    handleListItemNameChange,
    handleDeleteTodoItem,
    toggleComplete
  } = props

  const remainingCount = todoList.filter(
    listItem => listItem.completed === false
  ).length
  const doneCount = todoList.filter(listItem => listItem.completed === true)
    .length

  return (
    <div className="todolist-group">
      <div className="row container-fluid">
        <div className="row col-3">
          {doneCount === 1
            ? `${doneCount} thing done`
            : `${doneCount} things done`}{" "}
          /{" "}
          {remainingCount === 1
            ? `${remainingCount} thing to do`
            : `${remainingCount} things to do`}
        </div>
      </div>
      {todoList.map(todoItem => (
        <div className="row container-fluid " key={todoItem.id}>
          <input
            type="text"
            className="form-control col-6"
            id={todoItem.id}
            value={todoItem.name}
            onChange={handleListItemNameChange.bind(this, todoItem.id)}
          />
          <button
            type="button"
            className={
              todoItem.completed
                ? "btn btn-success col-3"
                : "btn btn-outline-success col-3"
            }
            value={todoItem.id}
            onClick={toggleComplete.bind(this, todoItem.id)}
          >
            {todoItem.completed ? `Completed` : `Complete Task`}
          </button>
          <button
            type="button"
            className="btn btn-secondary col-2"
            value={todoItem.id}
            onClick={handleDeleteTodoItem.bind(this, todoItem.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
