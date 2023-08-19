const triangleBaseInput = document.getElementById("triangleBase");
const triangleHeightInput = document.getElementById("triangleHeight");
const triangleAreaOutput = document.getElementById("triangleArea");

const rectangleWidthInput = document.getElementById("rectangleWidth");
const rectangleLengthInput = document.getElementById("rectangleLength");
const rectangleAreaOutput = document.getElementById("rectangleArea");

const parallelogramBaseInput = document.getElementById("parallelogramBase");
const parallelogramHeightInput = document.getElementById("parallelogramHeight");
const parallelogramAreaOutput = document.getElementById("parallelogramArea");

const bmiWeightInput = document.getElementById("bmiWeight");
const bmiHeightInput = document.getElementById("bmiHeight");
const bmiResultOutput = document.getElementById("bmiResult");

function calculateArea(base, height, outputElement) {
  let area = (base * height).toFixed(2);
  if (isNaN(area)) {
    alert("Not a valid number");
    return;
  }
  outputElement.innerText = area;
}

document.getElementById("btn-triangle").addEventListener("click", function () {
  let baseValue = parseFloat(triangleBaseInput.value);
  let heightValue = parseFloat(triangleHeightInput.value);
  calculateArea(baseValue, heightValue, triangleAreaOutput);
  triangleBaseInput.value = "";
  triangleHeightInput.value = "";
});

document.getElementById("btn-rectangle").addEventListener("click", function () {
  let widthValue = parseFloat(rectangleWidthInput.value);
  let lengthValue = parseFloat(rectangleLengthInput.value);
  calculateArea(widthValue, lengthValue, rectangleAreaOutput);
  rectangleWidthInput.value = "";
  rectangleLengthInput.value = "";
});

document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    let baseValue = parseFloat(parallelogramBaseInput.value);
    let heightValue = parseFloat(parallelogramHeightInput.value);
    calculateArea(baseValue, heightValue, parallelogramAreaOutput);
    parallelogramBaseInput.value = "";
    parallelogramHeightInput.value = "";
  });

document.getElementById("btn-bmi").addEventListener("click", function () {
  let weightValue = parseFloat(bmiWeightInput.value);
  let heightValue = parseFloat(bmiHeightInput.value) / 100; // Convert cm to meters
  let bmi = (weightValue / (heightValue * heightValue)).toFixed(2);
  if (isNaN(bmi)) {
    alert("Not a valid number");
    return;
  }
  bmiResultOutput.innerText = bmi;
  bmiWeightInput.value = "";
  bmiHeightInput.value = "";
});
