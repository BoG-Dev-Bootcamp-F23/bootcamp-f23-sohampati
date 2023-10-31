import arrivals from "../server/trainData.js";
import Train from "../components/Train.js";
export default function TrainList(props) {
    let color = props.color;
    return (<div>
        {arrivals["RailArrivals"].map( (arrival) => {
            if (arrival.LINE === color) {
                return (<Train {...arrival}/>)
            }
        })}
    </div>);
}