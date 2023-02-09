const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;

startButton.addEventListener("click", () =>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseButton.addEventListener();
resetButton.addEventListener();

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) %60);
    mins = Math.floor((elapsedTime / 1000 *60) %60);
    hrs = Math.floor((elapsedTime / 1000 *60 *60) %60);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;


}

