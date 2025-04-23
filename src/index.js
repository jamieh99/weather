import "./styles.css";
import { todayReport } from "./today.js";
import { tomorrowReport } from "./tomorrow.js";
import { todayDate, tomorrowDate } from "./date.js";
import { locationToday } from "./locationToday.js";
import { locationTom } from "./locationTom.js";

document.addEventListener("DOMContentLoaded", () => {
  todayReport();
  tomorrowReport();
  todayDate();
  tomorrowDate();

  const locationButton = document.querySelector(".submit");
  locationButton.addEventListener("click", (event) => {
    console.log("submitted");
    locationToday();
    locationTom();
  });
  const userInput = document.querySelector(".text");
  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      locationToday();
      locationTom();
      console.log("enter key pressed");
    }
  });
});
