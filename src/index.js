import "./styles.css";
import fetchWeather from "./weather.js";
import createCardDOM from "./dom.js";

(async () => {
  const search = document.querySelector(".search input");
  let weatherData = undefined;
  search.addEventListener("keydown", async (event) => {
    if (event.key == "Enter" && search.value !== "") {
      weatherData = await fetchWeather(search.value);
      search.value = "";
      renderCardDOM();
      renderWeatherData(weatherData);
    }
  });
})();

function renderWeatherData(weatherData) {
}

function renderCardDOM() {
  const weatherContainer = document.querySelector(".weather-container");
  weatherContainer.appendChild(createCardDOM());
}

