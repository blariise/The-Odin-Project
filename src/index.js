import "./styles.css";
import fetchWeather from "./weather.js";

const weatherData = await fetchWeather("warsaw");

console.log(weatherData);

