// Exercícios - Curso Fundamentos de Programação

// 1° Exercício
function greet(name) {
    return `Olá ${name}!`;
}
// console.log(greet("Fabricio"));

// 2° Exercício
function convertAgeInYearsToDays(age) {
    console.log(age * 365);
}
// convertAgeInYearsToDays(70);


// 3° Exercício
function calculateSalary(workedHours, receivePerHour) {
    console.log(`Salário  igual a R$ ${receivePerHour * workedHours}`);
}
// calculateSalary(150, 40.5);


// 4° Exercício
function monthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log('Janeiro');
            break;
        case 2:
            console.log('Fevereiro');
            break;
        case 3:
            console.log('Março');
            break;
        case 4:
            console.log('Abril');
            break;
        case 5:
            console.log('Maio');
            break;
        case 6:
            console.log('Junho');
            break;
        case 7:
            console.log('Julho');
            break;
        case 8:
            console.log('Agosto');
            break;
        case 9:
            console.log('Setembro');
            break;
        case 10:
            console.log('Outubro');
            break;
        case 11:
            console.log('Novembro');
            break;
        case 12:
            console.log('Dezembro');
            break;
        default:
            console.log('Número do mês inválido!');
    }
}
// monthName(8);


// 5° Exercício
function biggerOrEqual(number1, number2) {
    if(number1 > number2 || number1 === number2) {
        console.log(true);
    } else {
        console.log(false);
    }
}
// biggerOrEqual(0, '0');


// 6° Exercício
function inverse(booleanOrNumber) {
    let inverseNumber;
    if(booleanOrNumber == true) {
        console.log(false);
    } else if(booleanOrNumber == false) {
        console.log(true);
    }else if(typeof booleanOrNumber == 'number') {
        console.log(inverseNumber = booleanOrNumber * -1);
    } else {
        console.log('Booleano ou número esperados, mas o parâmetro é do tipo string.');
    }
}
// inverse(2000);


// 7° Exercício 
function itsBetween(number, min, max) {
    if(number >= min && number <= max) {
        return true;
    } else {
        return false;
    }
}
// console.log(itsBetween(8, 1, 80));


// 8° Exercício
function multiply(number1, number2) {
    let result = number1;
    if(number1 >= 0 && number2 >= 0) {
        for(let i = 1; i < number2; i++) {
            result += number1;
        }
        console.log(result);
    } else {
        console.log('Valor digitado, negativo ou inválido!')
    }   
}
// multiply(5, 5);


// 9° Exercício
const repeat = function(value, numberOfRepetitions) {
    let repeatedValue = [];
    for(let i = 1; i <= numberOfRepetitions; i++) {
        repeatedValue.push(value);
    }
    return repeatedValue;
}
// console.log(repeat('código', 2));


// 10° Exercício
const symbolMost = function(number) {
    let str = '';
    for(let i = 0; i < number; i++) {
        str += '+'
    }
    return str;
}
// console.log(symbolMost(4));


// 11° Exercício
let elements = [-100, 'aplicativo', 16, 'olá'];
const firstAndLastElement = function(array) {
    let firstAndLast = [array[0], array[array.length -1]];
    return firstAndLast;
}
// console.log(firstAndLastElement(elements));


// 12° Exercício
const removeProperty = (value, property) => {
    const newObject = {...value};
    delete newObject[property];
    return newObject;
}
// console.log(removeProperty({id: 20, nome: 'caneta', descricao: 'Não preenchido'}, 'descricao'));


// 13° Exercício
const filterNumbers = array => {
    let numbers = [];
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            numbers.push(array[i]);
        }
    }
    return numbers;
}
// console.log(filterNumbers(['Javascript', 1, '3', 'Web', 20]));


// 14° Exercício
const objectToArray = object => {
    let result = [];
    for(const key in object) {
        result.push([key, object[key]]);
    }
    console.log(result);
}
// objectToArray({codigo: 111111, preco: 12000});


// 15° Exercício
const pairsOfEvenIndices = array => {
    let pairs = [];
    for(const i in array) {
        if(array[i] % 2 == 0 && i % 2 == 0) {
            pairs.push(array[i]);
        }
    }
    return pairs;
} 
// console.log(pairsOfEvenIndices([10, 70, 22, 43]));


// 16° Exercício
const checarAnoBissexto = year => {
    if(year % 4 === 0) {
        return true;
    } else {
        return 'false, pois é múltiplo de 100 e não é múltiplo de 400';
    }
}
// console.log(checarAnoBissexto(2004));
// PENDENTE


// 17° Exercício
const addNumbers = array => {
    // let total = 0;
    // for(let i = 0; i < array.length; i++) {
    //     total+= array[i];
    // }
    // return total;

    const initialValue = 0;
    const totalSum = array.reduce((acc, cur) => 
        acc + cur, initialValue
    )    
    return totalSum;
}
// console.log(addNumbers([10, 10, 10]));


// 18° Exercício
const despesasTotais = (despesas) => {
    let total = 0;
    let objeto = {...despesas};
    let { preco } = objeto
    return preco

    // return total;
}
// console.log(despesasTotais([
//     {
//         nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99
//     },
//     {
//         nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90
//     }
// ]));
// PENDENTE


// 19° Exercício
const calculateAverage = array => {
    let average = 0;
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total+= array[i];
    }
    average = total / array.length;
    return average;
}
// console.log(calculateAverage([1, 2, 3, 4, 5]));


// 20° Exercício
const triangleArea = (base, height) => {
    let result = (base * height) / 2;
    return result.toFixed(2)
} 
// console.log(triangleArea(9.25, 13.1));


// 21° Exercício
const smallestNumber = array => {
    let smaller = Math.min(...array)
    return smaller;
}
// console.log(smallestNumber([5, -15, 50, 3]));


// 22° Exercício
const functionOfLuck = numberOneToTen => {
    let numberRandom = Math.floor(Math.random() * 10) + 1;
    if(numberOneToTen === numberRandom) {
        return `Parabéns! O número sorteado foi o ${numberRandom}`;
    } else {
        return `Que pena! O número sorteado foi o ${numberRandom}`
    }
}
// console.log(functionOfLuck(10));


// 23° Exercício
const countWords = words => {
    let arrayWords = words.split(" ")
    return arrayWords.length;
}
// console.log(countWords('Me divirto aprendendo a programar'));


// 24° Exercício
const countCharacter = (character, string) => {
    let result = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] === character) {
            result.push(string[i])
        }
    }
    return result.length;
}
// console.log(countCharacter("o", 'Hoje foi um bom dia'));


// 25° Exercício
const searchForSimilarWords = (word, array) => {
    let foundWords = array.filter((words) => {
        if(words.indexOf(word) !== -1) {
            return words
        }
    });
    return foundWords;
} 
// console.log(searchForSimilarWords('va', ["javascript", "java", "c++"]));


// 25° Exercício
const removeVowels = string => {
    return string.replace(/[aeiouà-ú]/gi,'');
}
// console.log(removeVowels('Fundamentos'));