var display = document.getElementById("input");
var numbers = [];
var operators = [];
var liveNum = "";

function numOnly(num) {
  display.value += num;
  liveNum += num;
}

function opeOnly(op) {
  if (liveNum === "") return;

  numbers.push(Number(liveNum));
  operators.push(op);

  display.value += op;
  liveNum = "";
}

function calculate() {
  if (liveNum !== "") {
    numbers.push(Number(liveNum));
  }

  var result = numbers[0];

  for (var i = 0; i < operators.length; i++) {
    var nextNum = numbers[i + 1];

    if (operators[i] === "+") {
      result += nextNum;
    } else if (operators[i] === "-") {
      result -= nextNum;
    } else if (operators[i] === "x") {
      result *= nextNum;
    } else if (operators[i] === "/") {
      if (nextNum === 0) {
        display.value = "Error";
        return;
      }

      result /= nextNum;
    } else if (operators[i] === "%") {
      result %= nextNum;
    }
  }

  display.value = result;
  liveNum = result.toString();

  numbers = [];
  operators = [];
}

function clearInput() {
  display.value = "";
  numbers = [];
  operators = [];
  liveNum = "";
}

function dleteCha() {
  display.value = display.value.slice(0, -1);
  liveNum = liveNum.slice(0, -1);
}
