import "./styles.css";
import { todayReport } from "./today.js";
import { tomorrowReport } from "./tomorrow.js";
import { todayDate, tomorrowDate } from "./date.js";
import { locationToday } from "./locationToday.js";
import { locationTom } from "./locationTom.js";

todayReport();
tomorrowReport();
todayDate();
tomorrowDate();

const locationButton = document.getElementById("menu");
locationButton.addEventListener("click", loadReport);

function loadReport() {
  const bottom = document.querySelector(".bottom");
  bottom.innerHTML = "";
  const location = document.querySelector(".bottom header");
  location.textContent =
    //the input from the user
    locationToday();
  locationTom();
}
