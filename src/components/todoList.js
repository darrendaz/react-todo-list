import React from "react"

const TodoList = props => {
  const { todoList, handleDeleteTodoItem, handleComplete } = props
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
                  onClick={handleDeleteTodoItem.bind(this, todoItem.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  value={todoItem.id}
                  onClick={handleComplete.bind(this, todoItem.id)}
                >
                  {todoItem.completed ? `Completed` : `Complete`}
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
