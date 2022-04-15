
import '../css/citycomponent.css'
export const CityComponent=({cityupdate,fetchweather})=>{
    return(<div className='main-city-com'>
        <img alt='weather fig' src="/icons/perfect-day.svg"/>
        <div className='cityLabel'>Enter city Name</div>
        <form onSubmit={fetchweather}>
            <input placeholder='city name' onChange={(e)=>cityupdate(e.target.value)}></input>
            <button type='submit'>search</button>
        </form>
      
    </div>);
}
