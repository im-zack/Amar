const collection1 = document.querySelector("#collection1");
const collection2 = document.querySelector("#collection2");
const calcCovariansBtn = document.querySelector("#cov-result");
const showCovarians = document.querySelector("#covarians");
const covResetBtn = document.querySelector("#cov-reset-btn")

covResetBtn.addEventListener("click", function () {
  collection1.value = ""
  collection2.value = ""
  showCovarians.innerHTML = ""
})

// تعریف دو مجموعه اولیه
let dataSet1 = [];
let dataSet2 = [];

// تابع برای محاسبه کوواریانس
function calculateCovariance() {
  // خواندن داده ها از کاربر
  let input1 = collection1.value.split(' ');
  let input2 = collection2.value.split(' ');

  // تبدیل رشته به اعداد
  dataSet1 = input1.map(Number);
  dataSet2 = input2.map(Number);

  // بررسی طول مجموعه ها
  if (dataSet1.length !== dataSet2.length) {
    showCovarians.innerHTML = "تعداد اعداد مجموعه باید برابر باشند";
  }

  // محاسبه میانگین مجموعه ها
  let sum1 = dataSet1.reduce((acc, val) => acc + val, 0);
  let mean1 = sum1 / dataSet1.length;

  let sum2 = dataSet2.reduce((acc, val) => acc + val, 0);
  let mean2 = sum2 / dataSet2.length;

  // محاسبه کوواریانس
  let covariance = 0;
  for (let i = 0; i < dataSet1.length; i++) {
    covariance += (dataSet1[i] - mean1) * (dataSet2[i] - mean2);
  }
  covariance /= (dataSet1.length - 1);

  showCovarians.innerHTML = `کوواریانس ${covariance} است`;
}

calcCovariansBtn.addEventListener("click", calculateCovariance);
