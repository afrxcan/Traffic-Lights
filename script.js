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