export function todayReport() {
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
      console.log(response.days[0]);
      description = response.days[0].description;
      hours = response.days[0].hours;

      // icons box
      const icon1 = document.querySelector(".icon1");
      const icon2 = document.querySelector(".icon2");
      const icon3 = document.querySelector(".icon3");
      let iconAM;
      let iconPM;
      let iconNight;

      // AM
      if (hours[8].conditions.includes("cloud")) {
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

        if (hours[8].conditions.includes("Partially")) {
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
        if (hours[8].conditions.includes("rain")) {
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
      } else {
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
      if (hours[14].conditions.includes("cloud")) {
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

        if (hours[14].conditions.includes("Partially")) {
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
        if (hours[14].conditions.includes("rain")) {
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
      } else {
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
      if (hours[22].conditions.includes("cloud")) {
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

        if (hours[22].conditions.includes("Partially")) {
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
            "#partial-night"
          );
          partial.appendChild(use);
          iconNight = partial;
        }
        if (hours[22].conditions.includes("rain")) {
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
      } else {
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

      // description box
      const displayDescription = document.querySelector(".description");
      displayDescription.textContent = `${description}`;

      // rain, temp and wind box
      // would have to get the time and change the morning/ afternoon forecast to blank if it had already passed

      // rain box
      const displayRain = document.querySelector(".rainDescrip");
      const rainDescripAM = document.querySelector(".rainDescripAM");
      const rainDescripPM = document.querySelector(".rainDescripPM");
      const rainDescripNight = document.querySelector(".rainDescripNight");

      const time = new Date();
      const now = time.getHours();
      console.log(now);

      let mornRain = Math.round(hours[8].precipprob);
      let aftRain = Math.round(hours[14].precipprob);
      let nightRain = Math.round(hours[22].precipprob);

      if (now > 12) {
        rainDescripAM.textContent = "--";
      } else {
        rainDescripAM.textContent = `There is a ${mornRain}% chance of rain`;
      }

      if (now > 18) {
        rainDescripPM.textContent = "--";
      } else {
        rainDescripPM.textContent = `In the afternoon there is a ${aftRain}%`;
      }

      // if (timeNow > 22) {
      //  rainDescripNight.textContent = "--";
      // } else {
      rainDescripNight.textContent = `There is a ${nightRain}% chance at night`;
      //}

      // temp box
      let temp;
      temp = response.days[0].tempmax;
      let celsius = Math.round((temp - 32) / (9 / 5));
      const displayTemp = document.querySelector(".tempDescrip");
      displayTemp.textContent = `The maximum temperature will be: ${celsius}C.`;

      // wind box
      //rain = response.days[0].precipchance;
      let wind;
      wind = response.days[0].windspeed;
      let windRounded = Math.round(wind);

      const displayWind = document.querySelector(".windDescrip");
      displayWind.textContent = `The wind speed will be ${windRounded}mph.`;
      console.log(description);
    });
}
