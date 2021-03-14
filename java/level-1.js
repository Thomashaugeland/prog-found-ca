//question 1

var pet = "dog";

console.log(pet)

//question 2

var person = "rich" + " " + 100;

console.log(person)

//question 3

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

//question 4

var numbers = [1, 2, 3, 4, 5];

for (var i = 1; i <= 5; i++) {
    console.log(i);
}

//question 5

for (var i = 15; i <= 25; i++) {
    console.log(i);
}

//question 6

for (var i = 15; i <= 25; i++) {
    if (i == 20)
        console.log(i);
}

//question 7

var people = [
    {
        type: "man",
        age: 75,
        alive: true
    },
    {
        type: "woman",
        age: 68,
        alive: true
    },
];

for (var i = 0; i < people.length; i++) {

    var typeOfItem = typeof people[i];

    if (typeOfItem === "number") {
        console.log(people[i]);
    }
}

//comment: I have trouble understanding how to get the 
//console to log both boolean and number togheter.

//question 8

function whatIDontLike() {
    console.log("I don't like ");
}

whatIDontLike("cats");

//comment: I don`t get this to add the value of cats, 
// and I don`t see whats wrong.

//question 9

function subtract(number1, number2) {
    var sum = number1 - number2;
    console.log(sum);
}

subtract(20, 10);

//question 10

var emptyArray = [];

