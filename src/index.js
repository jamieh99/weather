import "./styles.css";
import { todayReport } from "./today.js";
import { tomorrowReport } from "./tomorrow.js";
import { todayDate, tomorrowDate } from "./date.js";
import { locationToday } from "./locationToday.js";
import { locationTom } from "./locationTom.js";

todayReport();
//tomorrowReport();
todayDate();
tomorrowDate();

document.addEventListener("DOMContentLoaded", () => {
  const locationButton = document.querySelector("button");
  locationButton.addEventListener("click", (event) => {
    console.log("submitted");
    event.preventDefault();
    locationToday();
    locationTom();
  });
});

/*function loadReport() {
  const bottom = document.querySelector(".bottom");
  bottom.innerHTML = "";
  const location = document.querySelector(".bottom header");
  location.textContent = 
    //the input from the user
    locationToday();
  locationTom();
}*/
