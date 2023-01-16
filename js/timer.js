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

function resetTimer() {
  const pomodoroLabelClassListContainsActive =
    pomodoroLabel.classList.contains("active")
  const shortBreakLabelClassListContainsActive =
    shortBreakLabel.classList.contains("active")
  const longBreakLabelClassListContainsActive =
    longBreakLabel.classList.contains("active")

  if (pomodoroLabelClassListContainsActive) {
    updateTimerDisplay(2, 0)
  } else if (shortBreakLabelClassListContainsActive) {
    updateTimerDisplay(5, 0)
  } else if (longBreakLabelClassListContainsActive) {
    updateTimerDisplay(10, 0)
  }

  clearTimeout(timer)
}
