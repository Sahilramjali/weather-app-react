import CityComponent from './components/citycomponents';
import WeatherComponent from './components/weathercomponent';
import { useState } from 'react';
import './css/app.css';
import axios from 'axios';
import Error from './components/error';
// export const WeatherIcons = {
//   "01d": "../src/assets/icons/sunny.svg",
//   "01n": "../src/assets/icons/night.svg",
//   "02d": "../src/assets/icons/day.svg",
//   "02n": "../src/assets/icons/cloudy-night.svg",
//   "03d": "../src/assets/icons/cloudy.svg",
//   "03n": "../src/assets/icons/cloudy.svg",
//   "04d": "../src/assets/icons/perfect-day.svg",
//   "04n": "../src/assets/icons/cloudy-night.svg",
//   "09d": "../src/assets/icons/rain.svg",
//   "09n": "../src/assets/icons/rain-night.svg",
//   "10d": "../src/assets/icons/rain.svg",
//   "10n": "../src/assets/icons/rain-night.svg",
//   "11d": "../src/assets/icons/storm.svg",
//   "11n": "../src/assets/icons/storm.svg",
// };
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
