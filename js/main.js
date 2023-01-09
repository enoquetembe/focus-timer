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
let timer



function countdown() {
  
    timer = setTimeout(() => {
    let seconds = Number(secondsElement.textContent)
    let minutes = Number(minutesElement.textContent)
    
    updateTimerDisplay(minutes, 0)
    
    if (minutes <= 0) {
      resetControls()
      return
    }
    
    if (seconds <= 0) {
      seconds = 3
      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))
   
    countdown()
  }, 1000)
  
}

function updateTimerDisplay(minutes, seconds) {
  minutesElement.textContent = String(minutes).padStart(2, "0")
  secondsElement.textContent = String(seconds).padStart(2, "0")
}

function resetControls() {
  pauseButton.classList.add("hide")
  startButton.classList.remove("hide")
}

function resetTimer() {
  
  const pomodoroLabelClassListContainsActive = pomodoroLabel.classList.contains("active")
  const shortBreakLabelClassListContainsActive = shortBreakLabel.classList.contains("active")
  const longBreakLabelClassListContainsActive = longBreakLabel.classList.contains("active")

  if(pomodoroLabelClassListContainsActive) {
    updateTimerDisplay(2, 0)
  } else if(shortBreakLabelClassListContainsActive) {
    updateTimerDisplay(5, 0)
  } else if(longBreakLabelClassListContainsActive) {
    updateTimerDisplay(10, 0)
  }

  clearTimeout(timer)
}

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

  console.log(minutesElement, secondsElement)

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
  pauseButton.classList.remove("hide")
  startButton.classList.add("hide")

  countdown()
})


pauseButton.addEventListener("click", () => {
  pauseButton.classList.add("hide")
  startButton.classList.remove("hide")
  clearTimeout(timer)
})

stopButton.addEventListener("click", () => {
  resetControls()
  resetTimer()

})


