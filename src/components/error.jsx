import WeatherComponent from "./weathercomponent";

const Error=()=>{
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

        }}>
            <h3>City not Found</h3>
           
        </div>
    );
}
export default Error;