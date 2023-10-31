import NavBar from "../components/NavBar";
import MButton from "./MButton";
import "./LinesPage.css"
import TrainList from "./TrainList";
import LineSelect from "../components/LineSelect";
import {useState, useEffect} from "react";
export default function LinesPage(props){
    const [allStations, setAllStations] = useState({"GOLD":[],"RED":[],"BLUE":[],"GREEN":[]}); //Should be a list of station names
    const [allTrains, setAllTrains] = useState([]); //Should be a list of train objects
    const [color, setColor] = useState("GOLD");
    const [stationList, setStation] = useState([""]);
    const [arriving, setArriving] = useState(null); //3 states, null, Arriving, or Scheduled. 
    const [direction,setDirection] = useState(null); // N, W, E, S, or null for all.
    const [loading, setLoading] = useState(true);
 
    useEffect(() =>{
        async function getStations() {
            const stations = {};
            let goldData = await fetch("http://13.59.196.129:3001/stations/gold");
            goldData = await goldData.json();
            stations["GOLD"] = goldData;
            let redData = await fetch("http://13.59.196.129:3001/stations/red");
            redData = await redData.json();
            stations["RED"] = goldData;

            let blueData = await fetch("http://13.59.196.129:3001/stations/blue");
            blueData = await blueData.json();
            stations["BLUE"] = blueData;

            let greenData = await fetch("http://13.59.196.129:3001/stations/green");
            greenData = await greenData.json();
            stations["GREEN"] = greenData;
            setAllStations(stations);
            
        }
    });
    return (<div className="lines-page">
        <div className = "lines">
        <LineSelect updateColor = {setColor}/>
        </div>
        <div className="header">{color}</div>
        <div className="station-train">
        <div className = "nav">
    <NavBar color={color}></NavBar>
        </div>
        
        <div className = "buttons">
        
        <MButton className="a" name="Arriving"></MButton>
        <MButton className="b" name="Scheduled"></MButton>
        <MButton className="c" name="Northbound"></MButton>
        <MButton className="d" name="Southbound"></MButton>
        



        </div>
        <div className = "train-list">

        <TrainList color={color}></TrainList>
        </div>
        </div>
            



      
        </div>);
}