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
      description = response.days[0].description;
      hours = response.days[0].hours;
      console.log(hours);

      // icons box
      const icon1 = document.querySelector(".icon1");
      const icon2 = document.querySelector(".icon2");
      const icon3 = document.querySelector(".icon3");
      let iconAM;
      let iconPM;
      let iconNight;

      // AM
      // rmemeber that includes is case sensitive

      if (hours[8].conditions.toLowerCase().includes("clear")) {
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
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sunny");
        clear.appendChild(use);
        iconAM = clear;
      }
      if (hours[8].conditions.toLowerCase().includes("overcast")) {
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
      if (hours[8].conditions.toLowerCase().includes("heavy")) {
        const pouring = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        pouring.setAttribute("viewBox", "0 0 24 24");
        pouring.setAttribute("width", "50px");
        pouring.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#pouring");
        pouring.appendChild(use);
        iconAM = pouring;
      }
      if (hours[8].conditions.toLowerCase().includes("snow")) {
        const snow = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        snow.setAttribute("viewBox", "0 0 24 24");
        snow.setAttribute("width", "50px");
        snow.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#snowy");
        snow.appendChild(use);
        iconAM = snow;
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
      if (hours[8].conditions.toLowerCase().includes("partial")) {
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
      if (hours[8].conditions.toLowerCase().includes("storm")) {
        const storm = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        storm.setAttribute("viewBox", "0 0 24 24");
        storm.setAttribute("width", "50px");
        storm.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#stormy");
        storm.appendChild(use);
        iconAM = storm;
      }
      if (hours[8].conditions.toLowerCase().includes("fog")) {
        const fog = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        fog.setAttribute("viewBox", "0 0 24 24");
        fog.setAttribute("width", "50px");
        fog.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#fog");
        fog.appendChild(use);
        iconAM = fog;
      }
      // this checks if iconAM is null before appending
      // if it is null, nothing will be appended to icon1
      // and instead its textContent will be a '?'
      if (iconAM) {
        icon1.appendChild(iconAM);
      } else {
        icon1.textContent = "?";
      }

      // PM
      if (hours[14].conditions.toLowerCase().includes("clear")) {
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
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sunny");
        clear.appendChild(use);
        iconPM = clear;
      }
      if (hours[14].conditions.toLowerCase().includes("overcast")) {
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
      if (hours[14].conditions.toLowerCase().includes("heavy")) {
        const pouring = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        pouring.setAttribute("viewBox", "0 0 24 24");
        pouring.setAttribute("width", "50px");
        pouring.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#pouring");
        pouring.appendChild(use);
        iconPM = pouring;
      }
      if (hours[14].conditions.toLowerCase().includes("snow")) {
        const snow = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        snow.setAttribute("viewBox", "0 0 24 24");
        snow.setAttribute("width", "50px");
        snow.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#snowy");
        snow.appendChild(use);
        iconPM = snow;
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
      if (hours[14].conditions.toLowerCase().includes("partial")) {
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
      if (hours[14].conditions.toLowerCase().includes("storm")) {
        const storm = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        storm.setAttribute("viewBox", "0 0 24 24");
        storm.setAttribute("width", "50px");
        storm.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#stormy");
        storm.appendChild(use);
        iconPM = storm;
      }
      if (hours[14].conditions.toLowerCase().includes("fog")) {
        const fog = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        fog.setAttribute("viewBox", "0 0 24 24");
        fog.setAttribute("width", "50px");
        fog.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#fog");
        fog.appendChild(use);
        iconPM = fog;
      }

      if (iconPM) {
        icon2.appendChild(iconPM);
      } else {
        icon2.textContent = "?";
      }

      // night
      if (hours[20].conditions.toLowerCase().includes("overcast")) {
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
      if (hours[20].conditions.toLowerCase().includes("cloud")) {
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
      if (hours[20].conditions.toLowerCase().includes("rain")) {
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
      if (hours[20].conditions.toLowerCase().includes("heavy")) {
        const pouring = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        pouring.setAttribute("viewBox", "0 0 24 24");
        pouring.setAttribute("width", "50px");
        pouring.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#pouring");
        pouring.appendChild(use);
        iconNight = pouring;
      }
      if (hours[20].conditions.toLowerCase().includes("snow")) {
        const snow = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        snow.setAttribute("viewBox", "0 0 24 24");
        snow.setAttribute("width", "50px");
        snow.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#snowy");
        snow.appendChild(use);
        iconNight = snow;
      }
      if (hours[20].conditions.toLowerCase().includes("clear")) {
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
      if (hours[20].conditions.toLowerCase().includes("partially")) {
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
      if (hours[20].conditions.toLowerCase().includes("storm")) {
        const storm = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        storm.setAttribute("viewBox", "0 0 24 24");
        storm.setAttribute("width", "50px");
        storm.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#stormy");
        storm.appendChild(use);
        iconNight = storm;
      }
      if (hours[20].conditions.toLowerCase().includes("fog")) {
        const fog = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        fog.setAttribute("viewBox", "0 0 24 24");
        fog.setAttribute("width", "50px");
        fog.setAttribute("height", "50px");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#fog");
        fog.appendChild(use);
        iconNight = fog;
      }

      if (iconNight) {
        icon3.appendChild(iconNight);
      } else {
        icon3.textContent = "?";
      }

      // rain box

      const time = new Date();
      const now = time.getHours();

      const rainDescripAM = document.querySelector(".rainDescripAM");
      const rainDescripPM = document.querySelector(".rainDescripPM");
      const rainDescripNight = document.querySelector(".rainDescripNight");

      let mornRain = Math.round(hours[8].precipprob);
      let aftRain = Math.round(hours[14].precipprob);
      let nightRain = Math.round(hours[22].precipprob);

      if (now > 12) {
        rainDescripAM.textContent = "--";
      } else {
        rainDescripAM.textContent = `${mornRain}%`;
      }

      if (now > 16) {
        rainDescripPM.textContent = "--";
      } else {
        rainDescripPM.textContent = `${aftRain}%`;
      }

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

      const displayTempAM = document.querySelector(".tempDescripAM");
      displayTempAM.textContent = mornTempC;

      const displayTempPM = document.querySelector(".tempDescripPM");
      displayTempPM.textContent = aftTempC;

      const displayTempNight = document.querySelector(".tempDescripNight");
      displayTempNight.textContent = nightTempC;

      //wind box
      let mornWind = Math.round(hours[8].windspeed);
      let aftWind = Math.round(hours[14].windspeed);
      let nightWind = Math.round(hours[22].windspeed);

      const displayWindAM = document.querySelector(".windDescripAM");
      displayWindAM.textContent = `${mornWind}mph`;

      const displayWindPM = document.querySelector(".windDescripPM");
      displayWindPM.textContent = `${aftWind}mph`;

      const displayWindNight = document.querySelector(".windDescripNight");
      displayWindNight.textContent = `${nightWind}mph`;

      // description box
      const displayDescription = document.querySelector(".description");
      displayDescription.textContent = `${description}`;
    });
}
