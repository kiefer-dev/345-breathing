// Event listener for the buttons
document.getElementById("beginButton").addEventListener("click", breatheIn)
document.getElementById("restartButton").addEventListener("click", restart)

let seconds = 1;
let interval = 1000;
let breatheInTimer, holdTimer, breatheOutTimer;



// Function to begin the breathing chain (BREATHE IN) (fires on clicking Begin button)
function breatheIn() {
  // Swap visibility of begin/restart buttons
  document.getElementById("beginButton").classList.toggle("hidden");
  document.getElementById("restartButton").classList.toggle("hidden");

  // Put BREATHE IN instruction into the DOM
  document.getElementById("instructionArea").innerHTML = "breathe in deep."
  // Put seconds into the DOM to begin counting
  document.getElementById("secondCountArea").innerHTML = "1";

  // Initialize the timer
  breatheInTimer = setInterval(countBreatheIn, interval);
}
// Function to count the BREATHE IN and put seconds into the DOM
function countBreatheIn() {
  ++seconds;
  if (seconds !== 4) {
    document.getElementById("secondCountArea").innerHTML = seconds;
  } else { // When 3 seconds have elapsed
    clearInterval(breatheInTimer);
    hold();
  }
}



// Function to continue the breathing chain (HOLD)
function hold() {
  // Put HOLD instruction into the DOM
  document.getElementById("instructionArea").innerHTML = "hold..."
  // Put 1 into the DOM to reset the counter
  document.getElementById("secondCountArea").innerHTML = "1";

  // Reset seconds
  seconds = 1;
  // Initialize the timer
  holdTimer = setInterval(countHold, interval);
}
// Function to count the HOLD and put seconds into DOM
function countHold() {
  ++seconds;
  if (seconds !== 5) {
    document.getElementById("secondCountArea").innerHTML = seconds;
  } else { // When 4 seconds have elapsed
    clearInterval(holdTimer);
  }
}




// Function to reset the process using the Reset button
function restart() {
  // Swap visibility of begin/restart buttons
  document.getElementById("beginButton").classList.toggle("hidden");
  document.getElementById("restartButton").classList.toggle("hidden");

  // Reset the seconds/instructions in the DOM
  document.getElementById("instructionArea").innerHTML = "";
  document.getElementById("secondCountArea").innerHTML = "";

  // Reset second count
  seconds = 1;

  // Stop the timer variable
  clearInterval(breatheInTimer);
}