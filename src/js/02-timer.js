import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.failure('Qui timide rogat docet negare');
Notify.success('Sol lucet omnibus');
Notify.info('Cogito ergo sum');

console.log('hhhh');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// const dateTimePiker = document.querySelector('#datetime-picker');

const rer = flatpickr('#datetime-picker', options);
