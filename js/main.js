// Event listener for the buttons
document.getElementById("beginButton").addEventListener("click", breatheIn)
document.getElementById("restartButton").addEventListener("click", restart)

let seconds = 0;
let interval = 1000;
let breatheInTimer, holdTimer, breatheOutTimer;


// ------------------------------------------------------------------------ //
// Function to begin the breathing chain (BREATHE IN) (fires on clicking Begin button)
function breatheIn() {
  // Swap visibility of begin/restart buttons, but only if the timer is new
  if (!document.getElementById("beginButton").classList.contains("hidden")) {
    document.getElementById("beginButton").classList.toggle("hidden");
    document.getElementById("restartButton").classList.toggle("hidden");
  }

  // Put BREATHE IN instruction into the DOM
  document.getElementById("instructionArea").innerHTML = "breathe in deep..."
  // Put seconds into the DOM to begin counting
  document.getElementById("breatheInCountArea").innerHTML = "0";
  document.getElementById("holdCountArea").innerHTML = "";
  document.getElementById("breatheOutCountArea").innerHTML = "";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breatheInTimer = setInterval(countBreatheIn, interval);
}
// Function to count the BREATHE IN and put seconds into the DOM
function countBreatheIn() {
  ++seconds;
  if (seconds !== 3) {
    document.getElementById("breatheInCountArea").innerHTML = seconds;
  } else { // When 3 seconds have elapsed
    document.getElementById("breatheInCountArea").innerHTML = "3";
    clearInterval(breatheInTimer);
    hold();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain (HOLD)
function hold() {
  // Put HOLD instruction into the DOM
  document.getElementById("instructionArea").innerHTML = "hold..."
  // Put seconds into the DOM to reset the counter
  document.getElementById("holdCountArea").innerHTML = "0";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  holdTimer = setInterval(countHold, interval);
}
// Function to count the HOLD and put seconds into DOM
function countHold() {
  ++seconds;
  if (seconds !== 4) {
    document.getElementById("holdCountArea").innerHTML = seconds;
  } else { // When 4 seconds have elapsed
    document.getElementById("holdCountArea").innerHTML = "4";
    clearInterval(holdTimer);
    breatheOut();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain (BREATHE OUT)
function breatheOut() {
  // Put BREATHE OUT instruction into the DOM
  document.getElementById("instructionArea").innerHTML = "breathe out."
  // Put 1 into the DOM to reset the counter
  document.getElementById("breatheOutCountArea").innerHTML = "0";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breatheOutTimer = setInterval(countBreatheOut, interval);
}
function countBreatheOut() {
  ++seconds;
  if (seconds !== 5) {
    document.getElementById("breatheOutCountArea").innerHTML = seconds;
  } else { // when 5 seconds have elapsed
    document.getElementById("breatheOutCountArea").innerHTML = "5";
    clearInterval(breatheOutTimer);
    breatheIn();
  }
}




// Function to reset the process using the Reset button
function restart() {
  // Swap visibility of begin/restart buttons
  document.getElementById("beginButton").classList.toggle("hidden");
  document.getElementById("restartButton").classList.toggle("hidden");

  // Reset the seconds/instructions in the DOM
  document.getElementById("instructionArea").innerHTML = "";
  document.getElementById("breatheInCountArea").innerHTML = "";
  document.getElementById("holdCountArea").innerHTML = "";
  document.getElementById("breatheOutCountArea").innerHTML = "";

  // Reset second count
  seconds = 0;

  // Stop the timer variable
  clearInterval(breatheInTimer);
  clearInterval(holdTimer);
  clearInterval(breatheOutTimer);
}