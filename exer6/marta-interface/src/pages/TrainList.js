import arrivals from "../server/trainData.js";
import Train from "../components/Train.js";
export default function TrainList(props) {
    const color = props.color;
    const filteredStation = props.filteredStation;
    return (<div>
        {arrivals["RailArrivals"].map( (arrival) => {
            if (arrival.LINE === color && arrival.STATION === filteredStation) {
                return <Train {...arrival} />;
              }else {
                  return null;
              }
        })}
    </div>);
}