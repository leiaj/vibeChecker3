import React, { Component } from 'react'


export default class VibeForm extends Component {
  constructor(){
    super()
    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    console.log(e.target.value)
    this.setState({
      query: e.target.value
    })
  }

  fetchTweets(query){
    console.log("Here I go to fetch")
    fetch(`http://https://api.twitter.com/1.1/search/tweets.json?q=${query}&count=10`)
    this.setState({
      query: query
    })
  }



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
