let num1;
let num2;
let operator;
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
   return a / b;
}
function calculate() {
 
   num1 = parseInt(document.getElementById("num1").value);
   num2 = parseInt(document.getElementById("num2").value);
   operator = document.getElementById("operator").value;
  var result;


  if (operator === "+") {
    result= add(num1,num2);
  } else if (operator === "-") {
      result= sub(num1,num2);
  } else if (operator === "*") {
    result= mul(num1,num2);
  } else if (operator === "/") {
      result= div(num1,num2);
  }

 
  document.getElementById("scr").value = result;
}
function clr()
{
  document.getElementById("scr").value="";
}


