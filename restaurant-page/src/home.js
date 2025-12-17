const content_div = document.querySelector("#content");

export default function initPage() {
  const restaurant_name = document.createElement("h1");
  restaurant_name.textContent = "Neapolitan pizza";
  content_div.appendChild(restaurant_name);
}

