//This is the navbar.
import "./Navbar.css"
import stations from "../server/stationData.js";
import Station from "./Station.js"
export default function Navbar(props) {
    let color = props.color.toLowerCase();
    return (<div className="navbar">
        <div className="selectStation">Select your starting station</div>
        <Station stationName="All Stations"/>
        {stations[color].map( (station) => {
             return <Station stationName={station}/>;
            
        })}

    </div>);
}