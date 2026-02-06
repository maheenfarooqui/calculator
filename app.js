function writeOnly(num) {
  document.getElementById("input").value += num;
}

function calculate() {
  var word = document.getElementById("input").value;
  console.log(word);
  var ope;
  var num1 = "";
  for (var i = 0; i < word.length; i++) {
    if (
      word[i] === "x" ||
      word[i] === "+" ||
      word[i] === "-" ||
      word[i] === "/" ||
      word[i] === "%"
    ) {
      ope = word[i];
    }
  }
  var indx = word.indexOf(ope);
  var num3 = word.slice(0, indx);
  var num4 = word.slice(indx + 1);
  var num1 = Number(num3);
  var num2 = Number(num4);
  document.getElementById("input").value = "";
  if (ope === "+") {
    document.getElementById("input").value = num1 + num2;
  } else if (ope === "-") {
    document.getElementById("input").value = num1 - num2;
  } else if (ope === "/") {
    document.getElementById("input").value = num1 / num2;
  } else if (ope === "%") {
    document.getElementById("input").value = num1 % num2;
  } else if (ope === "x") {
    document.getElementById("input").value = num1 * num2;
  } else {
    document.getElementById("input").value = "enetre correct number";
  }
}
function clearInput() {
  document.getElementById("input").value = "";
}
