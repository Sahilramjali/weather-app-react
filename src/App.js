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
  const fetchweather=async(e)=>{
    e.preventDefault();
 const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f815643c72ccefdf97e2ae23b757072b`);//api key is unique for users.
 weatherupdate(response.data);
  }
  return (
    <div className='app'>
   <span>Weather App</span>
   {weather?<WeatherComponent weather={weather} />: <CityComponent cityupdate={cityupdate} fetchweather={fetchweather}/>}
  
   
    </div>
    
  );
}

export default App;
