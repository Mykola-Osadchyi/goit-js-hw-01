'use strict';
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;
const country = prompt('Укажите страну доставки:');
if (country === null) {
  console.log('Отменено пользователем!');
}
else {

  switch (country.toLowerCase()) {
    case 'китай': {
      console.log(`Доставка в ${country} будет стоить ${priceChina} кредитов`);
      break;
    }
    case 'чили': {
      console.log(`Доставка в ${country} будет стоить ${priceChile} кредитов`);
      break;
    }
    case 'австралия': {
      console.log(`Доставка в ${country} будет стоить ${priceAustralia} кредитов`);
      break;
    }
    case 'индия': {
      console.log(`Доставка в ${country} будет стоить ${priceIndia} кредитов`);
      break;
    }
    case 'ямайка': {
      console.log(`Доставка в ${country} будет стоить ${priceJamaica} кредитов`);
      break;
    }
    default: {
      alert('В вашей стране доставка не доступна');
    }
  }
}