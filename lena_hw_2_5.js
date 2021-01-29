/* Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */

document.write('Вопрос 5.' + '<br><br>' + 'Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return<br><br>');

var x = +prompt('Введите первое число:'), y = +prompt('Введите второе число:');

function addition(a, b) {
    return a + b;
}
document.write('Результат сложения чисел: ' + addition(x, y) + '<br><br>');

function subtraction(a, b) {
    return a - b;
}
document.write('Результат вычитания чисел: ' + subtraction(x, y) + '<br><br>');

function multiplication(a, b) {
    return a * b;
}
document.write('Результат умножения чисел: ' + multiplication(x, y) + '<br><br>');

function division(a, b) {
    if (b == 0) alert('На 0 делить нельзя!');
    else return a / b;;
}
document.write('Результат деления чисел: ' + division(x, y).toFixed(2) + '<br><br><hr><br>');

