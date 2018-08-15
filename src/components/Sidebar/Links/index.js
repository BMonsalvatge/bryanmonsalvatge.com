import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/bmonsalvatge" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.twitter.com/bmonsalvatge" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/bryan-monsalvatge" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://medium.com/@bryanmonsalvatge" target="_blank">
              <i className="fa fa-medium"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.youtube.com/c/RockinouttCoding" target="_blank">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:bryanmonsalvatge@gmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links