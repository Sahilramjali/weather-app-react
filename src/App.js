import {CityComponent} from './components/citycomponents';
import WeatherComponent from './components/weathercomponent';
import { useState } from 'react';
import './css/app.css';
import axios from 'axios';
function App() {
  const [city,cityupdate]=useState();
  const[weather,weatherupdate]=useState();
  const fetchweather=async(e)=>{
    e.preventDefault();
 const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f815643c72ccefdf97e2ae23b757072b`);
 weatherupdate(response.data);
  }
  return (
    <div className='app'>
   <span>Weather App</span>
   {weather?<WeatherComponent weather={weather}/>: <CityComponent cityupdate={cityupdate} fetchweather={fetchweather}/>}
  
   
    </div>
    
  );
}

export default App;
