//This page will display the entire interface, basically what we directly put in the application
import "./LinesPage.css";
import MartaButton from '../components/MartaButton.js'
import TrainList from "./TrainList.js";
import Navbar from "../components/Navbar.js";

export default function LinesPage(props) {
    let color = props.color;
    return (<div className="lines-page">
        <div className="header">{color}</div>
        <div className="station-train">
        <Navbar color={color}/>
        <div>
            <div className="buttons">
                <MartaButton name="Arriving"/>
                <MartaButton name="Scheduled"/>
                <MartaButton name="Northbound"/>
                <MartaButton name="Southbound"/>
            
            </div>
            
        <TrainList color={color}/>
        </div>
        </div>
        </div>);
}