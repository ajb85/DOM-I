let time = { seconds: 0, ms: 0 };
const interval = 10;

// addEventListener for the start timer button
let startBtn = document.querySelector("button");
enableStartBtn(1);

let counter; // Global scope so I can pass the startInterval around easily

let resetBtn = document.querySelectorAll("button")[1];
resetBtn.disabled = true;

function startInterval() {
  if (time.seconds || time.ms) {
    resetTimer(); // Reset timer on any future runs

    // Reset text to white on any future runs
    document
      .querySelectorAll(".digit")
      .forEach(timerPiece => timerPiece.classList.remove("redDigit"));
  }

  resetBtn.disabled = false;
  resetBtn.addEventListener("click", handleResetClick);

  console.log("Click"); // Logging clicks to verify function (no "clicks" while timer running)

  // btn disabled while counting
  startBtn.removeEventListener("click", startInterval);
  startBtn.disabled = true;

  // Set initial times
  updateSeconds();
  updateMS();

  counter = setInterval(runInterval, interval); // Begin loop!
}

function runInterval() {
  // Run until 10 seconds then clearInterval
  if (time.seconds < 10) {
    //console.log(time);
    // Count until ms === 990 at which point instead of adding 10, reset counter
    // and add a second to seconds.
    if (time.ms < 990) {
      time.ms += 10;
      updateMS();
    } else {
      time.seconds += 1;
      time.ms = 0;
      updateSeconds();
    }
  } else {
    // Update counter display and exit the loop
    updateMS();
    finishInterval();
    clearInterval(counter);
  }
}

function finishInterval() {
  // by querySelectorAll (Nodelist)
  document
    .querySelectorAll(".digit")
    .forEach(timerPiece => timerPiece.classList.add("redDigit"));

  enableStartBtn(); // Let the user click the start button again
}

function updateSeconds() {
  // By querySelector (ELement)
  let secondTens = document.querySelector(".digits .digit");
  // By Class Name (HTML Collection)
  let secondOnes = document.getElementsByClassName("digit").item(1);

  let secStr = time.seconds.toString();
  secStr = secStr.length < 2 ? `0${secStr}` : secStr;
  secondOnes.textContent = secStr[1];
  secondTens.textContent = secStr[0];
}

function updateMS() {
  // By ID (element)
  let msHundreds = document.getElementById("msHundreds");
  // By querySElectorAll Nodelist
  let msTens = document.querySelectorAll(".digit")[4];
  let msStr = time.ms.toString();
  msStr = msStr.length < 3 ? `0${msStr}` : msStr;
  msHundreds.textContent = msStr[0];
  msTens.textContent = msStr[1];
}

function handleResetClick() {
  // Stop the timer, reset time,
  clearInterval(counter);
  resetTimer();
  enableStartBtn();
  resetBtn.disabled = true;
  resetBtn.removeEventListener("click", handleResetClick);
}
function resetTimer() {
  time.seconds = 0;
  time.ms = 0;
  updateSeconds();
  updateMS();
}

function enableStartBtn(firstTime) {
  // Enable button for next run
  startBtn.addEventListener("click", startInterval);
  if (!firstTime) {
    startBtn.disabled = false; // Only requiring input on the first use since it only happens once
  }
}
