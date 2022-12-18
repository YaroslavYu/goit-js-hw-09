import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const timerFields = document.querySelectorAll('.value');

const spanDaysLeft = document.querySelector('[data-days]');
const spanHoursLeft = document.querySelector('[data-hours]');
const spanMinutesLeft = document.querySelector('[data-minutes]');
const spanSecondsLeft = document.querySelector('[data-seconds]');
const buttonStart = document.querySelector('[data-start]');
const timerWrapper = document.querySelector('.timer');

let differenceMilliseconds = 0;
let intervalId;
buttonStart.disabled = true;
buttonStart.addEventListener('click', onClickButtonStartTimerBegin);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const chooseDate = selectedDates[0];

    checkDataIsValid(chooseDate);
  },
};

// const dateTimePiker = document.querySelector('#datetime-picker');

const dateTimePiker = flatpickr('#datetime-picker', options);

timerWrapper.style.display = 'flex';
timerWrapper.style.gap = '15px';

// timerFields.forEach(field => (field.style.fontSize = '32px'));

spanDaysLeft.style.fontSize = '32px';
spanHoursLeft.style.fontSize = '32px';
spanMinutesLeft.style.fontSize = '32px';
spanSecondsLeft.style.fontSize = '32px';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer() {
  const { days, hours, minutes, seconds } = convertMs(differenceMilliseconds);
  spanDaysLeft.textContent = addLeadingZero(days);
  spanHoursLeft.textContent = addLeadingZero(hours);
  spanMinutesLeft.textContent = addLeadingZero(minutes);
  spanSecondsLeft.textContent = addLeadingZero(seconds);
  if (differenceMilliseconds < 1000) {
    stopTimerIfNull();
  }
  differenceMilliseconds -= 1000;
}

function stopTimerIfNull() {
  clearInterval(intervalId);
}

function checkDataIsValid(chooseDate) {
  differenceMilliseconds = chooseDate - Date.now();
  if (differenceMilliseconds < 0) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  buttonStart.disabled = false;
  const { days, hours, minutes, seconds } = convertMs(differenceMilliseconds);
  spanDaysLeft.textContent = addLeadingZero(days);
  spanHoursLeft.textContent = addLeadingZero(hours);
  spanMinutesLeft.textContent = addLeadingZero(minutes);
  spanSecondsLeft.textContent = addLeadingZero(seconds);
  // timerFields.forEach(timerField =>
  //   updateTimerFields(timerField, { days, hours, minutes, seconds })
  // );
}

function onClickButtonStartTimerBegin() {
  intervalId = setInterval(updateTimer, 1000);
  buttonStart.disabled = true;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// function updateTimerFields(timerField, { days, hours, minutes, seconds }) {
//   if (timerField.dataset.hasOenProperty('seconds')) {
//     timerField.textContent = addLeadingZero(seconds);
//   } else if (timerField.dataset.hasOenProperty('minutes')) {
//     timerField.textContent = addLeadingZero(minutes);
//   } else if (timerField.dataset.hasOenProperty('hours')) {
//     timerField.textContent = addLeadingZero(hours);
//   } else if (timerField.dataset.hasOenProperty('days')) {
//     timerField.textContent = addLeadingZero(days);
//   }
//
// }
