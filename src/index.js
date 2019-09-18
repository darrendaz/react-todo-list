import React, { Component } from "react"
import ReactDOM from "react-dom"
import Navigation from "./components/navigation"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      greeting: "hey!"
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <h1>{this.state.greeting}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
