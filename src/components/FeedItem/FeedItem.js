import React, { Component } from 'react'
import './FeedItem.styles.css'

const templates = function(props) {
  const content = props.items[0].content
  return {
    'announcement': (
      <div>
        <h2 className="feed-item__type">A new project is coming up</h2>
        <div className="feed-item__content">
          <h2 className="feed-item__content-subject">{content && content.subject}</h2>
          {content && content.text}
        </div>
      </div>
    ),
    'comment_from_network': (
      <h1>followed-people</h1>
    ),
    'comment_on_own_comment_on_idea': (
      <h1>followed-projects</h1>
    ),
    'love_from_network': (
      <h1>discussions</h1>
    ),
  }
}

const FeedItem = (props) => {
  console.log(props.items[0])
  return(
  <div className="feed-item">
    <div className="feed-item__time">{props.time}</div>
    {templates(props)[props.type]}
  </div>
)}

export default FeedItem
