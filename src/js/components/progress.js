const circle = document.querySelectorAll('.facts-element__circle');
circle.forEach(el => {
  const percentageProgress = Math.floor(el.dataset.percent);
  progressAnimation(el, percentageProgress);
})

function progressAnimation(element, progress) {
  const elementCircle = element.querySelector('.progress');
  const radius = elementCircle.getAttribute('r');
  const circleLength = 2 * Math.PI * radius;

  elementCircle.setAttribute('stroke-dasharray', circleLength);
  elementCircle.setAttribute('stroke-dashoffset', circleLength - circleLength * progress / 100);
}
