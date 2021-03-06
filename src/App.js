import {CityComponent} from './components/citycomponents';
import WeatherComponent from './components/weathercomponent';
import { useState } from 'react';
import './css/app.css';
import axios from 'axios';
export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};
function App() {
  const [city,cityupdate]=useState();
  const[weather,weatherupdate]=useState();
  const fetchweather=(e)=>{
    e.preventDefault();
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={apikey}`).then(res=>{
    weatherupdate(res.data);
  }).catch(e=>{
    console.log(e);
  });//use your own api key in apikeyid
 
  }
  return (
    <div className='app'>
   <span>Weather App</span>
   {weather?<WeatherComponent weather={weather} />: <CityComponent cityupdate={cityupdate} fetchweather={fetchweather}/>}
  
   
    </div>
    
  );
}

export default App;
