document.write('Вопрос 6.' + '<br><br>' + 'Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции <br><br>');

var x = +prompt('Введите первое число:'), y = +prompt('Введите второе число:'), op = prompt('Введите название операции (сложение, вычитание, умножение, деление): ');

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return addition(arg1, arg2);
            break;
        case 'вычитание':
            return subtraction(arg1, arg2);
            break;
        case 'умножение':
            return multiplication(arg1, arg2);
            break;
        case 'деление':
            return division(arg1, arg2);
            break;
        default:
            return NaN;
            break;
    }
}

document.write('Выполнено ' + op + ' чисел, результат: ' + mathOperation(x, y, op) + '<br><br><hr><br>');

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b != 0) return a / b;
    else alert('На 0 делить нельзя!');
}