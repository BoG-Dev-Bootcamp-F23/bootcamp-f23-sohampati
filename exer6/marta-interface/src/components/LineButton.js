import "./LineButton.css"
const colors = {

    "GOLD" : "#ffd601",
    "BLUE" : "#1600ff",
    "GREEN" : "#008001",
    "RED" : "#ff0000"
};
export default function LineButton(props) {
    const buttonStyle = {
        backgroundColor: colors[props.color.toUpperCase()]
    }
    return (<button className="line-button" style={buttonStyle} onClick={props.onClick}>{props.color}</button>);
}