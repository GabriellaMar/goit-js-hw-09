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
flatpickr(chooseInput, options);



startBtn.addEventListener('click', () => {
  const countdownDate = new Date(chooseInput.value).getTime();

  if (!countdownDate) {
    return
  }
  startBtn.disabled = false
  const countDate = setInterval(() => {
    const currentTime = new Date().getTime();
    const diference = countdownDate - currentTime;
    const { days, hours, minutes, seconds } = convertMs(diference)

    timerDays.textContent = days;
    timerHours.textContent = hours;
    timerMinutes.textContent = minutes;
    timerSeconds.textContent = seconds;

    console.log(`${days}: ${hours}: ${minutes}:${seconds}`)
  }, 1000);
})

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


