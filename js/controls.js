export function Controls({
  startButton,
  pauseButton,
}) {
  
  function play() {
    pauseButton.classList.remove("hide")
    startButton.classList.add("hide")
  }

  function pause() {
    pauseButton.classList.add("hide")
    startButton.classList.remove("hide")
  }
  
  function reset() {
    pauseButton.classList.add("hide")
    startButton.classList.remove("hide")
  }

  return{
    reset,
    play,
    pause,
  }
}