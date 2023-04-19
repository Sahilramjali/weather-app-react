

import "../css/citycomponent.css"
import perfectDay from '../assets/icons/perfect-day.svg'
 const CityComponent=({cityupdate,fetchweather})=>{
    return(<div className='main-city-com'>
        <img alt='weather fig' src={perfectDay}/>
        <div className='cityLabel'>Enter city Name</div>
        <form onSubmit={fetchweather}>
            <input placeholder='city name' onChange={(e)=>cityupdate(e.target.value)}></input>
            <button type='submit'>search</button>
        </form>
      
    </div>);
}
export default CityComponent;