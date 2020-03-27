import React from "react"
import "./menu-items.styles.scss"

import { withRouter } from "react-router-dom"

const MenuItem = ({ title, image, size, history, linkUrl, match }) => { //History comes from withRouter
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
