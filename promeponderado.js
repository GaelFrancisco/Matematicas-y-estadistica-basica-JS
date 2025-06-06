// array de objetos
const notes = [{
    course: "educacion fisica",
    note: 10,
    credit: 2,
},
{
    course: "programacion",
    note: 8,
    credit: 5,
},
{
    course: "finanzas personales",
    note: 7,
    credit: 5,
}];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(function (sum = 0, newValue) {
    return sum + newValue;
});

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(function (sum = 0, newValue) {
    return sum + newValue;
});

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
console.log(promedioPonderadoNotasConCreditos);
console.log(notesWithCredit);
console.log(credits);
console.log(sumOfNotesWithCredit);
console.log(sumOfCredits);