import React, { Component } from 'react'

class Title extends Component {
  render(){
    return (
      <div>
        <h1 className="title-container__title">Weather 4 U</h1>
        <p className="title-container__subtitle">Find temperature, condictions, etc.</p>
      </div>
    );
  }
}

export default Title;
