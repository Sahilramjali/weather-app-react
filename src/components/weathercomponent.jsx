
import { WeatherIcons } from '../App';
import '../css/weathercomponent.css';

import sunset  from '../assets/icons/temp.svg';
import sunrise from '../assets/icons/sunny.svg';
import humidity from '../assets/icons/humidity.svg';
import wind from '../assets/icons/wind.svg';
import pressure from '../assets/icons/pressure.svg';
const WeatherinfoIcons={
    
    sunset:sunset,
    sunrise:sunrise,
    humidity:humidity,
    wind:wind,
    pressure:pressure
}

const Weatherinfocontainer=({name,value})=>{
    return(
        <div className='weather-info-container'>
            <img className='infoicon' src={WeatherinfoIcons[name]}/>
             <div className='infolabel'>
                 {value}
                <span>{name}</span>
             </div>
        </div>
    );
}
const WeatherComponent=(props)=>{
    console.log(props);

    const{weather}=props;
    const isday=weather?.weather[0].icon?.includes('d');
    const getTime=(timestamp)=>{
        return `${new Date(timestamp*1000).getHours()}:${new Date(timestamp*1000).getMinutes()}`;
    }
    return (
    <>
    <div className="weather">
    <span>{`${Math.floor(weather?.main?.temp-273)} °C`}<span> | {weather?.weather[0].description}</span></span>
    <img alt='weather fig' src={WeatherIcons[weather?.weather[0].icon]}/>
    
    </div>
    <div>
        {`${weather?.name} , ${weather?.sys?.country}`}
    </div>
    <div className='weather-info'>weather Info</div>
<div className='weatherinfocontainer-main'>
<Weatherinfocontainer name={isday? 'sunset':'sunrise'} value={getTime(weather?.sys[isday?"sunset":"sunrise"])}/>
<Weatherinfocontainer name="humidity" value={weather?.main?.humidity}/>
<Weatherinfocontainer name="wind" value={weather?.wind?.speed}/>
<Weatherinfocontainer name="pressure" value={weather?.main?.pressure}/>

</div>

    </>);
    
}
export default WeatherComponent;