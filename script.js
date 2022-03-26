/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var mistakeCount = 0; //count three allowed mistakes


//Global Variables
var pattern = [6, 5, 2, 4, 1, 3];
var progress = 0; 
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

var Timer;

const display = document.querySelector('#time');

function newPattern() {
  return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, 
          Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
}


function startGame(){
    //initialize game variables  
    progress = 0;
    gamePlaying = true;
    clueHoldTime = 1000;
    mistakeCount = 0;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    pattern = newPattern();
    playClueSequence();
}

function stopGame(){
    clearInterval(Timer);
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 300,
  2: 400,
  3: 600,
  4: 800,
  5: 1000,
  6: 1200
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  //clearInterval(Timer);
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

var Timer;

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 60;
  }
  var timeleft = 15;

  Timer = setInterval(function function1(){
  document.getElementById("time").innerHTML = timeleft + 
  "&nbsp"+"seconds remaining";

  timeleft -= 1;
  if(timeleft <= -1){
    document.getElementById("time").innerHTML = "Time is up!"
  }
      
  if (timeleft <= -2) {
    clearInterval(Timer);
    loseGame();
  }
  }, 1000);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        clearInterval(Timer);
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    if(mistakeCount == 2){
      loseGame();
    }else {
      mistakeCount++;
      if (3-mistakeCount > 1) {
        alert("You made a mistake. Try again! You have " + (3 - mistakeCount) + " more mistakes allowed.");
      } else {
        alert("You made a mistake. Try again! You have " + (3 - mistakeCount) + " more mistake allowed.");
      }
      
    }
  }
}


console.log("Hello, world!");
