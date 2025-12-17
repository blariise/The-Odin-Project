const content_div = document.querySelector("#content");

export default function initAbout() {
  const about_container = document.createElement("div");
  about_container.classList.add("about-container");
  const map = generateMap();

  about_container.appendChild(map);
  content_div.appendChild(about_container);
}

function generateMap() {
  const frame = document.createElement("iframe");
  frame.setAttribute("width", "425");
  frame.setAttribute("height", "350");
  frame.setAttribute("src", `https://www.openstreetmap.org/export/embed.html
    ?bbox=14.250302705107611%2C40.82836065976664%2C14.252244624434393%2C40.8303313246931&amp;
    layer=mapnik&amp;
    marker=40.82934599955072%2C14.25127366477102`
  );
  return frame;
}
