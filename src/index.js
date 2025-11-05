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
      console.log(weatherData);
      renderCardDOM();
      renderWeatherData(weatherData.currentConditions, weatherData.resolvedAddress);
    }
  });
})();

function renderCardDOM() {
  const weatherContainer = document.querySelector(".weather-container");
  weatherContainer.appendChild(createCardDOM());
}

function renderUpperCard(weatherData, place) {
  const dateDiv = document.querySelector(".date");
  dateDiv.innerText = weatherData.datetime;

  setUpperCardBackgroundGif(weatherData.icon);
  setUpperCardIcon(weatherData.icon);

  const temperature = document.querySelector(".temperature");
  temperature.innerText = `${weatherData.temp} °C`;

  const placeDiv = document.querySelector(".place");
  placeDiv.innerText = place;
}

function renderInfo(weatherData) {
  const elements = document.querySelectorAll(".info-value");
  const titles = [
    "Relative humidity",
    "Cloud cover",
    "Visibility",
    "Precipitation",
    "Precipitation chance",
    "Precipitation type",
    "Snowfall",
    "Snow depth",
    "Wind speed",
    "Wind gust",
    "Wind direction",
    "Solar radiation",
    "Solar energy",
    "UV index"
  ];
  const units = [
    "%",
    "%",
    "km",
    "mm",
    "%",
    "",
    "cm",
    "cm",
    "km/h",
    "km/h",
    "°",
    "W/m²",
    "W/m²",
    ""
  ];

  let index = 0;
  elements.forEach((element) => {
    const titleDiv = element.querySelector(".title");
    const valueDiv = element.querySelector(".value");
    titleDiv.innerText = titles[index];
    const value = weatherData[element.dataset.key];
    console.log(value);
    if (value === null) {
      valueDiv.innerText = "-";
    } else {
      valueDiv.innerText = `${value} ${units[index]}`;
    }
    ++index;
  });
}

function renderWeatherData(weatherData, place) {
  renderUpperCard(weatherData, place);
  renderInfo(weatherData);
}

async function dynamicImport(weatherStatus, extension) {
  const element = await import(`./assets/${weatherStatus}.${extension}`);
  return element.default;
}

async function setUpperCardBackgroundGif(weatherStatus) {
  const upperCard = document.querySelector(".upper-card");
  const background = await dynamicImport(weatherStatus, "gif");
  upperCard.style.backgroundImage = `url("${background}")`;
  upperCard.style.backgroundSize = "cover";
}

async function setUpperCardIcon(weatherStatus) {
  const iconDiv = document.querySelector(".icon");
  const icon = await dynamicImport(weatherStatus, "svg");
  iconDiv.innerHTML = icon;
}
