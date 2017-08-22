import React, { Component } from 'react'

const templates = function(props) {
  return {
    'announcements': (
      <h1>announcements</h1>
    ),
    'followed-people': (
      <h1>followed-people</h1>
    ),
    'followed-projects': (
      <h1>followed-projects</h1>
    ),
    'your-discussions': (

      <h1>discussions</h1>
    ),
    'your-ideas': (
      <h1>ideas</h1>
    )
  }
}

const FeedItem = (props) => templates(props)[props.newsfeed_filter]

export default FeedItem
