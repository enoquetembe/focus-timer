import { Controls } from "./controls.js"
import { Timer } from "./timer.js"

const pomodoroLabel = document.querySelector(".pomodoro-label")
const shortBreakLabel = document.querySelector(".shortBreak-label")
const longBreakLabel = document.querySelector(".longBreak-label")

const startButton = document.querySelector("#button-start")
const pauseButton = document.querySelector("#button-pause")
const stopButton = document.querySelector("#button-stop")

const minutesElement = document.querySelector("#minutes")
const secondsElement = document.querySelector("#seconds")

let minutes = Number(minutesElement.textContent)
let seconds = Number(secondsElement.textContent)
let timerCount


const timer = Timer({
  minutesElement,
  secondsElement,
  timerCount,
  resetControls: controls.reset
})

const controls = Controls()


shortBreakLabel.addEventListener("click", () => {
  pomodoroLabel.classList.remove("active")
  shortBreakLabel.classList.add("active")
  longBreakLabel.classList.remove("active")

  const minutes = 5
  const seconds = 0

  updateTimerDisplay(minutes, seconds)

  console.log(minutesElement, secondsElement)

})

longBreakLabel.addEventListener("click", () => {
  pomodoroLabel.classList.remove("active")
  shortBreakLabel.classList.remove("active")
  longBreakLabel.classList.add("active")

  const minutes = 10
  const seconds = 0
  updateTimerDisplay(minutes, seconds)

})

pomodoroLabel.addEventListener("click", () => {
  pomodoroLabel.classList.add("active")
  shortBreakLabel.classList.remove("active")
  longBreakLabel.classList.remove("active")

  const minutes = 25
  const seconds = 0
  updateTimerDisplay(minutes, seconds)
})


startButton.addEventListener("click", () => {
  controls.play()
  timer.countdown()
})


pauseButton.addEventListener("click", () => {
  controls.pause()
  clearTimeout(timerCount)
})

stopButton.addEventListener("click", () => {
  controls.reset()
  timer.reset()
})


