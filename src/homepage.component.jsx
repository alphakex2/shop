import React from "react"
import "./homepage.styles.scss"

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Kenny's Shop</h1>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">Laptops</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Accessories</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Gaming Machines</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Cooling Solutions</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">General Computer Services</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
