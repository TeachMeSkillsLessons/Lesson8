// Написать функцию, которая возвращает новый массив только положительных чисел, умноженный вдвое

const array: number[] = [1, -5, 7, 8, -9, 0, -4];
function getPositiveNumbers(array: number[]) {
  return array.filter((value) => value >= 0).map((value) => value * 2);
}
console.log(getPositiveNumbers(array));
