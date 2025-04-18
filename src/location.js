export function createReport() {
  let description = "";
  let temp;
  let wind;
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=CQX6SHJ8GKK4PZYZUHBW59NNL",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.days[1]);
      description = response.days[1].description;
      temp = response.days[1].temp;
      wind = response.days[1].windspeed;
      const displayReport = document.querySelector(".report");
      displayReport.textContent = `The weather tomorrow will be ${description}.
      The temperature will be ${temp}.
      The wind speed will be ${wind}`;
      console.log(description);
    });
}
