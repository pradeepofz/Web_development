"use strict";

//you can call function before declation in function declaration

//calling function before declation work

/*function sumA(a, b) {
  return a + b;
}
console.log(sumA(4, 5));*/

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

function showMe() {
  console.log("a hoisting example");
}

showMe();
