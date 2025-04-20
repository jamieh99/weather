export function tomorrowReport() {
  let description = "";
  let hours;

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
      hours = response.days[1].hours;
      console.log(hours);

      // icons box
      const icon1 = document.querySelector(".tomIcon1");
      const icon2 = document.querySelector(".tomIcon2");
      const icon3 = document.querySelector(".tomIcon3");
      let iconAM;
      let iconPM;
      let iconNight;

      // AM
      // rmemeber that includes is case sensitive
      console.log(response.days[1].hours[8].conditions.toLowerCase());
      if (hours[8].conditions.toLowerCase().includes("cloud")) {
        const cloud = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        cloud.setAttribute("viewBox", "0 0 24 24");
        cloud.setAttribute("width", "50px");
        cloud.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#cloudy");
        cloud.appendChild(use);
        iconAM = cloud;
      }
      if (hours[8].conditions.toLowerCase().includes("partially")) {
        const partial = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        partial.setAttribute("viewBox", "0 0 24 24");
        partial.setAttribute("width", "50px");
        partial.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          "#partially-cloudy"
        );
        partial.appendChild(use);
        iconAM = partial;
      }
      if (hours[8].conditions.toLowerCase().includes("rain")) {
        const rain = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        rain.setAttribute("viewBox", "0 0 24 24");
        rain.setAttribute("width", "50px");
        rain.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#rainy");
        rain.appendChild(use);
        iconAM = rain;
      }
      if (hours[8].conditions.toLowerCase().includes("sun")) {
        const sun = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        sun.setAttribute("viewBox", "0 0 24 24");
        sun.setAttribute("width", "50px");
        sun.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sunny");
        sun.appendChild(use);
        iconAM = sun;
      }
      icon1.appendChild(iconAM);

      // PM
      if (hours[14].conditions.toLowerCase().includes("cloud")) {
        const cloud = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        cloud.setAttribute("viewBox", "0 0 24 24");
        cloud.setAttribute("width", "50px");
        cloud.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#cloudy");
        cloud.appendChild(use);
        iconPM = cloud;
      }
      if (hours[14].conditions.toLowerCase().includes("partially")) {
        const partial = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        partial.setAttribute("viewBox", "0 0 24 24");
        partial.setAttribute("width", "50px");
        partial.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          "#partially-cloudy"
        );
        partial.appendChild(use);
        iconPM = partial;
      }
      if (hours[14].conditions.toLowerCase().includes("rain")) {
        const rain = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        rain.setAttribute("viewBox", "0 0 24 24");
        rain.setAttribute("width", "50px");
        rain.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#rainy");
        rain.appendChild(use);
        iconPM = rain;
      }
      if (hours[14].conditions.toLowerCase().includes("sun")) {
        const sun = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        sun.setAttribute("viewBox", "0 0 24 24");
        sun.setAttribute("width", "50px");
        sun.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sunny");
        sun.appendChild(use);
        iconPM = sun;
      }

      icon2.appendChild(iconPM);

      // night
      if (hours[22].conditions.toLowerCase().includes("cloud")) {
        const cloud = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        cloud.setAttribute("viewBox", "0 0 24 24");
        cloud.setAttribute("width", "50px");
        cloud.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#cloudy");
        cloud.appendChild(use);
        iconNight = cloud;
      }
      if (hours[22].conditions.toLowerCase().includes("partially")) {
        const partial = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        partial.setAttribute("viewBox", "0 0 24 24");
        partial.setAttribute("width", "50px");
        partial.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#cloudy");
        partial.appendChild(use);
        iconNight = partial;
      }
      if (hours[22].conditions.toLowerCase().includes("rain")) {
        const rain = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        rain.setAttribute("viewBox", "0 0 24 24");
        rain.setAttribute("width", "50px");
        rain.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#rainy");
        rain.appendChild(use);
        iconNight = rain;
      }
      if (hours[22].conditions.toLowerCase().includes("clear")) {
        const clear = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        clear.setAttribute("viewBox", "0 0 24 24");
        clear.setAttribute("width", "50px");
        clear.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          "#clear-night"
        );
        clear.appendChild(use);
        iconNight = clear;
      }

      icon3.appendChild(iconNight);

      // rain box
      const rainDescripAM = document.querySelector(".tomRainDescripAM");
      const rainDescripPM = document.querySelector(".tomRainDescripPM");
      const rainDescripNight = document.querySelector(".tomRainDescripNight");

      let mornRain = Math.round(hours[8].precipprob);
      let aftRain = Math.round(hours[14].precipprob);
      let nightRain = Math.round(hours[22].precipprob);

      rainDescripAM.textContent = `${mornRain}%`;
      rainDescripPM.textContent = `${aftRain}%`;
      rainDescripNight.textContent = `${nightRain}%`;

      // temp box
      let temp;
      temp = response.days[0].tempmax;
      let mornTemp = Math.round(hours[8].temp);
      let aftTemp = Math.round(hours[14].temp);
      let nightTemp = Math.round(hours[22].temp);

      let mornTempC = Math.round((mornTemp - 32) / (9 / 5));
      let aftTempC = Math.round((aftTemp - 32) / (9 / 5));
      let nightTempC = Math.round((nightTemp - 32) / (9 / 5));

      const displayTempAM = document.querySelector(".tomTempDescripAM");
      displayTempAM.textContent = mornTempC;

      const displayTempPM = document.querySelector(".tomTempDescripPM");
      displayTempPM.textContent = aftTempC;

      const displayTempNight = document.querySelector(".tomTempDescripNight");
      displayTempNight.textContent = nightTempC;

      //wind box
      let mornWind = Math.round(hours[8].windspeed);
      let aftWind = Math.round(hours[14].windspeed);
      let nightWind = Math.round(hours[22].windspeed);

      const displayWindAM = document.querySelector(".tomWindDescripAM");
      displayWindAM.textContent = `${mornWind}mph`;

      const displayWindPM = document.querySelector(".tomWindDescripPM");
      displayWindPM.textContent = `${aftWind}mph`;

      const displayWindNight = document.querySelector(".tomWindDescripNight");
      displayWindNight.textContent = `${nightWind}mph`;

      // description box
      const displayDescription = document.querySelector(".tomorrowDescription");
      displayDescription.textContent = `${description}`;
    });
}
