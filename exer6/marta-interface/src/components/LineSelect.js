import LineButton from "./LineButton";
import LinesPage from "../pages/LinesPage";

import "./LineSelect.css"
import App from "../App";

export default function LineSelect( {updateColor}) {
    
    return (<div className = "selectLine">
        <LineButton color = "Gold" onClick = {() =>{
            updateColor("GOLD");
            
        }} />

<LineButton color = "Red" onClick = {() => {
            updateColor("RED");
        }} />
         <LineButton color = "Blue" onClick = {() =>{
            updateColor("BLUE");
        }} />
         <LineButton color = "Green" onClick = {() =>{
            updateColor("GREEN");
        }} />












    </div>);





}
