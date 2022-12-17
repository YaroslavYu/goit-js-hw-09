const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
// let inProcessedChange = false;
let idInterval = null;

stopButton.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
}

function onClickStartChangeBodyColorInInterval() {
  //   if (inProcessedChange) {
  //     return;
  //   }
  idInterval = setInterval(changeBodyColor, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;

  //   inProcessedChange = true;
}
function onClickStopChangeBodyColorInInterval() {
  clearInterval(idInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
  //   inProcessedChange = false;
}

startButton.addEventListener('click', onClickStartChangeBodyColorInInterval);
stopButton.addEventListener('click', onClickStopChangeBodyColorInInterval);
