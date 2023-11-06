const actualY = document.querySelector("#actualY");
const hatY = document.querySelector("#predictedY");
const regResult = document.querySelector("#reg-result");
const regResetBtn = document.querySelector("#reg-reset-btn");
const regSSE = document.querySelector("#reg-sse");
const regSST = document.querySelector("#reg-sst");
const regSSR = document.querySelector("#reg-ssr");
const regR = document.querySelector("#reg-r");

regResult.addEventListener("click", calcRegression);
regResetBtn.addEventListener("click", resetFields);

function calcRegression() {
  const yValues = getInputValues(actualY);
  const predictedValues = getInputValues(hatY);

  const meanY = calculateMean(yValues);
  const sst = calculateSST(yValues, meanY);
  const sse = calculateSSE(predictedValues, meanY);
  const ssr = calculateSSR(sst, sse);
  const rSquare = calculateRSquare(sse, sst);

  displayResults(sst, sse, ssr, rSquare);
}

function resetFields() {
  clearInputFields(actualY, hatY);
  clearOutputFields(regSSE, regSST, regSSR, regR);
}

function getInputValues(inputField) {
  const inputValues = inputField.value.split(" ");
  return inputValues.map(Number);
}

function calculateMean(values) {
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return sum / values.length;
}

function calculateSST(values, mean) {
  return values.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0);
}

function calculateSSE(predictedValues, mean) {
  return predictedValues.reduce(
    (sum, prediction) => sum + Math.pow(prediction - mean, 2),
    0
  );
}

function calculateSSR(sst, sse) {
  return sst - sse;
}

function calculateRSquare(sse, sst) {
  return sse / sst;
}

function displayResults(sst, sse, ssr, rSquare) {
  regSST.innerHTML = `SST: ${sst}`;
  regSSE.innerHTML = `SSE: ${sse}`;
  regSSR.innerHTML = `SSR: ${ssr}`;
  regR.innerHTML = `R2: ${rSquare}`;
}

function clearInputFields(...fields) {
  fields.forEach((field) => (field.value = ""));
}

function clearOutputFields(...fields) {
  fields.forEach((field) => (field.innerHTML = ""));
}
