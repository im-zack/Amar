const numbersInput = document.querySelector("#numbers");
const showResultBtn = document.querySelector("#result-btn")
const showVarians = document.querySelector("#varians")
const showMean = document.querySelector("#mean")
const showEnherafMeyar = document.querySelector("#enheraf-meyar")
const varResetBtn = document.querySelector("#var-reset-btn")

varResetBtn.addEventListener("click", function () {
  numbersInput.value = ""
  showVarians.innerHTML = ""
  showMean.innerHTML = ""
  showEnherafMeyar.innerHTML = "" 
})

showResultBtn.addEventListener("click", function() {
  var input = numbersInput.value;
  calculatorVariance(input);
});

function calculatorVariance(numbers) {
  var inputNumbers = numbers.split(" ");
  var numberArray = [];
  for (var i = 0; i < inputNumbers.length; i++) {
    numberArray.push(Number(inputNumbers[i]));
  }

  var sum = 0;
  for (var i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  var mean = sum / numberArray.length;

  var sumOfSquares = 0;
  for (var i = 0; i < numberArray.length; i++) {
    sumOfSquares += Math.pow(numberArray[i] - mean, 2);
  }
  var variance = sumOfSquares / (numberArray.length - 1);

  showVarians.innerHTML = "واریانس: " + variance
  showMean.innerHTML = "میانگین: " + mean
  showEnherafMeyar.innerHTML = "انحراف معیار: " + Math.sqrt(variance)
}



