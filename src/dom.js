export default function createCardDOM() {
  const cardDiv = document.createElement("div");
  cardDiv.className = "day-card";

  const upperDiv = createCardUpperDOM();
  const infoDiv = createInfoDOM();
  const carouselDiv = createCarouselDOM();

  cardDiv.appendChild(upperDiv);
  cardDiv.appendChild(infoDiv);
  cardDiv.appendChild(carouselDiv);
  return cardDiv;
}

function createCardUpperDOM() {
  const upperDiv = document.createElement("div");

  upperDiv.className = "upper-card";
  const simpleInfoDiv = createSimpleInfoDOM();

  const placeDiv = document.createElement("div");
  placeDiv.className = "place";

  upperDiv.appendChild(simpleInfoDiv);
  upperDiv.appendChild(placeDiv);
  return upperDiv;
}

function createSimpleInfoDOM() {
  const simpleInfoDiv = document.createElement("div");
  simpleInfoDiv.className = "simple-info";

  const dateDiv = document.createElement("div");
  dateDiv.className = "date";
  const iconDiv = document.createElement("div");
  iconDiv.className = "icon";
  const tempDiv = document.createElement("div");
  tempDiv.className = "temperature";

  simpleInfoDiv.appendChild(dateDiv);
  simpleInfoDiv.appendChild(iconDiv);
  simpleInfoDiv.appendChild(tempDiv);
  return simpleInfoDiv;
}

function createInfoDOM() {
  const infoDiv = document.createElement("div");
  infoDiv.className = "info";

  const weatherDetails = [
    "humidity",
    "cloudcover",
    "visibility",
    "precip",
    "precipprob",
    "preciptype",
    "snow",
    "snowdepth",
    "windspeed",
    "windgust",
    "winddir",
    "solarradiation",
    "solarenergy",
    "uvindex"
  ];

  weatherDetails.forEach((weatherDetail) => {
    const mainElement = document.createElement("div");
    mainElement.className = "info-value";
    mainElement.dataset.key = weatherDetail;
    const key = document.createElement("div");
    const value = document.createElement("div");
    key.className = "title";
    value.className = "value";
    mainElement.appendChild(key);
    mainElement.appendChild(value);
    infoDiv.appendChild(mainElement);
  });
  return infoDiv;
}

function createCarouselDOM() {
  const carouselDiv = document.createElement("div");
  carouselDiv.className = "carousel";

  for(let i = 0; i < 4; ++i) {
    const carouselElement = document.createElement("div");
    carouselElement.className = "carousel-element";
    carouselDiv.appendChild(carouselElement);
  }
  return carouselDiv;
}

