'use strict';

let input;
let total = 0;

do {
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
while (input !== null);

alert(`Общая сумма ${total}`);