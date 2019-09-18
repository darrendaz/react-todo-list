import React, { Component } from "react"

class Navigation extends Component {
  render() {
    return (
      <div className="primary-nav">
        Primary navigation
        <nav>
          <ul>
            <li>
              <a href="#" active>
                Todo List
              </a>
            </li>
            <li>
              <a href="#">Calculator</a>
            </li>
            <li>
              <a href="#">Weather Forecast</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation
