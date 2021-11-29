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
    console.log(arguments);   //2, 3, 4, 5, 6, callee: (...), Symbol(Symbol.iterator)
    return a + b;
}
console.log(addExpr(2, 3, 4, 5, 6))  //23,4,5,6
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
console.log(recipeMap.size);