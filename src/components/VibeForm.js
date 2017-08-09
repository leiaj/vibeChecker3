import React, { Component } from 'react'


export default class VibeForm extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      tweets: []
    }

    this.handleChange = this.handleChange.bind(this)
    // this.fetchTweets = this.fetchTweets.bind(this)
  }

  handleChange(e){
    e.preventDefault()
    const q = this.state.query
    console.log(e.target.value)
    this.setState({
      query: e.target.value
    })
    console.log("Completed change, about to fetch data")
    fetch(`http://https://api.twitter.com/1.1/search/tweets.json?q=${q}&count=1`)
    .then(data => data.json())
    .then(console.log("We have the data"))
  }

  // fetchTweets(query){
  //   fetch(`http://https://api.twitter.com/1.1/search/tweets.json?q=${query}&count=1`)
  //   .then(data => data.json())
  //   .then(console.log("we have the data"))
  //   // .then(results => this.setState({
  //   //   tweets: results.stauses.text
  //   // }))
  //   // console.log(this.state.tweets)
  // }



  render(){
    return(
      <div>
        <form>
        <h4>Plz Enter a VibE yuD like to Check</h4>
        <input type='text' onChange={this.handleChange}/>
        <input type='submit' onSubmit={this.fetchTweets} />
        </form>
      </div>
    )
  }
}
