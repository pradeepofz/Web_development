// const arr =[1,2,3,4,5];
// const obj={};
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// // console.log(arr);

// // arr.length = 0;
// // console.log(arr);

// function modifyArray(arr,callback){
// arr.push(100);
// callback();
// }
// modifyArray(arr,function(){
//     console.log(arr,"array modified");
    
// });

//Reverse the string

// let string = "Welcome to this Javascript Guide!";

// let revStr = string.split('').reverse().join('')
//              .split(' ').reverse().join(' ')
// console.log(revStr);

//Anagrams of one another

// let firstWord = "Mary";
// let secondWord = "Army";

// isAnagram(firstWord, secondWord); // true

// function isAnagram(first, second) {
  
//   let a = first.toLowerCase();
//   let b = second.toLowerCase();

//   // Sort the strings, and join the resulting array to a string. Compare the results
//   a = a.split("").sort().join("");
//   b = b.split("").sort().join("");

//   return a === b;
// }

//////////////////////////////////////////////////

//Removing duplicates from array

// const arr = [1,2,4,3,1,,4,5,55];
// console.log(arr);

// const uniqueArr = [];

// arr.forEach((c)=>{
//     if(!uniqueArr.includes(c)){
//         uniqueArr.push(c);
//     }
// });

// console.log(uniqueArr);


////////////////////////////////////////

// function foo() {
//     let x =  y = 0;
//     x++;
//     y++;
//     return x;
// }

// console.log(foo(), typeof x, typeof y);

// output: without strict mode
// 1 'undefined' 'number'

//////////////////////////////////////////

// var y = 1;
//   if (function f(){}) {
//     y += typeof f;
//   }
//   console.log(y);

// // output:1undefined

// function add(){
//     return 0+4;
// }
// console.log(add());
// console.log(typeof add);

// // output:
// 4
// function

/////////////////////////////////////////

// function foo() {
//     return
//     {
//       message: "Hello World"
//     };
//   }
//   console.log(foo());

// //   output:undefined

/////////////////////////////////////////

// var myChars = ['a', 'b', 'c', 'd']
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);

// // output:
// // [empty, 'b', 'c', 'd']
// // undefined
// // 4

///////////////////////////////////////////////

// var array1 = new Array(3);
// console.log(array1);

// var array2 = [];
// array2[2] = 100;
// console.log(array2);

// var array3 = [,,,];
// console.log(array3);

// // output:
// // [empty x 3]
// // [empty x 2,100]
// // [empty x 3]

//////////////////////////////////////////////////
// Not in strict mode  

// function printNumbers(first, second, first) {
//     console.log(first, second, first);
//   }
//   printNumbers(1, 2, 3);

// //   output: 3 2 3

//////////////////////////////////////////////

// const arrowFunc = () => arguments.length;
// console.log(arrowFunc(1, 2, 3));

// output: ReferenceError: arguments is not defined

// Arrow functions do not have an arguments, super, this, or new.target bindings. So any reference to arguments variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.
// Where as the normal function provides the number of arguments passed to the function

// const func = function () {
//     return arguments.length;
//     }
// console.log(func(1, 2, 3));

// But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

// const arrowFunc = (...args) => args.length;
// console.log(arrowFunc(1, 2, 3));

///////////////////////////////////////////////////////

// console.log( String.prototype.trimLeft.name === 'trimLeft' );
// console.log( String.prototype.trimLeft.name === 'trimStart' );

// output:
// false
// true  //the old method name 'trimLeft' still acts as an alias for 'trimStart'

/////////////////////////////////////////////////////////////

// console.log(Math.max());

// output: -infinity
// Note: Zero number of arguments is a valid case.

///////////////////////////////////////////////////////////////////

// console.log([0] == false);
// if([0]) {
// console.log("I'm True");
// } else {
// console.log("I'm False");
// }

// // output:
// // true
// // I'm True   [0],an array is truthy

/////////////////////////////////////////////////////////////////


// console.log([1, 2] + [3, 4]);

// // output:1,23,4

///////////////////////////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, NaN];
// console.log(numbers.indexOf(NaN));

// output: -1
// The indexOf uses strict equality operator(===) internally and NaN === NaN evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always

// let numbers = [1, 2, 3, 4, NaN];
// console.log(numbers.findIndex(Number.isNaN)); // 4

// console.log(numbers.includes(NaN)); // true

//////////////////////////////////////////////////////////////////

// let myNumber = 100;
// let myString = '100';

// if (!typeof myNumber === 'string') {
//    console.log("It is not a string!");
// } else {
//     console.log("It is a string!");
// }

// if (!typeof myString === "number"){
//    console.log("It is not a number!")
// } else {
//    console.log("It is a number!");
// }

// output:It is a string!, It is a number!

/////////////////////////////////////////////////////

// ( {a: x = 10, b: y = 20} = {a: 30})

// console.log(x); //30
// console.log(y);  //20

// const o = {p: 42, q: true};
// const {p: foo, q: bar} = o;

// console.log(foo); // 42
// console.log(bar); // true

// const {a = 10, b } = {a: 3};

// console.log(a); // 3
// console.log(b); // undefined

///////////////////////////////////////////////////////////

//Destructuring

// const user = {
//    id: 42,
//    displayName: 'jdoe',
//    fullName: {
//      firstName: 'John',
//      lastName: 'Doe'
//    }
//  };
 
//  function userId({id}) {
//    return id;
//  }
 
//  function whois({displayName, fullName}) {
//    return `${displayName} is ${fullName.firstName}`;
//  }

// //  function whois({displayName, fullName: {firstName: name}}) {
// //    return `${displayName} is ${name}`;
// //  }
 
//  console.log(userId(user)); // 42
//  console.log(whois(user));  // "jdoe is John"

///////////////////////////////////////////////////////////



// function area({length = 10, width = 20}) {
//    console.log(length*width);
//  }
 
//  area(); //Uncaught TypeError: Cannot read properties of undefined (reading 'length') at area
//  area({});

// If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error Error: Cannot read property 'length' of undefined as mentioned above.

////////////////////////////////////////////////////////////////////

// const props = [
//    { id: 1, name: 'John'},
//    { id: 2, name: 'Jack'},
//    { id: 3, name: 'Tom'}
//  ];
//  const [,,something] = props;
 
//  const [,,{name}] = props;
//  console.log(name);    //Tom
//  console.log(something);   //{id: 3, name: 'Tom'}
 
 ////////////////////////////////////////////////////

//  function add(item, items = []) {
//    items.push(item);
//    return items;
//  }
 
//  console.log(add('Orange'));     //['Orange']
//  console.log(add('Apple'));      //['Apple']



// function fruit(){
//    let items =[];
//      return function (i) {
//      items.push(i);
//      return items;
//    }
// }

// const add = fruit();
 

//  console.log(add('Orange'));
//  console.log(add('Apple'));

// //  output:
// //  ['Orange']
// //  ['Orange', 'Apple']
 
//  function fruit1(i){
//    let items =[];
//           items.push(i);
//      return items;
// }
//  console.log(fruit1('Orange')); //['Orange']
//  console.log(fruit1('Apple'));   //['Apple']

///////////////////////////////////////////////////////

// function greet(greeting, name, message = greeting + ' ' + name) {
//    console.log([greeting, name, message]);
//  }
 
//  greet('Hello', 'John');  //['Hello', 'John', 'Hello John']
//  greet('Hello', 'John', 'Good morning!');  //['Hello', 'John', 'Good morning!']

////////////////////////////////////////////////////////

// const obj = {'key': 'value'};
// const array = [...obj];
// console.log(array);   //TypeError: obj is not iterable

// Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, but they become iterable when used in an Array, or with iterating functions such as map(), reduce(), and assign()
 
/////////////////////////////////////////


// class Square {
//   constructor(length) {
//     this.length = length;
//   }

//   get area() {
//     return this.length * this.length;
//   }

//   set area(value) {
//     this.area = value;
//   }
// }


// const squareObj = new Square(10);
// console.log(squareObj.area);

//////////////////////////////////////////////////DOUBT

// function Person(height) { 

// this.height = height;
// }

// Person.prototype.walk = function(length) {
//   return  this.length =length;
//   return  this;  //Person {height: 2, length: 1}
// }

// Person.prototype.run = function(length) {
//   return this.length=length;;
// }

// let user = new Person(2);

// console.log(user.walk(1));

// console.log(user.run(10));
// console.log(user.height);


/////////////////////////////////////////////////DOUBT


// class Vehicle {
//    constructor(name) {
//      this.name = name;
//    }
 
//    start() {
//      console.log(`${this.name} vehicle started`);
//    }
//  }
 
//  class Car extends Vehicle {
//    start() {
//      console.log(`${this.name} car started`);
//      super.start();
//    }
//  }
 
//  const car = new Car('BMW');
//  console.log(car.start());
 
///////////////////////////////////////

// function greeting(name,age){
//    console.log(` ${name} is ${age} years old` );
// }

// function processInputUser(){
// console.log('enter your name:');
// let age=25;

// greeting('name',age);
// }

// processInputUser(greeting);

// function processInputUser1(){
//    const name = prompt('enter your name:');
//    console.log(`hey ${name}`);
// }
//    processInputUser1();

///////////////////////////////////////////////

// setTimeout(callback,1000);

// function callback(){
//    console.log('Done');
// }

//////////////////////////////////////////////

// setTimeout(()=>{
//    console.log(`1 sec passed`);
//    setTimeout(()=>{
//        console.log(`2 sec passed`);
//        setTimeout(()=>{
//            console.log(`3 sec passed`);
//            setTimeout(()=>{
//                console.log(`4 sec passed`);
               
//            },1000)
//        },1000)
//    },1000)
// },1000)

// const wait = function(s){
//    return new Promise ((resolve)=>{
//        setTimeout(resolve,1000);
//    })
// }

// wait(1)
// .then(()=>{console.log(`1 sec passed`) 
// return wait(1)
// })
// .then(()=>{console.log(`2 sec passed`) 
// return wait(1)
// })
// .then(()=>{console.log(`3 sec passed`) 
// return wait(1)
// })
// .then(()=>{console.log(`4 sec passed`) 
// return wait(1)
// })

//////////////////////////////////////////////////

// let l=222.334;

// console.log(parseInt(l));   //222

/////////////////////////////////////////////////

//creating Arrays

// let d = new Object([1,2,3,4,5])
// console.log(d);
// let e = new Array(1,2,3,4,5)
// console.log(e);
// let f =[1,2,3,4,5];
// console.log(f);



