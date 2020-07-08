'use strict';

const credits = 23580;
const pricePerDroid = 300;
const droidAmount = prompt('Сколько ремонтных дроидов хотите купить?');

if (droidAmount === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = droidAmount * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  }  else {
    console.log(`Вы купили ${droidAmount} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  }
}