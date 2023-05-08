// get DOM elements
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// add event listener to button
calculateBtn.addEventListener('click', () => {
  // get weight and height inputs and convert to numbers
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);
  
  // calculate BMI
  const bmi = weight / (height ** 2);
  
  // display result on web page
  resultDiv.textContent = `Your BMI is ${bmi.toFixed(1)}`;
});
