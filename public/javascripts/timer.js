var run = false;
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

function superSimpleTimer(){
  if (run == false){
    run = true;
    startTime = new Date();
    updateTimeID = setInterval ( "updateTime()", 1000 );
  } else {
    run = false;
    startTime = 0;
    totalRunningSeconds = 0;
    clearInterval(updateTimeID);
    {
    document.getElementById("timer").innerHTML="";
    }
  } 
}

function updateTime(){

  var nowTime = new Date();
  totalRunningSeconds = Math.floor((nowTime - startTime)/1000);  // Math.floor((nowTime - startTime)/1000);
  
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

  formattedTime =   hoursRunningPad + hoursRunning + ":" + minutesRunningPad + minutesRunning + ":" + secondsRunningPad + secondsRunning;
  document.getElementById("timer").innerHTML = formattedTime;
}




