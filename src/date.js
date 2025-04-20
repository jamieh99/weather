const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dateToday = new Date();
let date = dateToday.getDate();
let month = months[dateToday.getMonth()];
let day = days[dateToday.getDay()];

let st = [1, 21, 31];
let nd = [2, 22];
let rd = [3, 23];
let suffix;
if (st.includes(date)) {
  suffix = "st";
} else if (nd.includes(date)) {
  suffix = "nd";
} else if (rd.includes(date)) {
  suffix = "rd";
} else {
  suffix = "th";
}

export function todayDate() {
  const todayDate = document.querySelector(".todayDate");
  todayDate.textContent = `${day} the ${date}${suffix} of ${month}`;
}

export function tomorrowDate() {
  let tomorrowDate = new Date(dateToday);
  tomorrowDate.setDate(dateToday.getDate() + 1);
  let date2 = tomorrowDate.getDate();
  let month = months[tomorrowDate.getMonth()];
  let tomorrowDay = days[tomorrowDate.getDay()];

  if (st.includes(date2)) {
    suffix = "st";
  } else if (nd.includes(date2)) {
    suffix = "nd";
  } else if (rd.includes(date2)) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  const dateForTomorrow = document.querySelector(".tomorrowDate");
  dateForTomorrow.textContent = `${tomorrowDay} the ${date2}${suffix} of ${month}`;
}
