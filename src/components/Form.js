import React, { Component } from 'react'

export default class Form extends Component{

  render(){
    return(
      <form onSubmit={(e) => this.props.getWeather(e)}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
      </form>
    );
  }
}
