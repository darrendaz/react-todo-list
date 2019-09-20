import React, { Component } from "react"
import TodoListItem from "./todoListItem"

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
          {todoList.map(todoItem => (
            <tr>
              <td>
                <TodoListItem
                  key={todoItem.id}
                  todoItemId={todoItem.id}
                  todoItemName={todoItem.name}
                  delete={handleDelete}
                />
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}
