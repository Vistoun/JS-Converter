let number = document.getElementById('number');
let result = document.getElementById('result');
let currency = document.getElementById('converter');



/* 1 USD = 23.61777 CZK, 
   1 EUR = 25.840273 CZK, 
   1 PLN = 5.89558584 CZK, 
*/


function Converter(currency, input) {

    if (isNaN(input)) {
        number.value = null;
        alert('Nazadal jsi cislo');
    }

    switch (currency) {

        case 'USD':

            usd = 23.61777;
            return (input / usd).toFixed(2) + ' $';
        case 'EUR':

            eur = 25.840273;
            return (input / eur).toFixed(2) + ' €';

        case 'PLN':

            pln = 5.89558584;
            return (input / pln).toFixed(2) + ' zł';
    }
}


number.addEventListener('input', function () {

    result.value = Converter(currency.value, number.value);

})
currency.addEventListener('change', function () {
    result.value = Converter(currency.value, number.value);
    


})

