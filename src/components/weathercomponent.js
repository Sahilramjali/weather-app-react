
import '../css/weathercomponent.css';

const WeatherinfoIcons={
    sunset:'/icons/temp.svg',
    sunrise:'/icons/temp.svg',
    humidity:'/icons/humidity.svg',
    wind:'/icons/wind.svg',
    pressure:'/icons/pressure.svg'
}
const Weatherinfocontainer=(props)=>{
    return(
        <div className='weather-info-container'>
            <img className='infoicon' src={WeatherinfoIcons[props.name]}/>
             <div className='infolabel'>
                 {props.value}
                <span>{props.name}</span>
             </div>
        </div>
    );
}
const WeatherComponent=(props)=>{
    console.log(props);

    const{weather}=props;
    const isday=weather?.weather[0].icon?.includes('d');
   
    return (
    <>
    <div className="weather">
    <span>{}<span> | Cloudy</span></span>
    <img alt='weather fig' src="/icons/perfect-day.svg"/>
    
    </div>
    <div>
        {`${weather?.name} , ${weather?.sys?.country}`}
    </div>
    <div className='weather-info'>weather Info</div>
<div className='weatherinfocontainer-main'>
<Weatherinfocontainer name={isday? 'sunset':'sunrise'} value={isday? 'sunset':'sunrise'}/>
<Weatherinfocontainer name="humidity" value={weather?.main?.humidity}/>
<Weatherinfocontainer name="wind" value={weather?.wind?.speed}/>
<Weatherinfocontainer name="pressure" value={weather?.main?.pressure}/>
</div>

    </>);
    
}
export default WeatherComponent;