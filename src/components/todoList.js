import React, { Component } from "react"
// import TodoListItem from "./todoListItem"

const TodoList = props => {
  const { todoList, handleDelete } = props
  return (
    <div>
      {todoList.length === 1
        ? `${todoList.length} thing to do`
        : `${todoList.length} things to do`}
      <table>
        <tbody>
          {todoList.map(todoItem => (
            <tr key={todoItem.id}>
              <td>{todoItem.name}</td>
              <td>
                <button
                  value={todoItem.id}
                  onClick={handleDelete.bind(this, todoItem.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList
