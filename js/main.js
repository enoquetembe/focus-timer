const pomodoroDurationInput = document.getElementById("pomodoro-duration")
const shortBreakDurationInput = document.getElementById("short-break-duration")
const longBreakDurationInput = document.getElementById("long-break-duration")
const startButton = document.getElementById("button-start")
const pauseButton = document.getElementById("button-pause")
const stopButton = document.getElementById("button-stop")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

let currentDuration = 0 // The current duration in seconds
let intervalId = null // The ID returned by setInterval

// Update the timer display
function updateTimer() {
  // Convert seconds to minutes and seconds
  const minutes = Math.floor(currentDuration / 60)
  const seconds = currentDuration % 60

  // Add leading zeros if necessary
  minutesElement.innerText = `${minutes}`.padStart(2, "0")
  secondsElement.innerText = `${seconds}`.padStart(2, "0")
}

// Decrement the timer by 1 second
function tick() {
  currentDuration--
  updateTimer()

  // Stop the timer if it reaches 0
  if (currentDuration <= 0) {
    stopTimer()
  }
}

// Start the timer
function startTimer() {
  // Get the duration from the input field
  currentDuration = 5 * 60
  updateTimer()

  // Start the interval
  intervalId = setInterval(tick, 1000)

  // Show the pause button and hide the start button
  pauseButton.classList.remove("hide")
  startButton.classList.add("hide")
}

// Pause the timer
function pauseTimer() {
  // Clear the interval
  clearInterval(intervalId)

  // Show the start button and hide the pause button
  startButton.classList.remove("hide")
  pauseButton.classList.add("hide")
}


// Stop the timer
function stopTimer() {
  // Clear the interval
  clearInterval(intervalId)

  // Reset the current duration to 0
  currentDuration = 0
  updateTimer()

  // Show the start button and hide the pause button
  startButton.classList.remove("hide")
  pauseButton.classList.add("hide")
}

// Add event listeners to the buttons
startButton.addEventListener("click", startTimer)
pauseButton.addEventListener("click", pauseTimer)
stopButton.addEventListener("click", stopTimer)

const pomodoroLabel = document.querySelector(".pomodoro-label")
const shortBreakLabel = document.querySelector(".shortBreak-label")
const longBreakLabel = document.querySelector(".longBreak-label")

shortBreakLabel.addEventListener("click", () => {
  pomodoroLabel.classList.remove("active")
  shortBreakLabel.classList.add("active")
  longBreakLabel.classList.remove("active")

  const minutes = 5
  const seconds = 0
  minutesElement.innerText = `${minutes}`.padStart(2, "0")
  secondsElement.innerText = `${seconds}`.padStart(2, "0")
})