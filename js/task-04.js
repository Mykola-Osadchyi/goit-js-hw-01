'use strict';

const credits = 23580;
const pricePerDroid = 300;
let droidAmount = prompt('Сколько ремонтных дроидов хотите купить?');
let totalPrice;
let balance;

if (droidAmount === null) {
  console.log('Отменено пользователем!');
} else if (droidAmount === '') {
  console.log('Поле ввода не должно быть пустым!');
} else {
  droidAmount = Number(droidAmount);
  const notNumber = Number.isNaN(droidAmount);
  totalPrice = droidAmount * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else if (notNumber || droidAmount === 0) {
    console.log('Вводить можно только цифры: 1-9');
  } else {
    balance = credits - totalPrice;
    console.log(`Вы купили ${droidAmount} дроидов, на счету осталось ${balance} кредитов.`);
  }
}