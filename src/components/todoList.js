import React, { Component } from "react"
// import TodoListItem from "./todoListItem"

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { todoList, handleDelete } = this.props
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
}
