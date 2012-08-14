var running= false;
var startTime = 0;
var totalRunningSeconds = 0;
var hoursRunning = "00";
var hoursRunningPad = "";
var minutesRunning = "00";
var minutesRunningPad = "";
var secondsRunning = "00";
var secondsRunningPad = "";
var formattedTime = "";
var updateTimeID;
var pauseSeconds = 0;
var pauseTime;

function startTimer(){
  if (running== false){
    running= true;
    startTime = new Date();
    updateTimeID = setInterval ( "updateTime()", 1000 );
  }
}



function pauseTimer(){
  if (running==true){
    running = false;
    pauseSeconds = totalRunningSeconds;
    pauseTime = formattedTime;
    clearInterval(updateTimeID);
  }
}

function resetTimer(){
  running = false;
  clearInterval(updateTimeID);
  startTime = 0;
  totalRunningSeconds = 0;
  hoursRunning = "00";
  hoursRunningPad = "";
  minutesRunning = "00";
  minutesRunningPad = "";
  secondsRunning = "00";
  secondsRunningPad = "";
  formattedTime = "";
  pauseSeconds = 0;
  pauseTime = 0;
  document.getElementById("timer").innerHTML = '00<span class="stopwatch-colon">:</span>00<span class="stopwatch-colon">:</span>00';
}

function updateTime(){

  var nowTime = new Date();
  totalRunningSeconds = pauseSeconds + Math.floor((nowTime - startTime)/1000);  // Math.floor((nowTime - startTime)/1000);

  // calculate the times

  // seconds
  secondsRunning = totalRunningSeconds % 60;
  if (secondsRunning >= 10){
    secondsRunningPad = "";
  } else {
    secondsRunningPad = "0";
  }

  //minutes
  if (totalRunningSeconds < 60) {
    minutesRunning = 0;
  } else {
    minutesRunning = Math.floor(totalRunningSeconds / 60) % 60;
  }

  // hours
  if (totalRunningSeconds < 3600){
    hoursRunning = 0;
  } else {
    hoursRunning = Math.floor(totalRunningSeconds / 3600) % 60;
  }

  if (minutesRunning >= 10){
    minutesRunningPad = "";
  } else {
    minutesRunningPad = "0";
  }

  if (hoursRunning >= 10){
    hoursRunningPad = "";
  } else {
    hoursRunningPad = "0";
  }

  formattedTime =   hoursRunningPad + hoursRunning + "<span class='stopwatch-colon'>:</span>" + minutesRunningPad + minutesRunning + "<span class='stopwatch-colon'>:</span>" + secondsRunningPad + secondsRunning;

  formattedTimeTitle =   hoursRunningPad + hoursRunning + ":" + minutesRunningPad + minutesRunning + ":" + secondsRunningPad + secondsRunning;


  document.getElementById("timer").innerHTML = formattedTime;
  document.title = formattedTimeTitle;
}


