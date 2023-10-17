//In this file create the design for an exportable Train component that takes in data for one train and returns the display for it
import "./Train.css";

const colors = {

    "GOLD" : "#e8b60d",
    "BLUE" : "#077ca9",
    "GREEN" : "#5da73a",
    "RED" : "#bf3b3c"
};
// //The prop parameter would be a train object.        {
//             "DESTINATION": "DORAVILLE",
//             "DIRECTION": "N",
//             "EVENT_TIME": "2023-10-05T16:57:23Z",
//             "HEAD_SIGN": "DORAVILLE",
//             "LINE": "GOLD",
//             "NEXT_ARR": "2023-10-05T16:59:38Z",
//             "STATION": "DORAVILLE STATION",
//             "TRAIN_ID": "303",
//             "WAITING_SECONDS": "131",
//             "WAITING_TIME": "2 min",
//             "RESPONSETIMESTAMP": "2023-10-05T16:57:27Z",
//             "VEHICLELONGITUDE": "33.895333",
//             "VEHICLELATITUDE": "-84.293652",
//             "DELAY": "T58S",
//             "TRIP_ID": "3060"
//         },
//I only need WAITING_TIME, LINE, DELAY, STATION (Which is the destination), 
// I need to add state information
function toNormalCase(text) {
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

    const textStyle = {
        color: ontimeColor,
    }
    const lineStyle = {
        backgroundColor: color,
    }
    return (<div className="train">
        <div className="leftstuff">
            <h1>M</h1>
            <div className="trainInformation">
                <div className="station-information">
                Midtown Station <img src="https://static.thenounproject.com/png/2094742-200.png" width="20"/> {toNormalCase(props.STATION)}
                </div>
                <div className="subinfo">
                <div className="line" style={lineStyle}>{toNormalCase(props.LINE)}</div>
                <div style={textStyle}>{ontime}</div>
                </div>
            </div>
        </div>
        <div className="time" style={textStyle}>
            <div id="timevalue">{props.WAITING_TIME.split(" ")[0]}</div>
            min
        </div>
    </div>);
    
}