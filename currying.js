// Aufgabe 3a
const studentGrades = [
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
    {name: 'Adrian', grade: 98}
   ];
    
   const studentGradeFeedback = (name) => (grade) => {
    let Grade;
    if (grade >= 90) {
        Grade = 'a';
    } else if (grade >= 80) {
        Grade = 'b';
    } else if (grade >= 70) {
        Grade = 'c';
    } else if (grade >= 60) {
        Grade = 'd';
    } else {
        Grade = 'f';
    }
    
    if (Grade === 'f') {
        return `Not good ${name}, you got an ${Grade}`;
    } else if (Grade === 'd') {
        return `What happened ${name}, you got an ${Grade}`;
    } else if (Grade === 'c') {
        return `Well done ${name}, you got an ${Grade}`;
    } else if (Grade === 'b') {
        return `Nice Job ${name}, you got an ${Grade}`;
    } else {
        return `Excellent Job ${name}, you got an ${Grade}`;
    }
   };
   const studentFeedback = studentGrades.map(student => studentGradeFeedback(student.name)(student.grade));
   console.log(studentFeedback);
  

// Aufgabe 3b
const R = require('ramda');
const names = ["Augusto", "Hasenbalg"];
const addPrefix = R.curry((prefix, name) => `${prefix} ${name}`);
const friends = names.map(addPrefix("Person:"));
console.log(friends);

// Aufgabe 3c
let globalLength = 0;
function impureGetLength(arr) {
   globalLength = arr.length;  
   return arr.length;
}
const Guys = ["Augusto", "Hasenbalg"];
console.log(impureGetLength(Guys));
console.log(globalLength);  
//Purification
function pureGetLength(arr) {
 return arr.length;
}
 
const namesPure = ["Augusto", "Hasenbalg"];
console.log(pureGetLength(namesPure));