/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая складывает все четные числа и возвращает результат

const array: number[] = [4, 33, 45, 20, 57, 0, 2];
function sum(numbers: number[]): number {
  return array.reduce((acc, curr) => {
    if (curr % 2 == 0) acc += curr;
    return acc;
  }, 0);
}
console.log(array);
