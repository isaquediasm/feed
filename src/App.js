import React, { Component } from 'react'
import getFeed from './helpers/api'
import { createHashMap } from './helpers/data_structure'
import { FeedContainer } from './components'
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
    this.setState({ loading: true })
  
    const { offset, feed, hash } = this.state
    const _feed = await getFeed(offset)
    
    if (_feed && offset < 5) {
      // create an array to receive the current state 
      // and the news feed items without mutations
      let newFeed = [ ...feed, ..._feed.result ]

      this.setState({
        hash: createHashMap(newFeed, 'type'), // Create a hashmap for filtering
        feed: newFeed,
        offset: offset + 1,
        loading: false,
      })
    }
  }

  render() {
    const { feed, loading } = this.state

    return (
      <div className="App">
        { feed && <FeedContainer loading={loading} data={feed} onLoadMore={this.fetchFeed} /> }
      </div>
    )
  }
}

export default App;
