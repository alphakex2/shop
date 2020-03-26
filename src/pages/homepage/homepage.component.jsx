import React from "react"
import "./homepage.styles.scss"
import Directory from "../../components/directory/directory.component"

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Kenny's Shop</h1>
      <Directory />
    </div>
  )
}

export default Homepage
