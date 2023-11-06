const collection1 = document.querySelector("#collection1");
const collection2 = document.querySelector("#collection2");
const calcCovariansBtn = document.querySelector("#cov-result");
const showCovarians = document.querySelector("#covarians");
const covResetBtn = document.querySelector("#cov-reset-btn")

covResetBtn.addEventListener("click", function () {
  collection1.value = "";
  collection2.value = "";
  showCovarians.innerHTML = "";
});

let dataSet1 = [];
let dataSet2 = [];

function calculateCovariance() {
  const input1 = collection1.value.split(" ").map(Number);
  const input2 = collection2.value.split(" ").map(Number);

  if (input1.length !== input2.length) {
    showCovarians.innerHTML = "تعداد اعداد مجموعه باید برابر باشند";
    return; // Exit the function if lengths are not equal
  }

  const sum1 = input1.reduce((acc, val) => acc + val, 0);
  const mean1 = sum1 / input1.length;

  const sum2 = input2.reduce((acc, val) => acc + val, 0);
  const mean2 = sum2 / input2.length;

  let covariance = 0;
  for (let i = 0; i < input1.length; i++) {
    covariance += (input1[i] - mean1) * (input2[i] - mean2);
  }
  covariance /= input1.length - 1;

  showCovarians.innerHTML = `کوواریانس ${covariance} است`;
}

calcCovariansBtn.addEventListener("click", calculateCovariance);
