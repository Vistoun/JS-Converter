let number = document.getElementById('number');
let result = document.getElementById('result');
let button = document.getElementById('button');


/* 1 USD = 23.61777 CZK, 
   1 EUR = 25.840273 CZK, 
   1 PLN = 5.89558584 CZK, 
*/

function Converter(vstup){
    
    usd = 23.61777;
    return (vstup / usd);
   
}

button.addEventListener('input', function(){
   
    result.innerText = Converter(number.value);
    

})