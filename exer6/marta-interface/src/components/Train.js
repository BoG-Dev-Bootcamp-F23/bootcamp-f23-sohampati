//In this file create the design for an exportable Train component that takes in data for one train and returns the display for it
import "./Train.css";

const colors = {

    "GOLD" : "#e8b60d",
    "BLUE" : "#077ca9",
    "GREEN" : "#5da73a",
    "RED" : "#bf3b3c"
};

function normalCase(text) {
    return text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
export default function Train(props) {
    let color = colors[props.LINE];
    let ontimeColor = "#5da73a";
    let ontime = "On time";
    if (props.DELAY === "TOS") {
        ontime = "Delayed";
        ontimeColor = "#bf3b3c";
    }

    const tStyle = {
        color: ontimeColor,
    }
    const lStyle = {
        backgroundColor: color,
    }
    return (<div className="train">
        <div className="leftstuff">
            <h1 className="M">M</h1>
            <div className="trainInformation">
                <div className="station-information">
                Midtown Station <img src="https://static.thenounproject.com/png/2094742-200.png" width="20"/> {normalCase(props.STATION)}
                </div>
                <div className="subinfo">
                <div className="line" style={lStyle}>{normalCase(props.LINE)}</div>
                <div style={tStyle}>{ontime}</div>
                </div>
            </div>
        </div>
        <div className="time" style={tStyle}>
            <div id="timevalue">{props.WAITING_TIME[0]}</div>
            min
        </div>
    </div>);
    
}