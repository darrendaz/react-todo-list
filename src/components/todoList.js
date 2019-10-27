import React from "react"

const TodoList = props => {
  const {
    todoList,
    // handleListItemNameChange,
    handleDeleteTodoItem,
    toggleComplete
  } = props

  const remainingList = todoList.filter(
    listItem => listItem.completed === false
  )
  const doneList = todoList.filter(listItem => listItem.completed === true)

  return (
    <div className="todolist-group">
      <div className="row container-fluid">
        <div className="row col-3">
          {doneList === 1
            ? `${doneList.length} thing done`
            : `${doneList.length} things done`}{" "}
          /{" "}
          {remainingList.length === 1
            ? `${remainingList.length} thing to do`
            : `${remainingList.length} things to do`}
        </div>
      </div>
      {todoList.map(todoItem => (
        <div className="row container-fluid " key={todoItem.id}>
          <input
            type="text"
            className="form-control col-6"
            id={todoItem.id}
            value={todoItem.name}
            // onChange={handleListItemNameChange}
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
            {todoItem.completed ? `Completed` : `Complete`}
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
