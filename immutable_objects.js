// Aufgabe 1b
//const myNumber = 40;
//console.log(myNumber)
//const myNumber = 45;
//console.log(myNumber)

// Aufgabe 1c
const myObject = {
    firstName: "Augusto",
    lastName: "Hasenbalg",
    age: 17
}
console.log(myObject)

// Aufgabe 1d
const myObject1 = {
    ...myObject,
    isStudent: myObject.isStudent = true
}
console.log(myObject)

// Aufgabe 1e
const myObject2 = {
    ...myObject,
    isStudent: myObject.isStudent = false
}
console.log(myObject)

// Aufgabe 1f
const { isStudent, ...newObject } = myObject;

console.log(newObject)
