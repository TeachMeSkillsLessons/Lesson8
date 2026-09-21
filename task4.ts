// Написать функцию, которая поменяет переменные местами, не создавая дополнительную переменную

let num1 = 5;
let num2 = 7;

function swapVariablesMath(): void {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
}

swapVariablesMath();
console.log("num1 =", num1);
console.log("num2 =", num2);
