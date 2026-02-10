function writeOnly(cha) {
  document.getElementById("input").value += cha;
}

function calculate() {
  var word = document.getElementById("input").value;
  var ope = [];
  var num = [];
  var num1 = "";
  for (var i = 0; i < word.length; i++) {
    var symbol = word[i];
    if (
      symbol === "x" ||
      symbol === "+" ||
      symbol === "-" ||
      symbol === "/" ||
      symbol === "%"
    ) {
      num.push(num1);
      ope.push(symbol);
      num1 = "";
    } else {
      num1 += symbol;
    }
  }
  num.push(num1);
  document.getElementById("input").value = "";
  var result = Number(num[0]);

  for (var i = 0; i < ope.length; i++) {
    var num2 = Number(num[i + 1]);
    //
    if (ope[i] === "+") {
      result += num2;
    } else if (ope[i] === "-") {
      result -= num2;
    } else if (ope[i] === "/") {
      result /= num2;
    } else if (ope[i] === "%") {
      result %= num2;
    } else if (ope[i] === "x") {
      result *= num2;
    } else {
      result = "enetre correct number";
    }
    document.getElementById("input").value = result;
  }
}
function clearInput() {
  document.getElementById("input").value = "";
}
function dleteCha() {
  var dWord = document.getElementById("input").value;
  var dletWord = dWord.length;
  var finalWord = dWord.slice(0, dletWord - 1);
  document.getElementById("input").value = finalWord;
}
