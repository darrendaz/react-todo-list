import React, { Component } from "react"
import TodoListItem from "./todoListItem"

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.todoList.length === 1
          ? `${this.props.todoList.length} thing to do`
          : `${this.props.todoList.length} things to do`}
        <ol>
          {this.props.todoList.map(todoItem => (
            <TodoListItem todoItem={todoItem} />
          ))}
        </ol>
      </div>
    )
  }
}
