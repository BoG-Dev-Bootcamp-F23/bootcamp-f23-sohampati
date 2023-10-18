import NavBar from "../components/NavBar";
import MButton from "./MButton";
import "./LinesPage.css"
import TrainList from "./TrainList";
export default function LinesPage(props){
    let color = props.color;
    return (<div className="lines-page">
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