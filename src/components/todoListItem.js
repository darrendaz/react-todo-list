import React from "react"

const TodoListItem = props => (
  <li>
    {props.todoItem}
    <button>Delete</button>
  </li>
)

export default TodoListItem
