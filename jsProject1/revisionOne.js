// let value = null;
// console.log(typeof value);
// value = String(value);
// console.log(typeof value);

// ///////////////////////////////////

// let age = Number("ren");
// console.log(age);

// const obj = {
//     "a": {
//         "ww": {
//             "j": 2
//         }
//     }
// }

// const { a: { ww: { j } } } = obj
// const { a: { ww: { j = 2 } } } = obj; //assigning 2 to j as default value 
// obj.a.ww.j = 2 //assigning 2 to a j

(() => console.log('IIFE')
)()

const func = () => console.log('IIFE');
func();


let user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(clone);

function sayHi() {
    var greet = 'Hello!'
    console.log('1: ', greet)
}

sayHi()
//   console.log('2: ', greet)

const addExpr = function (a, ...b) {
    console.log(arguments);  //2, 3, 4, 5, 6, callee: (...), Symbol(Symbol.iterator)
    return a + b;
}
console.log(addExpr(2, 3, 4, 5, 6))  //23,4,5,6
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
console.log(recipeMap.size);

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
    console.log(fruit);
}

let arr = ["Apple", "Orange", "Pear"];
let users = {
    name: "ren",
    age: 24
}
for (let key in arr) {
    console.log(arr[key]);
}
for (let key in users) {
    console.log(users[key]);
}

let arra = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arra.splice(-1, 2, "complex", "language");

console.log(arra); // "I", "study", "complex", "language", "JavaScript"

let array = [1, 2];

let arrayLike = {
    name: "something",
    length: 1
};

console.log(array.concat(arrayLike));

const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

const saladCloned = [...salad];
console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

console.log(salad == saladCloned) // false

const str = 'cheese';
const [, firstChar = ''] = str;
console.log(firstChar); // => 'h'

const movies = {
    list: [
        { title: 'Heat' },
        { title: 'Interstellar' }
    ],
}

const { list: [, title] } = movies;
console.log(title);

const lists = [
    { title: 'Heat' },
    { title: 'Interstellar' }
];
const [firstMovieTitle] = lists;
console.log(firstMovieTitle);

let ar = [1, 2, 3, 4];
console.log(ar);
console.log(ar.concat([5, 6]), { name: 'ren' });

const deeparr = [[1, 2, [3]], [4, [5, 6]], 7, 8];
console.log(deeparr.flat(2));

let convertTitleCase = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
    const exception = ["a", "an", "and", "is", "or"];
    const titleCase = title.toLowerCase().split(' ')
        .map(word => exception.includes(word) ? word : capitalize(word))
        .join(' ');
    return capitalize(titleCase);
}

console.log(convertTitleCase("this is a nice title"));

const loggedInUser = "ren";
function greet(userName) {
    console.log(`Welcome ${userName} !`)
}
setTimeout(greet, 2000, loggedInUser)

console.log("This will be logged first");

// let timer = setInterval(myFunction,1000);

// console.log( setInterval(myFunction, 1000));
// function myFunction(){
//     let date= new Date();
//     console.log(`Time is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} IST`)
// }


//DOesn't work
// function myFunction() {
//     let date = new Date();
//     let hours = date.getHours();
//     let min = date.getMinutes();
//     // console.log(`hours:${date.getHours()}`)
//     return min;
// }

function iReturnFunction() {
    return function () { return 42 };
}
const myFunc = iReturnFunction();
console.log(myFunc());

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`passenger ${passengerCount}`)
    }
}

const booker = secureBooking();
booker();
booker();
booker();

const Person = function (name, birthYear) {
    this.firstName = name;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthyear);
    console.log(this.firstName);
}
console.log(Person.prototype);

let jonas = new Person('ren', 1991)
console.log(jonas);

let h1 = document.createElement('h1');
console.dir(h1)

/////////////////////////////////////////////



// const boredApi = function () {
//     fetch('https://www.boredapi.com/api/activity')
//     .then(whatever => whatever.json())
//     .then(resolve => console.log(resolve))
// }
// boredApi();

function randomUser(){
    fetch('https://randomuser.me/api/').then(response => {
        console.log(response);
        return response.json();
    }).then(resolve => console.log(resolve))
}
randomUser();
//https://www.boredapi.com/api/activity

// https://randomuser.me/api/