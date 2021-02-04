//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var step1 = { que: works.a00, ansv: 1 }, step2 = { que: 2, ansv: 2 }, step3 = { que: 3, ansv: 3 }, answers = [step1, step2, step3];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
}
while (!ok);
switch (event) { //step1
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        step1.ansv = works.a1;
        step2.que = works.b00;
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {  //step2
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                step2.ansv = works.b1;
                step3.que = works.d00;
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok && event == 1) { step3.ansv = works.d1; }
                        else if (ok && event == 2) { step3.ansv = works.d2; } //step3
                    }
                } while (!ok);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                step2.ansv = works.b2;
                step3.que = works.d00;
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok && event == 1) { step3.ansv = works.d1; }
                        else if (ok && event == 2) { step3.ansv = works.d2; } //step3
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        step1.ansv = works.a2;
        step2.que = works.c00;
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                step2.ansv = works.c1;
                step3.que = works.d00;
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok && event == 1) { step3.ansv = works.d1; }
                        else if (ok && event == 2) { step3.ansv = works.d2; } //step3
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                step2.ansv = works.c2;
                step3.que = works.d00;
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok && event == 1) { step3.ansv = works.d1; }
                        else if (ok && event == 2) { step3.ansv = works.d2; } //step3
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

var finalAnsver;
do {  //Выводим финальный вопрос
    ok = false;
    finalAnsver = +prompt('Какой вопрос вы хотите посмотреть?\nВведите номер от 1 до 3\n-1 - Выход из игры');
    if (finalAnsver == -1) {
        break;
    }
    else {
        ok = isAnswer(3, finalAnsver);
    }
} while (!ok);

var answers = [step1, step2, step3];
console.log(answers[1].que);

switch (finalAnsver) {
    case 1:
        alert('Вопрос № ' + finalAnsver + ' ' + answers[0].que + '\nВы ответили: ' + answers[0].ansv);
        break;
    case 2:
        alert('Вопрос № ' + finalAnsver + ' ' + answers[1].que + '\nВы ответили: ' + answers[1].ansv);
        break;
    case 3:
        alert('Вопрос № ' + finalAnsver + ' ' + answers[2].que + '\nВы ответили: ' + answers[2].ansv);
        break;
    default:
        alert('Этого не может быть, но что-то пошло не так!');
        break;
}

alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

