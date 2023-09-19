import axios from "axios"
import https from "https"

// SAMPLE DATA
const blue = {
    DESTINATION: "Hamilton E Holmes",
    DIRECTION: "W",
    EVENT_TIME: "12\/27\/2013 12:29:42 PM",
    LINE: "BLUE",
    NEXT_ARR: "12:29:52 PM",
    STATION: "VINE CITY STATION",
    TRAIN_ID: "101206",
    WAITING_SECONDS: "-31",
    WAITING_TIME: "1 min"
}

const gold = {
    DESTINATION: "Airport",
    DIRECTION: "S",
    EVENT_TIME: "12\/27\/2013 12:30:06 PM",
    LINE: "GOLD",
    NEXT_ARR: "12:30:16 PM",
    STATION: "GARNETT STATION",
    TRAIN_ID: "302506",
    WAITING_SECONDS: "-7",
    WAITING_TIME: "Boarding"
}

getRealTimeRailCoordinates();

export default async function getRealTimeRailCoordinates() {
    let requestSettings = {
        method: 'get',
        url: 'https://developerservices.itsmarta.com:18096/railrealtimearrivals?apiKey=aa09b111-e99b-4a7c-83f7-8cb6ce8857f7',
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    };
    let res = await axios(requestSettings);

    if (JSON.stringify(res.data) == "{}") {
        res.data.RailArrivals = []
        for (let i = 0; i < 10; i++) {
            if (Math.floor(Math.random() * (2 - 0)) == 0) {
                res.data.RailArrivals.push(blue)
            } else {
                res.data.RailArrivals.push(gold)
            }
        }
    }

    return res.data.RailArrivals;
}