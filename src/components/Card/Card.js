import React, { Component } from 'react'

const Card = ({ children, title = children, text }) => (
  <div className="feed-item__card">
    {title && <p className="feed-item__card-title">{title}</p>}
    {text && <p className="feed-item__card-texts">{text}</p>}
  </div>
)

export default Card
