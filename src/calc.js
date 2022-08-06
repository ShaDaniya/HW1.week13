function calcSum()
{
    let addendOne = prompt('Котик, введи первое слагаемое');
    let addendTwo = prompt('Котик, введи второе слагаемое');
    let sum = (+addendOne + +addendTwo);
    alert(`Сумма равна ${sum}!`);
}

function calcSubtraction() 
{
    let numOne = prompt('Котик, введи первое число');
    let numTwo = prompt('Котик, введи, что мы хотим вычесть из первого числа');
    let result = (+numOne - +numTwo);
    alert(`Котик, у тебя получился вот такой результат ${result}!`);
}

function calcMultiplication() 
{
    let factorOne = prompt('Котик, что первое ты хочешь умножить?');
    let factorTwo = prompt('А второе?');
    let multiplicationResult = (+factorOne * +factorTwo);
    alert(`Вот что ты наумножал, Котик, ${multiplicationResult}!`);
}

function calcDivision() 
{
    let dividend = prompt('Котик, сколько сосисок ты хочешь поделить?');
    let divider = prompt('А теперь скажи, на сколько кошечек?');
    let divisionResult = (+dividend / +divider);
    alert(`Каждой кошечке достанется ${divisionResult} штучек!`);
}


