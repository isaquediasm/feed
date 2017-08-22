import React, { Component } from 'react'
import FeedItem from '../FeedItem/FeedItem'

const FeedContainer = ({ data, onLoadMore }) => (
  <div className="feed-container">
    {data && data.map((item, idx) => (
      <FeedItem key={idx} {...item} />
    ))}
    
    <a onClick={onLoadMore}>Load more</a>
  </div>
)

export default FeedContainer
