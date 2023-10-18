import "./NavBar.css"
import stations from "../server/stationData.js";
import Station from "./Station.js"


export default function NavBar(props){
    let color = props.color.toLowerCase();
    return (<div className = "bar">
        <div className="selectStation">Select your starting station</div>
        <div className="stat">
        <Station stationName="All Stations"/>
        {stations[color].map( (station) => {
             return <Station stationName={station}/>;
            
        })}
        </div>
        
        


    </div>)

}