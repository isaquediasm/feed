import React, { Component } from 'react'
import getFeed from './helpers/api'
import { createHashMap } from './helpers/data_structure'
import FeedItem from './components/FeedItem'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    feed: [],
    hash: {},
    offset: 1,
  }

  componentDidMount() {
    this.fetchFeed()
  }

  fetchFeed = async() => {
    const { offset, feed, hash } = this.state
    const _feed = await getFeed(offset)
    
    if (_feed && offset < 5) {
      // create an array to receive the current state 
      // and the news feed items without mutations
      let newFeed = [ ...feed, ..._feed.result ]

      this.setState({
        hash: createHashMap(newFeed, 'newsfeed_filter'), // Create a hashmap for filtering
        feed: newFeed,
        offset: offset + 1,
      })
    }
  }

  render() {
    const { feed } = this.state

    console.log(feed)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        {feed && feed.map((item, idx) => (
          <FeedItem key={idx} {...item} />
        ))}
       
      </div>
    )
  }
}

export default App;
