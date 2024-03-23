const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360;
  const hourDegrees = (hours / 12) * 360;

  rotateHand(hourHand, hourDegrees);
  rotateHand(minuteHand, minuteDegrees);
  rotateHand(secondHand, secondDegrees);
}

function rotateHand(hand, degrees) {
  hand.style.transitionDuration = "0.5s";
  hand.style.transform = `rotate(${degrees}deg)`;
}

setDate();
setInterval(setDate, 1000);
