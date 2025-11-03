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
  upperDiv.appendChild(simpleInfoDiv);
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
  const placeDiv = document.createElement("div");
  placeDiv.className = "place";
  
  simpleInfoDiv.appendChild(dateDiv);
  simpleInfoDiv.appendChild(iconDiv);
  simpleInfoDiv.appendChild(tempDiv);
  return simpleInfoDiv;
}

function createInfoDOM() {
  const infoDiv = document.createElement("div");
  infoDiv.className = "lower-card";
  return infoDiv;
}

function createCarouselDOM() {
  const carouselDiv = document.createElement("div");
  carouselDiv.className = "carousel";
  return carouselDiv;
}

