import React from "react"

const Navigation = props => {
  return (
    <div className="primary-nav">
      <nav>
        <ul>
          {props.navList.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
