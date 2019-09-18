import React, { Component } from "react"
import ReactDOM from "react-dom"
import Navigation from "./components/navigation"
import TodoForm from "./components/todoForm"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      greeting: "hey!",
      navList: ["Todo List", "Calculator", "Weather Forecast"],
      itemName: "something important todo",
      todoList: []
    }

    this.handleItemNameChange = this.handleItemNameChange.bind(this)
    this.handleCreateTodoItem = this.handleCreateTodoItem.bind(this)
  }

  componentDidMount() {
    this.setState({
      itemName: ""
    })
  }

  componentDidUpdate() {
    console.log(this.state.itemName)
  }

  handleItemNameChange(e) {
    this.setState({
      itemName: e.target.value
    })
  }

  handleCreateTodoItem(e) {
    e.preventDefault()
    const todoItem = e.target.todoItem.value

    this.setState({
      itemName: todoItem,
      todoList: [...this.state.todoList, todoItem]
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <Navigation navList={this.state.navList} />
        <TodoForm
          itemName={this.state.itemName}
          handleItemNameChange={this.handleItemNameChange}
          handleCreateTodoItem={this.handleCreateTodoItem}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
