const API_KEY = "99eafab321e9a24f779cddd51d7a7ba9";
const city = "Atlanta";
const URL = "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=99eafab321e9a24f779cddd51d7a7ba9&units=imperial";

async function fetchData(){
    const response = await fetch(URL);
    const data = await response.json();
    const temperature = data.weather[0].description;
    console.log(data);
    console.log(temperature);
    const weatherDiv = document.getElementById("weather-info");
    const weatherhTML;
    
}

fetchData();