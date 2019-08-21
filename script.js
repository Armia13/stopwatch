let seconds = 0
let minutes = 0
let hours = 0
let startTime = () => {
  document.getElementById('seconds').innerHTML = seconds++
  if (seconds >= 60) {
    seconds = 0
    document.getElementById('minutes').innerHTML = minutes++
    if (minutes >= 60) {
      minutes = 0
      document.getElementById('hours').innerHTML = hours++
      if (hours >= 60) {
        minutes = 0
        document.getElementById('days').innerHTML = days++
      }
    }
  }
}
let a = setInterval(startTime, 1000)
let stopTime = () => {
  clearInterval(a)
}

// var c = 0;
// function startTime() {
//   document.getElementById("seconds").innerHTML = ++c;}
//   setInterval(startTime, 1000)
