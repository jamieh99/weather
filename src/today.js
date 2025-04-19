export function todayReport() {
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
      console.log(response.days[0]);
      description = response.days[0].description;
      temp = response.days[0].tempmax;
      let celsius = Math.round((temp - 32) / (9 / 5));
      rain = response.days[0].precipprob;
      wind = response.days[0].windspeed;
      const displayDescription = document.querySelector(".description");
      displayDescription.textContent = `${description}`;
      const displayTemp = document.querySelector(".temp");
      displayTemp.textContent = `The maximum temperature will be: ${celsius}C.`;
      const displayRain = document.querySelector(".rain");
      displayRain.textContent = `There is a ${rain}% chance of rain.`;
      const displayWind = document.querySelector(".wind");
      displayWind.textContent = `The wind speed will be ${wind}mph.`;
      console.log(description);
    });
}
