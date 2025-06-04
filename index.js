const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
    isRunning = true;
  }
}

function stop() {
  if(isRunning){
    clearInterval(timer);
    elapsedTime= Date.now() - startTime;
    isRunning=false;
  }

}

function reset() {
 clearInterval(timer);
 startTime=0;
 elapsedTime=0;
 display.textContent = "00:00:00.00";
  isRunning = false;
    
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / 3600000);
  let minutes = Math.floor((elapsedTime % 3600000) / 60000);
  let seconds = Math.floor((elapsedTime % 60000) / 1000);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  display.textContent = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds
    .toString()
    .padStart(2, '0')}`;
}
