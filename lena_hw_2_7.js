// * Сравнить null и 0. Объяснить результат.
document.write('Вопрос 7.' + '<br>' + 'Сравнить null и 0. Объяснить результат.<br>');
document.write('0 - это бесконечно малое число, тип данных - число, а null - отдельный объект, тип данных object специальное значение для понятия "ничто" <br>')
document.write('Тип данных null: ' + typeof (null) + ', а тип данных 0: ' + typeof (0) + '<br>');
document.write('Результат деления на null: ' + 1 / null + ' , а результат деления на 0: ' + 1 / 0 + '<br>');
document.write('Сравним их значения:' + '<br>')
var varNull = null, varZero = 0;
if (varNull > varZero) {
    document.write('null > zero <br>');
}
else document.write('null > zero: False<br>');
if (varNull > varZero) {
    document.write('null < zero <br>');
}
else document.write('null < zero: False<br>');
if (varNull == varZero) {
    document.write('null == zero <br>');
}
else document.write('null == zero: False<br>');
if (varNull != varZero) {
    document.write('null != zero <br>');
}
else document.write('null != zero: False<br>');
if (varNull <= varZero) {
    document.write('null <= zero <br>');
}
else document.write('null <= zero: False<br>');