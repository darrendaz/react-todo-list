import React, { Component } from "react"
import ReactDOM from "react-dom"
import Navigation from "./components/navigation"
import TodoForm from "./components/todoForm"
import TodoList from "./components/todoList"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      greeting: "hey!",
      navList: ["Todo List", "Calculator", "Weather Forecast"],
      todoItem: "",
      todoList: []
    }

    this.handleTodoItemNameChange = this.handleTodoItemNameChange.bind(this)
    this.handleCreateTodoItem = this.handleCreateTodoItem.bind(this)
  }

  componentDidMount() {
    this.setState({
      todoItem: ""
    })
  }

  componentDidUpdate() {
    console.log(this.state.todoItem)
  }

  handleTodoItemNameChange(e) {
    this.setState({
      todoItem: e.target.value
    })
  }

  handleCreateTodoItem(e) {
    e.preventDefault()
    const todoItemObj = e.target.todoItem.value

    this.setState({
      todoItem: "",
      todoList: [...this.state.todoList, todoItemObj]
    })
  }

  handleClearList(e) {
    e.preventDefault()
    console.log("clear list", e)
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <Navigation navList={this.state.navList} />
        <TodoForm
          todoItem={this.state.todoItem}
          handleItemNameChange={this.handleTodoItemNameChange}
          handleCreateTodoItem={this.handleCreateTodoItem}
          handleClearList={this.handleClearList}
        />
        <TodoList todoList={this.state.todoList} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
