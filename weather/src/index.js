import "./styles.css";
import fetchWeather from "./weather.js";
import createCardDOM from "./dom.js";

(async () => {
  const search = document.querySelector(".search input");
  let weatherData = undefined;
  search.addEventListener("keydown", async (event) => {
    if (event.key == "Enter" && search.value !== "") {
      renderLoadingIcon();
      weatherData = await fetchWeather(search.value);
      
      const checkForCardDOM = document.querySelector(".day-card");
      if (checkForCardDOM) {
        clearCardDOM();
      }
      search.value = "";
      console.log(weatherData);

      const cardDOM = renderCardDOM();
      cardDOM.style.visibility = "hidden";
      await renderWeatherData(weatherData, weatherData.resolvedAddress, -1);
      clearLoadingIcon();
      cardDOM.style.visibility = "visible";
    }
  });
})();

function renderLoadingIcon() {
  const loadingDiv = document.createElement("div");
  loadingDiv.className = "loading";
  const container = document.querySelector(".weather-container");
  container.appendChild(loadingDiv);
}

function clearLoadingIcon() {
  const loadingDiv = document.querySelector(".loading");
  loadingDiv.remove();
}

function clearCardDOM() {
  const cardDiv = document.querySelector(".day-card");
  if (cardDiv) {
    cardDiv.remove();
  }
}

function renderCardDOM() {
  clearCardDOM();
  const weatherContainer = document.querySelector(".weather-container");
  const cardDOM = createCardDOM();
  cardDOM.style.visibility = "hidden";

  weatherContainer.appendChild(cardDOM);
  return cardDOM;
}

async function renderUpperCard(weatherData, place) {
  await setUpperCardBackgroundGif(weatherData.icon);
  await setUpperCardIcon(weatherData.icon);

  const dateDiv = document.querySelector(".date");
  dateDiv.innerText = weatherData.datetime;

  const temperature = document.querySelector(".temperature");
  temperature.innerText = `${weatherData.temp}°C`;

  const placeDiv = document.querySelector(".place");
  placeDiv.innerText = place;
}

async function renderInfo(weatherData) {
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
    if (value === null) {
      valueDiv.innerText = "-";
    } else {
      valueDiv.innerText = `${value}${units[index]}`;
    }
    ++index;
  });
}

async function renderWeatherData(weatherData, place, time) {
  if (time === -1) {
    await renderUpperCard(weatherData.currentConditions, place);
    await renderInfo(weatherData.currentConditions);
    await renderCarousel(weatherData.days);
  }
}

async function dynamicImport(weatherStatus, extension) {
  const element = await import(`./assets/${weatherStatus}.${extension}`);
  return element.default;
}

async function preloadGif(weatherStatus) {
  const gifUrl = await dynamicImport(weatherStatus, "gif");

  await new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = gifUrl;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
  return gifUrl;
}

async function setUpperCardBackgroundGif(weatherStatus) {
  const upperCard = document.querySelector(".upper-card");
  const background = await preloadGif(`optimized_${weatherStatus}`);
  upperCard.style.backgroundImage = `url("${background}")`;
  upperCard.style.backgroundSize = "cover";
}

async function setUpperCardIcon(weatherStatus) {
  const iconDiv = document.querySelector(".icon");
  const icon = await dynamicImport(weatherStatus, "svg");
  iconDiv.innerHTML = icon;
}

function renderCarousel(weatherData) {
  const carousel = document.querySelectorAll(".carousel-item");
  let index = 0;
  carousel.forEach((element) => {
    const weather = weatherData[index];
    renderIconCarousel(element, weather.icon);
    renderDateCarousel(element, weather.datetime);
    renderTempCarousel(element, weather.temp);
    ++index;
  });
}

async function renderIconCarousel(element, iconText) {
  const iconDiv = element.querySelector(".item-icon");
  const icon = await dynamicImport(iconText, "svg");
  iconDiv.innerHTML = icon;
}

function renderDateCarousel(element, datetime) {
  const dateDiv = element.querySelector(".item-date");
  dateDiv.innerText = datetime;
}

function renderTempCarousel(element, temp) {
  const tempDiv = element.querySelector(".item-temp");
  tempDiv.innerText = `${temp}°C`;
}
