import CityComponent from './components/citycomponents';
import WeatherComponent from './components/weathercomponent';
import { useState } from 'react';
import './css/app.css';
import axios from 'axios';
import Error from './components/error';
export const WeatherIcons = {
  "01d": "../assets/icons/sunny.svg",
  "01n": "../assets/icons/night.svg",
  "02d": "../assets/icons/day.svg",
  "02n": "../assets/icons/cloudy-night.svg",
  "03d": "../assets/icons/cloudy.svg",
  "03n": "../assets/icons/cloudy.svg",
  "04d": "../assets/icons/perfect-day.svg",
  "04n": "../assets/icons/cloudy-night.svg",
  "09d": "../assets/icons/rain.svg",
  "09n": "../assets/icons/rain-night.svg",
  "10d": "../assets/icons/rain.svg",
  "10n": "../assets/icons/rain-night.svg",
  "11d": "../assets/icons/storm.svg",
  "11n": "../assets/icons/storm.svg",
};
function App() {

  const [city,cityupdate]=useState();
  const[weather,weatherupdate]=useState();
  const[error,errorupdate]=useState(false);
  const fetchweather=(e)=>{
    e.preventDefault();
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f815643c72ccefdf97e2ae23b757072b`).then(res=>{
    weatherupdate(res.data);
  }).catch(e=>{
    console.log(e);
    errorupdate(true);
  });//use your own api key in apikeyid
 
  }
  return (
    <div className='app'>
   <span>Weather App</span>
   {weather?<WeatherComponent weather={weather} />:error?<Error weather={weather}/> :<CityComponent cityupdate={cityupdate} fetchweather={fetchweather}/>}
  
   
    </div>
  
  );
}

export default App;
