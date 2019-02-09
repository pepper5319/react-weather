import React, { Component } from 'react';
import Title from './components/Title.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';
import { key } from './keys/weatherAPI.js';
class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const k = key;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${k}&units=imperial`);
    const data = await api_call.json();
    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        error: undefined
      });
    }else{
      this.setState({
        error: "Please enter values"
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Title />
                </div>
                <div className="col-md-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temp={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    desc={this.state.desc}
                    error={this.state.error}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default App;
