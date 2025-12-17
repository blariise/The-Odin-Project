import "./styles.css";
import initHome from "./home.js";
import initMenu from "./menu.js";
import initAbout from "./about.js";

initHome();

function clearContent() {
  const content_div = document.querySelector("#content");
  while (content_div.firstChild) {
    content_div.removeChild(content_div.firstChild);
  }
}

function setActiveButton(buttonToActive) {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach( (button) => {
    button.classList.remove("active");
  });
  buttonToActive.classList.add("active");
}

(() => {
  const nav = document.querySelector("nav");
  nav.addEventListener("click", (event) => {
    const button = event.target;
    if (button.classList.item(0) === "nav-btn") {
      setActiveButton(button);
      clearContent();
    }

    switch (button.textContent) {
      case "Home":
        initHome();
        break;
      case "Menu":
        initMenu();
        break;
      case "About":
        initAbout();
        break;
    }
  });
})();
