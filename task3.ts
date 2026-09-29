// Напишите функцию, которая проверяет не содержит ли слово повторяющихся букв
// 3 варианта решения

const str1 = "Android";
const str2 = "Iphone";
//2. function checkRepeatLetters(str: string) {
//2. return (
//2. str
//2. .toLowerCase()
//2. .split("")
// 1.some((e, i, array) => {
//return array.filter((value) => value === e).length > 1;
//2. .some((e, i, array) => {
//2. return array.includes(e, i + 1);
//2. })
//2. );
//2. }
//2. console.log(checkRepeatLetters(str1));
//2. console.log(checkRepeatLetters(str2));

function checkRepeatLetters(str: string) {
  return new Set(str.toLowerCase()).size === str.length;
}
console.log(checkRepeatLetters(str1));
console.log(checkRepeatLetters(str2));
