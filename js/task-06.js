'use strict';

let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = +input;
  const notNumber = Number.isNaN(input);
  if (notNumber) {
    console.log('Было введено не число');
    continue;
  }
  total += input;
}

alert(`Общая сумма ${total}`);
