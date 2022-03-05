// Exercícios - Curso Fundamentos de Programação

// 1° Exercício
function greet(name) {
    console.log(`Olá ${name}!`);
}

// greet("Fabricio");

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

inverse('false');