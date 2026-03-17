//Sets initial colour to red
const bulbs = ['red', 'amber', 'green'];
let current = 0;

//Lights up the correct bulb
function setLight(index) {
  bulbs.forEach(id => {
    document.getElementById(id).classList.remove('active');
  });

  document.getElementById(bulbs[index]).classList.add('active');
}

//Puts red colour when the page loads
setLight(0);

//Allows "Next light" button to actually work
function nextLight() {
  current = (current + 1) % bulbs.length;
  setLight(current);
}

//Auto mode variables
const durations = [4000, 1500, 4000]; // Red, Amber, Green durations in milliseconds
let autoMode = false;
let timer = null;

//Toggles auto mode on and off
function autoStep() {
  nextLight(); // Change to the next light immediately when auto mode is toggled on
  timer = setTimeout(autoStep, durations[current]);
}

function toggleAuto() {
  autoMode = !autoMode;
  const btn = document.getElementById('auto-button');

  if (autoMode) {
    btn.classList.add('active-btn');
    timer = setTimeout(autoStep, durations[current]);
  } else {
    btn.classList.remove('active-btn');
    clearTimeout(timer);
  }
}
