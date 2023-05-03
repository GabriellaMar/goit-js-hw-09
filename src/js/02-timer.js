import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const chooseInput = document.querySelector('#datetime-picker')
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]')

startBtn.disabled = true

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const pickedDate = selectedDates[0];
    if (pickedDate && pickedDate > new Date()) {
      startBtn.removeAttribute('disabled');
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

const timer = {
  intervalId: null,
  countdownDate: null,

  start() {
    this.countdownDate = new Date(chooseInput.value).getTime();
    if (!this.countdownDate) {
      return
    }
    startBtn.disabled = false
    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const diference = !this.countdownDate - currentTime;

      const time = convertMs(diference);
      console.log(time)

      updateClocktime(time);

      // console.log(`${time.days}:${time.hours}:${time.minutes}:${time.seconds}`);
    }, 1000);

  },

}

function convertMs(diference) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(diference / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((diference % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((diference % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((diference % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr(chooseInput, options);

function updateClocktime({ days, hours, minutes, seconds }) {
  timerDays.textContent = days;
  timerHours.textContent = hours;
  timerMinutes.textContent = minutes;
  timerSeconds.textContent = seconds;
}

startBtn.addEventListener('click', () => {
  timer.start();
  startBtn.remove
  startBtn.disabled = true
})
