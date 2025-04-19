export function tomorrowReport() {
  let description = "";
  let temp;
  let rain;
  let wind;
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/stevenston?key=CQX6SHJ8GKK4PZYZUHBW59NNL",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.days[1]);
      description = response.days[1].description;
      temp = response.days[1].tempmax;
      let celsius = Math.round((temp - 32) / (9 / 5));
      rain = response.days[1].precipprob;
      wind = response.days[1].windspeed;
      let windRounded = Math.round(wind);
      const displayDescription = document.querySelector(".tomorrowDescription");
      displayDescription.textContent = `${description}`;
      const displayTemp = document.querySelector(".tomorrowTemp");
      displayTemp.textContent = `The maximum temperature will be: ${celsius}C.`;
      const displayRain = document.querySelector(".tomorrowRain");
      displayRain.textContent = `There is a ${rain}% chance of rain.`;
      const displayWind = document.querySelector(".tomorrowWind");
      displayWind.textContent = `The wind speed will be ${windRounded}mph.`;
      console.log(description);
    });
}
