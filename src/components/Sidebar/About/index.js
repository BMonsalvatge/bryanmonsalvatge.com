import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          A technology enthusiast, keeping up on the latest software and programming languages.  Also a fan of video games and digital graphics.
          Checkout my Medium blog and YouTube channel below.
          <div className="navlinks">
            <ul className="navitems">
              <li><a href="https://medium.com/@bryanmonsalvatge">Blog</a></li>
              <li><a href="https://www.youtube.com/c/RockinouttCoding">Videos</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About