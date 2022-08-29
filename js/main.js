// Event listener for the buttons
document.getElementById("beginButton").addEventListener("click", breathCounting)
document.getElementById("stopButton").addEventListener("click", reset)

let seconds = 0;

// Function that pushes the count to the counting area (fires on clicking Begin button)
function breathCounting() {


}

// Function to reset the process
function reset() {
  seconds = 0;
  document.getElementById("instructionArea").innerHTML = "";
  document.getElementById("secondCountArea").innerHTML = "";
}