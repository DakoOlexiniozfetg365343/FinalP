let hours = 59;
let minutes = 59;
let seconds = 59;

function updateTimer() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    return;
  }

  if (seconds === 0) {
    seconds = 59;
    if (minutes === 0) {
      minutes = 59;
      if (hours > 0) {
        hours--;
      }
    } else {
      minutes--;
    }
  } else {
    seconds--;
  }

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

const timerInterval = setInterval(updateTimer, 1000);
