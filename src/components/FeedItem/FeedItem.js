import React, { Component } from 'react'
import './FeedItem.styles.css'

const templates = function(props) {
  return {
    'announcement': (
      <div>
        <h2 className="feed-item__title">A new project is coming up</h2>
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

const FeedItem = (props) => (
  <div className="feed-item">
    {templates(props)[props.type]}
  </div>
)

export default FeedItem
