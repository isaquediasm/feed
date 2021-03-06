import React, { Component } from 'react'
import FeedItem from '../FeedItem/FeedItem'
import './FeedContainer.styles.css'

const FeedContainer = ({ data, loading, onLoadMore }) => (
  <div className="feed-container">
    <h2>Activity Feed</h2>
    {data && data.map((item, idx) => (
      <FeedItem key={idx} {...item} />
    ))}
    
    <a className="load-btn" onClick={onLoadMore}>
      {loading ? 'Loading...' : 'Load more'}
    </a>
  </div>
)

export default FeedContainer
