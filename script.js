/*
let seconds = 0
let minutes = 0
let hours = 0
let startTime = () => {
  document.getElementById('seconds').innerHTML = seconds++
  if (seconds ==59) {
    seconds = 0
    document.getElementById('minutes').innerHTML = minutes++
    if (minutes == 59) {
      minutes = 0
      document.getElementById('hours').innerHTML = hours++
      if (hours == 23) {
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
*/
// var c = 0;
// function startTime() {
//   document.getElementById("seconds").innerHTML = ++c;}
//   setInterval(startTime, 1000)
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isRunning = false;

function updateTime() {
  if (seconds == 59) {
    seconds = 0;
 if (minutes === 59){
   minutes = 0;
   hours++;
 } else{
   minutes++;
 }
} else{
  seconds++;
}
  
  // if (minutes == 59) {
  //   minutes = 0;
  //   hours++;
  // } else {
  //   minutes++;
  // }
  
  document.getElementById('seconds').innerHTML = seconds;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('hours').innerHTML = hours;
} 



function startTime() {
  if(isRunning ===false){
  timer = setInterval(updateTime, 1000);
  isRunning = true;
  }
}

function stopTime() {
  clearInterval(timer);
  isRunning = False;
}

function resetTime() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  stop()
}
