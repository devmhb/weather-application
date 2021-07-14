

import { useState } from 'react';
import './App.css';

function App() {
    let [input , setInput] = useState("")
    let [weather , setWeather] = useState({})

    const api ={
      key:"48070f77bfd407c99032b5fd6bb66111",
      base:"https://api.openweathermap.org/data/2.5/"
    }

    const search = evt => {
      if(evt.key==="Enter"){
          fetch(`${api.base}weather?q=${input}&units=metric&appid=${api.key}`)
          .then(res => res.json())
          .then(data => {
            setWeather(data)
          })
          console.log(weather);
      }
    }





  
 const  dateBuilder = (d) => {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = days[d.getDay()]
  let month = months[d.getMonth()]
  let date = d.getDate()
  let year = d.getFullYear()

  return ` ${day} ${date} ${month} ${year}`
 }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp>16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
          type="text"
           className="search-bar" 
           placeholder="search..."
           value={input}
           onChange={e => setInput(e.target.value)}
           onKeyPress={search}
          />
          <h1 className="title">FIND WEATHER OF YOUR CITY</h1>
        </div> 
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
          <div className="location">{weather.name} {((weather || {}).sys || {}).country}</div>
          <div className="date">{dateBuilder (new Date())}</div>
        </div>

        <div className="weather-box">
          <div className="temp">
            {weather.main.temp}°C
          </div>
          <div className="weather">
          {weather.weather[0].main}
          </div>
        </div>
          </div>
        ):('')}
      </main>
    </div>
  );
}

export default App;
