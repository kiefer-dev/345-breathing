// Event listener for the buttons
document.getElementById("beginButton").addEventListener("click", breathCounting)
document.getElementById("stopButton").addEventListener("click", reset)

let seconds = 0;
let timerVariable;

function countSeconds() {
  ++seconds;
  document.getElementById("secondCountArea").innerHTML = seconds;
}

// Function that pushes the count to the counting area (fires on clicking Begin button)
function breathCounting() {
  document.getElementById("beginButton").classList.toggle("hidden");
  document.getElementById("stopButton").classList.toggle("hidden");

  timerVariable = setInterval(countSeconds, 1000);



}

// Function to reset the process
function reset() {
  document.getElementById("stopButton").classList.toggle("hidden");
  document.getElementById("beginButton").classList.toggle("hidden");
  seconds = 0;
  clearInterval(timerVariable);
  document.getElementById("instructionArea").innerHTML = "";
  document.getElementById("secondCountArea").innerHTML = "";
}