// Aufgabe 2a
const fruits = [
  { id: 1, Name: "Banane", color: "yellow" },
  { id: 2, Name: "Apple", color: "red" },
];
console.log(fruits);

// Aufgabe 2b
const fruits1 = [...fruits, { id: 3, Name: "Orange", color: "orange" }];
console.log(fruits1);

// Aufgabe 2c
const fruits2 = fruits.map(changeColor);
function changeColor(fruit) {
  if (fruit.id === 2) {
    return { ...fruit, color: "green" };
  }
  return fruit;
}
console.log(fruits2);

// Aufgabe 2d
const fruit = [
  { id: 1, Name: "Banane", color: "yellow" },
  { id: 2, Name: "Apple", color: "red" },
];
const fruit1 = fruit.filter((fruit) => {
  return fruit.id !== 2;
});
console.log(fruit1);

// Aufgabe 2e
const reviews = [
  4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0,
];
const total = reviews.reduce((a, g) => a + g);
const average = total / reviews.length;

console.log(average)

// Aufgabe 2f
const groupByDurchschnitt = (groups, Durchschnitt) => {
    const { good = 0, ok = 0, bad = 0} = groups;
    if (Durchschnitt >= 4) {
        return { ...groups, good: good + 1};
    } else if (Durchschnitt >= 2.5) {
        return { ...groups, ok: ok + 1};
    }else if (Durchschnitt > 0) {
        return { ...groups, bad: bad + 1};
    }
};
const durchschnittGroups = reviews.reduce(groupByDurchschnitt, {});
console.log(durchschnittGroups)