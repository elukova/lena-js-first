function renderBoard() {
    var board = document.createElement('table');

    //массивы с данными о наименовании колонок и фигурами
    var columnvarters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
    //черные и белые фигуры нижний ряд (ладья, конь и т.д.)
    var blackFigures1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;',
        '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'];
    var whiteFigures1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;',
        '&#9812;', '&#9821;', '&#9815;', '&#9814;', '1'];
    //черные и белые пешки
    var blackFigures2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;',
        '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'];
    var whiteFigures2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;',
        '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'];

    for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
        var newTr = board.insertRow(i);

        for (var c = 0; c < 10; c++) {
            var newTd = newTr.insertCell(c);

            switch (i) {
                case 0:
                    newTd.innerText = columnvarters[c];
                    break;
                case 1:
                    newTd.innerHTML = blackFigures1[c];
                    break;
                case 2:
                    newTd.innerHTML = blackFigures2[c];
                    break;
                case 7:
                    newTd.innerHTML = whiteFigures2[c];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigures1[c];
                    break;
                case 9:
                    newTd.innerText = columnvarters[c];
                    break;
                default:
                    if (c === 0 || c === 9) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.appendChild(board);
};
renderBoard();