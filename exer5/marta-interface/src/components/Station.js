import "./Station.css"

export default function stations(props) {
    let stationName = props.stationName;
    return (<div className="station">{stationName}
        </div>);
}