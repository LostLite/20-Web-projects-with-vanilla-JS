// Get active elements
const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let timing = false;
let mins = 0;
let secs = 0;
let myTimer = null;

//define methods
function togglePlayStatus() {
    timing = timing?false:true;
    if(timing){
        updateTimer();
        start.innerHTML = '<i class="fa fa-pause fa-2x"></>';
    }else{
        if(myTimer !== null){
            clearInterval(myTimer)
        }
        start.innerHTML = '<i class="fa fa-play fa-2x"></>';
    }
}
function stopTimer() {
    if(myTimer !== null){
        clearInterval(myTimer)
    }
    start.innerHTML = '<i class="fa fa-play fa-2x"></>';
}
function resetTimer() {
    mins = 0;
    secs = 0;
    timer.innerHTML = '00:00'
}

function updateTimer(){
    myTimer = setInterval(function(){
        
        secs++;
        if(secs === 60){
            secs = 0; //reset seconds
            mins++; //add minutes
        }
        
        if(mins < 10 ){
            mins = String(mins).length ===1? '0' + String(mins):String(mins);
        }
    
        if(secs < 10){
            secs = '0' + String(secs);
        }
    
        timer.innerHTML = `${mins}:${secs}`
    }, 1000);
}

//set Event listeners
start.addEventListener('click', togglePlayStatus);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);
