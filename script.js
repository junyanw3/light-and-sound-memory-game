/*********************************************************************************** 
  If you're feeling fancy you can add interactivity to your site with Javascript 
************************************************************************************/

/*******************
  global variables  
********************/

// pattern: keep track of the secret pattern of button presses
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];

// progress: tracks how far along the player is in guessing the pattern
var progress = 0;

// guessCounter: keep track of where the user is in the clue sequence
var guessCounter = 0;

// gamePlaying: tracks if the game is currently active
var gamePlaying = false;

// tonePlaying: keeps track of whether or not there is a tone playing
var tonePlaying = false;

// vulume: must be between 0.0 and 1.0
var volume = 0.5;


/*******************
  global constants 
********************/

// clueHoldTime: how long to hold each clue's light/sound
const clueHoldTime = 500; 

// cluePauseTime: how long to pause in between clues
const cluePauseTime = 200; 

// nextClueWaitTime: how long to wait before starting playback of the clue sequence
const nextClueWaitTime = 500; 


/**********************
  Page Initialization  
***********************/

// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);


/*************
  Functions  
*************/

// startGame: when the user wants to start the game
function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;

  // Start button will disappear and Stop button will appear
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}


// stopGame: when the user wants to stop the game
function stopGame() {
  // initialize game variables
  gamePlaying = false;

  // Start button will appear and Stop button will disappear
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
};


// playTone: takes a button number (1 through 4, corresponding with the four game buttons on
// the page) and a length of time in milliseconds (1000 milliseconds = 1 second). It plays a
// tone for the amount of time specified
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}


// startTone: when called, the tone will continue playing until you call stopTone
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}


// stopTone: when called, stops the tone
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}


// lightButton: lights the button
function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit")
}


// clearButton: clears the button
function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")
}


// playSingleClue: playing a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}


// playClueSequence: playint the sequence of clues
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i = 0; i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


// loseGame: if the player lost the game, stop the game and alter the player
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}


// winGame: if the player won the game, stop the game and alter the player
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}


// guess: checks if the user correctly guess the correct button
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){
    // the guess was correct
    if(guessCounter == progress){
      // if the turn is over
      if(progress == pattern.length - 1){
        // if last turn, the player has won
        winGame();
      }else{
        // if not the last turn, increment progress and play the next clue sequence
        progress++;
        playClueSequence();
      }
    }else{
      // if the turn is not over, increment the guess counter
      guessCounter++;
    }
  }else{
    // the guess was incorrect and the player lost the game
    loseGame();
  }
}    
