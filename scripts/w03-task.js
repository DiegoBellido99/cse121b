/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add ( number1, number2){
    return number1 + number2;
}

function addNumbers(){
    const number1 = Number(document.querySelector('#add1').value);
    const number2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value= add(number1,number2);
}

document.querySelector('#addNumbers').addEventListener("click",addNumbers);


/* Function Expression - Subtract Numbers */

function subtract(number1, number2){
    return number1-number2;
}
function subtractNumbers(){
    const subtract1 = Number(document.querySelector('#subtract1').value);
    const subtract2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtract1,subtract2);

}
document.querySelector('#subtractNumbers').addEventListener("click",subtractNumbers)


/* Arrow Function - Multiply Numbers */

const multiply = (number1,number2)=>number1*number2;

const multiplyNumbers = ()=>{
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1,factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);


/* Open Function Use - Divide Numbers */

const divide = (number1, number2)=>number1/number2;

function divideNumbers(){
    const factor1 = Number(document.querySelector('#dividend').value);
    const factor2 = Number(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(factor1,factor2); 
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);


/* Decision Structure */



function descount(){
    const input = Number(document.querySelector('#subtotal').value);

    const checkbox = document.querySelector('#member');
    if (checkbox.checked){
        const total = input - (input * 0.2);
        document.querySelector("#total").textContent = `$${total}.00`;
    }
    else{
        document.querySelector('#total').textContent = `$${input}.00`;
    }
}
document.getElementById('getTotal').addEventListener("click",descount);

/* ARRAY METHODS - Functional Programming */
const listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').innerHTML= listOfNumbers;

/* Output Odds Only Array */

const odds = listOfNumbers.filter(number=> number % 2 !==0);

document.getElementById('odds').innerHTML = odds;

/* Output Evens Only Array */
const evens = listOfNumbers.filter(number=> number % 2 ===0);

document.getElementById('evens').innerHTML = evens;

/* Output Sum of Org. Array */

const sum = listOfNumbers.reduce((acc,ele)=>acc+ele,0)

document.getElementById('sumOfArray').innerHTML = sum ;

/* Output Multiplied by 2 Array */

document.getElementById('multiplied').innerHTML = listOfNumbers.map(number=>number*2);

/* Output Sum of Multiplied by 2 Array */

const multiplied = listOfNumbers.map(number=>number*2);

document.getElementById('sumOfMultiplied').innerHTML = multiplied.reduce((acc,ele)=>acc+ele,0);

