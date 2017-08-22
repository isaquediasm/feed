import React, { Component } from 'react'
import Card from '../Card/Card'
import './FeedItem.styles.css'

const templates = function(props) {
  const item = props.items[0] || false
  const content = props.items[0].content || false
  const contest = props.items[0].contest || false
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
      <div>
        <h2 className="feed-item__type">Comments from your network</h2>
        <div className="feed-item__content">
          {props.items && props.items.map(item => (
            <Card
              text={item.text && item.text.content}
            ><strong>{item.user && item.user.name}</strong> commented on <strong>{item.user && item.user.name}</strong>
            </Card>
          ))}
        </div>
      </div>
    ),
    'comment_on_own_comment_on_idea': (
      <div>
        <h2 className="feed-item__type">Comments on your ideas</h2>
        <div className="feed-item__content">
          {props.items && props.items.map(item => (
            <Card
              text={item.text && item.text.content}
            >
              <strong>{item.user && item.user.name}</strong> commented on <strong>{item.idea && item.idea.name}</strong>
            </Card>
          ))}
        </div>
      </div>
    ),
    'love_from_network': (
      <div>
        <h2 className="feed-item__type">Love from Network</h2>
        <div className="feed-item__content">
          {props.items && props.items.map(item => (
            <Card>
              <strong>{item.user && item.user.name}</strong> loved <strong>{item.idea && item.idea.name}</strong>
            </Card>
          ))}
        </div>
      </div>
    ),
    'contest_open': (
      <div>
        <h2 className="feed-item__type">Contest Open</h2>
        <div className="feed-item__content">
          <img src={contest.image} />
          <h2 className="feed-item__content-subject">{contest && contest.name}</h2>
          {contest && contest.announcement}
          <div className="feed-item__content-price">{contest.prize}</div>
        </div>
      </div>
    ),
    'contest_closed': (
      <div>
        <h2 className="feed-item__type">Contest Closed</h2>
        <div className="feed-item__content">
          <h2 className="feed-item__content-subject">{contest && contest.name}</h2>
          {contest && contest.announcement}
        </div>
      </div>
    ),
    'follows_you': (
      <div>
        <span className="feed-item__type">
          <img className="feed-item__avatar" src={item.user && item.user.image} />
          <strong>{item.user && item.user.name}</strong> follows you
        </span>
        <div className="feed-item__content">
          <h2 className="feed-item__content-subject">{contest && contest.name}</h2>
          {contest && contest.announcement}
        </div>
      </div>
    )
  }
}

const FeedItem = (props) => {
  console.log(props.items[0])
  return(
  <div className="feed-item">
    <div className="feed-item__time">{props.time}</div>
    {props && templates(props)[props.type]}
  </div>
)}

export default FeedItem
