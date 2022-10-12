var arr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function returnDay(num) {
  if (num >= 1 && num <= 7) {
    //call function
    return arr[num - 1];
  } else {
    return null;
  }
}

var day = returnDay(8);
console.log(day);

//Another Solution
var weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function returnDay(x) {
  return x < 1 || x > 7 ? null : weekDay[x];
}

console.log(returnDay(0));
