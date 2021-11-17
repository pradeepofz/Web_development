"use strict";

//you can call function before declation in function declaration

//calling function before declation work

// console.log(sumA(4, 5));
// function sumA(a, b) {
//   return a + b;
// }

/*function sumA(a, b) {
    return a + b;
}
let result = sumA(4, 5);
console.log(result);*/

//you cannot call function before declation in function expression

/*const sumA = function (a, b) {
    return a + b;
}
let result = sumA(4, 5)
console.log(result);*/

/*let result = sumA(4, 5)  //calling function before declation work
const sumA = function (a, b) {
    return a + b;
}
console.log(result);*/

// function showMe() {
//   console.log("a hoisting example");
// }

// showMe();

// //TO understand with debugging tool

// const a = "jonas";

// function first() {
//   const b = "hello";
//   console.log("pradeep");

//   if (b === "hello") {
//     console.log(b);

//     function second() {
//       const c = "hi";
//       third();
//       console.log(c);
//     }
//     second();
//   }
//   function third() {
//     const d = "hey";
//     console.log(d);
//   }
// }
// first();

//Regular Functions vs. Arrow Functions


// const pradeep = {
//   firstName: 'pradeep',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     const greet= () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//       },
      

//     // Solution 2
//      isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//     greet();
//   },
// //greet arrow function return undefined as its inside the object pradeep which is in global scope
// //   greet: () => {
// //         console.log(this);
// //         console.log(`Hey ${this.firstName}`);
// //    },
// };

// pradeep.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// // Objects vs. primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// Primitives vs. Objects in Practice

// Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage: ', jessicaCopy);

// const arr=[1,2,3];
// const newArr=[...arr,4,5];
// console.log(newArr); //array
// console.log(...newArr); //output as individual

