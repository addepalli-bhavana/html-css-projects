// Function to update circular progress bars
const updateCircularProgressBar = (
  progressBar,
  percentage,
  initialValue,
  endValue,
  color
) => {
  const progressBarElement = document.getElementById(progressBar);
  const percentageElement = document.getElementById(percentage);
  const timerRef = setInterval(() => {
    initialValue++;
    progressBarElement.style.background = `conic-gradient(${color} ${
      initialValue * 3.6
    }deg, #cfcdcd 0)`;
    percentageElement.innerText = `${initialValue}%`;
    if (initialValue === endValue) {
      clearInterval(timerRef);
    }
  }, 100);
}

// Update Circular Progress Bar 1
updateCircularProgressBar("progress-bar-1", "percentage-1", -1, 75, "#3498db");

// Update Circular Progress Bar 2
updateCircularProgressBar("progress-bar-2", "percentage-2", -1, 25, "#ff0000");

// Function to update rectangular progress bars
const updateRectangularProgressBar = (
  progressBar,
  percentage,
  initialValue,
  endValue,
  percentageColor
) => {
  const progressBarElement = document.getElementById(progressBar);
  const percentageElement = document.getElementById(percentage);
  const timerRef = setInterval(() => {
    initialValue++;
    percentageElement.innerText = `${initialValue}%`;
    progressBarElement.style.width = `${initialValue}%`;
    if (initialValue == endValue) {
      clearInterval(timerRef);
    }
    if (initialValue == 50) {
      percentageElement.style.color = percentageColor;
    }
  }, 100);
};

// Update Rectangular Progress Bar 3
updateRectangularProgressBar("progress-3", "percentage-3", 0, 25, "#fff");

// Update Rectangular Progress Bar 4
updateRectangularProgressBar("progress-4", "percentage-4", 0, 85, "#fff");

// Update Rectangular Progress Bar 5
updateRectangularProgressBar("progress-5", "percentage-5", 0, 60, "#fff");
