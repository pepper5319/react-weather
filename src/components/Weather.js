import React, { Component } from 'react';

export default class Weather extends Component{

  render(){
    return(
      <div className="weather__info">
        {
          this.props.city && this.props.country &&
          <p className="weather__key">Location:
            <span className="weather__value"> {this.props.city}, {this.props.country}</span>
          </p>
        }
        {
          this.props.temp &&
          <p className="weather__key">Temperature:
            <span className="weather__value"> {this.props.temp}</span>
          </p>
        }
        {
          this.props.humidity &&
          <p className="weather__key">Humidity:
            <span className="weather__value"> {this.props.humidity}</span>
          </p>
        }
        {
          this.props.desc &&
          <p className="weather__key">Conditions:
            <span className="weather__value"> {this.props.desc}</span>
          </p>
        }
        {
          this.props.error && <p className="weather__error"><span> {this.props.error}</span></p>
        }
      </div>
    );
  }
}
