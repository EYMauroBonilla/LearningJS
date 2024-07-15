let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOuptut(
  operator,
  resultBeforeOperator,
  resultAfterOperator
) {
  const calcDescription = `${resultBeforeOperator} ${operator} ${resultAfterOperator}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operatorIdentifier,
  prevNumber,
  inputNumber,
  currentNumber
) {
  const logEntryObject = {
    operation: operatorIdentifier,
    lastValue: prevNumber,
    enteredNumber: inputNumber,
    currentValue: currentNumber,
  };
  logEntries.push(logEntryObject);
  console.log(logEntries);
}

function add() {
  const operator = "+";
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  writeToLog("ADD", initialResult, enteredNum, currentResult);
  createAndWriteOuptut(operator, initialResult, currentResult);
}

function subtract() {
  const operator = "-";
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  writeToLog("SUBTRACT", initialResult, enteredNum, currentResult);
  createAndWriteOuptut(operator, initialResult, currentResult);
}

function multiply() {
  const operator = "*";
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNum;
  writeToLog("MULTIPLY", initialResult, enteredNum, currentResult);
  createAndWriteOuptut(operator, initialResult, currentResult);
}

function divide() {
  const operator = "/";
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNum;
  writeToLog("DIVIDE", initialResult, enteredNum, currentResult);
  createAndWriteOuptut(operator, initialResult, currentResult);
}

function potencia() {
  const operator = "^";
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult ** enteredNum;
  writeToLog("POTENCIA", initialResult, enteredNum, currentResult);
  createAndWriteOuptut(operator, initialResult, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
powerBtn.addEventListener("click", potencia);
