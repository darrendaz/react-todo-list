import React, { Component } from "react"
// import Navigation from "./components/navigation"
import TodoForm from "./components/todoForm"
import TodoList from "./components/todoList"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      greeting: "To Do List",
      navList: ["Todo List", "Calculator", "Weather Forecast"],
      todoItemIdCounter: 0,
      todoItem: "",
      todoList: []
    }

    this.handleTodoItemNameChange = this.handleTodoItemNameChange.bind(this)
    this.handleCreateTodoItem = this.handleCreateTodoItem.bind(this)
    this.handleClearList = this.handleClearList.bind(this)
  }

  componentDidMount() {
    this.setState({
      todoItem: ""
    })
  }

  handleTodoItemNameChange(e) {
    localStorage.setItem("Testing", e.target.value)

    this.setState({
      todoItem: e.target.value
    })
  }

  handleListItemNameChange(e) {
    const todoList = this.state.todoList
    todoList[e.target.id - 1].name = e.target.value

    this.setState({
      todoList: todoList
    })
  }

  handleCreateTodoItem(e) {
    e.preventDefault()

    const todoItemId = this.state.todoItemIdCounter + 1

    const todoItemObj = {
      id: todoItemId,
      name: e.target.todoItem.value || "<_empty_entry_>",
      completed: false
    }

    this.setState({
      todoItem: "",
      todoItemIdCounter: todoItemId,
      todoList: [...this.state.todoList, todoItemObj]
    })
  }

  handleDeleteTodoItem(id) {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todoItem => todoItem.id !== id)
    }))
  }

  toggleComplete(id) {
    const todoList = this.state.todoList
    const itemIndex = todoList.findIndex(todoItem => todoItem.id === id)
    const todoItemObj = todoList[itemIndex]

    todoList[itemIndex] = { ...todoItemObj, completed: !todoItemObj.completed }

    this.setState({ todoList: todoList })
  }

  handleClearList(e) {
    e.preventDefault()

    this.setState({
      todoItemIdCounter: 0,
      todoList: []
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>{this.state.greeting}</h1>
        {/* <Navigation navList={this.state.navList} /> */}
        <TodoForm
          todoItem={this.state.todoItem}
          handleItemNameChange={this.handleTodoItemNameChange}
          handleCreateTodoItem={this.handleCreateTodoItem}
          handleClearList={this.handleClearList}
        />
        <TodoList
          todoList={this.state.todoList}
          handleListItemNameChange={this.handleListItemNameChange.bind(this)}
          handleItemNameChange={this.handleTodoItemNameChange}
          handleDeleteTodoItem={this.handleDeleteTodoItem.bind(this)}
          toggleComplete={this.toggleComplete.bind(this)}
        />
      </div>
    )
  }
}

export default App
