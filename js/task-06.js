'use strict';

let input;
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  const notNumber = Number.isNaN(input);
  if (notNumber) {
    console.log('Было введено не число');
    continue;
  }
  total += input;
}

alert(`Общая сумма ${total}`);
