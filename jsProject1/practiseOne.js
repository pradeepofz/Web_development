// "use strict"
// // console.log(typeof null);
// var bar = null;
// // var bar =[];
// console.log(typeof bar==="object");
// console.log((bar!==null)&&(typeof bar === "object")||(typeof bar === "function")); //
// // let a=()=>{}
// // console.log(typeof a);
// console.log(Array.isArray(bar));


///////////////////////////

// z=2;
// (function(){
//     const a = b = c = d = 3;
//   })();
  
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));
//   console.log("d defined? " + (typeof d !== 'undefined'));
//   console.log("z defined? " + (typeof z !== 'undefined'));




// const a = b = c = d = 3;

// let A =(function(){
//      console.log("a defined? " + (typeof a !== 'undefined'));
//      console.log("a defined? " + (typeof b!== 'undefined'));
//      console.log("a defined? " + (typeof c !== 'undefined'));
     
// })();

// console.dir(A);

///////////////////////////////DOUBT


// const add = function sum(x,y,z){
//     return x+y+z;
// }
// const calc = function doCalc(xx,xy,xz){
//    return add(xx,xy,xz);
//     }

// function doCalc(x,y,z){
//      return (function(x,y,z){
//          return x+y+z})();

// };
// console.log(docalc(1,2,3));




////////////////////////////////////////
// let num =( 0.1 + 0.2);
// // let n = num.toFixed(2);
// console.log(num);
// console.log(0.1 + 0.2 == 0.3);

//////////////////////////////////

// function isPalindrome(str){
//    str = str.replace(/\W/g,'').toLowerCase();
//   console.log(str);
// return (str == str.split ('').reverse().join(''));
// }

// console.log(isPalindrome("Nurses run"));

///////////////////////////////////////

// function sum(a,b){
// if(b!== undefined){
//   return a+b;
// }else{
//   return function(b){return a+b};
// }
// }

// function sum(a,b){
//   if(b=== undefined){
//     return function(b){return a+b};
//   }else{
//     return a+b;
//   }
//   }
// function sum(x) {
//   if (arguments.length == 2) {
//     console.log(arguments.length);
//     return arguments[0] + arguments[1];
//   } else {
//     console.log(arguments.length);
//     return function(y) { return x + y; };
//   }
// }

// console.log(sum(2,3));
//  console.log(sum(3)(9));

///////////////////////////////////// DOUBT
// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   console.log(i);
//  btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }
// console.log(i);


// global variable
// var message = "Hello";
// function say() {
//     // local variable
//     var message = 'Hi';
//     console.log(message); // which message?
// }
// say();// Hi
// console.log(message); // Hello
// console.log(counter);

// var counter = 100;

// function testScope(n) {
//   if (true) {
//     var greeting = 'Hello';
//     var name = n;
//     console.log(greeting + " " + name); // output: Hello [name]
//   }
//   console.log(greeting + " " + name); // output: ReferenceError: greeting is not defined
// }

// testScope('David'); 


// let test = "I'm global";

// function testScope() {
//   test = "I'm local";

//   console.log(test);     
// }

// console.log(test);     // output: I'm global

// testScope();           // output: I'm local

// console.log(test);

// for (var counter = 1; counter < 5; counter++) {
//   console.log('Inside the loop:' + counter);
// }
// console.log('Outside the loop:' + counter);

///////////////////////////////

// const d = {};
// [ 'zebra', 'horse'].forEach(function(arg) {
// 	d[arg] = undefined;
// });

////////////////////////////////////

// var arr1 = "john".split('');
// console.log(arr1);

// var arr2 = arr1.reverse();
// console.log(arr1);
// console.log(arr2);

// var arr3 = "jones".split('');
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// arr2.push(arr3);
// console.log(arr2);

// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// console.log(arr1.splice(-4,2,'a','b','c'))
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

/////////////////////////////////////////

// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);

////////////////////////////////////////////

// let globalVar = "a";

// function outerFunction(outArg){
//    let outVar = "b";
//    function innerFunction(innerArg){
//     let innerVar = "c";

//     console.log(outArg);
//     console.log(innerArg);
//     console.log(globalVar);
//     console.log(outVar);
//     console.log(innerArg);
//    }
// innerFunction(456);

// };
// outerFunction(123);

/////////////////////////////////////

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[c]=456;
// a[b]=123;

// console.log(a[c]);
// console.log(a[b]);

/////////////////////////////////////////

// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(3));

//////////////////////////////////////////////
//does not work with strict mode

// (function(x) {
//   return (function(y) {
//       console.log(x);
//   })(2)
// })(1);

///////////////////////////////////////////////
// var _name=2;
// var hero = {
//   _name: 'John Doe',
//   getSecretIdentity: function ( food){
//     console.log(`${food} & ${this._name}`);
    
//  return this._name;
      
//   }
// };

// const stoleSecretIdentity = hero.getSecretIdentity;
// // var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

// // const stolen = stoleSecretIdentity.bind(hero);
// // console.log(stolen());
//  console.log(stoleSecretIdentity.call(hero,'chick'));

// console.log(hero.getSecretIdentity('rice'));

///////////////////////////////////////////

// function Traverse(p_element,p_callback) {
//   p_callback(p_element);
//   var list = p_element.children;
//   for (var i = 0; i < list.length; i++) {
//       Traverse(list[i],p_callback);  // recursive call
//   }
// }

//////////////////////////////////////DOUBT


// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);

////////////////////////////////////////////////Doubt

// for (let i = 0; i < 5; i++) {
//   setTimeout(function() { console.log(i); }, i * 1000 );
// }

// for (var i = 0; i < 5; i++) {
//   console.log(i);
//   setTimeout(function() { console.log(i); }, i * 1000 );
// }

////////////////////////////////////////////////

// var b = [undefined,5,,2];
// b[1] = 1;
// console.log(b);             
// console.log(b.map(e => 7)); 

/////////////////////////////////////////////////////

// console.log(typeof typeof 1);

//////////////////////////////////////////////////////

// const A = 'ren'/2;
// console.log(isNaN(A));

// console.log(isNaN({}));
// console.log(isNaN('NaN'));
// console.log(isNaN('hello'));
// console.log(Number.isNaN('hello'));


// console.log(Number.isNaN('NaN')); 
// console.log(Number.isNaN({})); 
// console.log(Number.isNaN('hello'));

/////////////////////////////////////////////////////

// function isInteger(x) { return (x ^ 0) === x; } 
// console.log(isInteger(10.02));
// console.log(isInteger(122.2));
// console.log(isInteger(2));
// console.log(Number.isInteger(10.2));
// console.log(Number.isInteger(-10));
// console.log(Number.isFinite('-10'));

// function isInteger(x) { return Math.round(x) === x; }
// console.log(Number.isFinite('infinite'));

///////////////////////////////////////

// const A = {
//   name : 'Ren',
//   age : 24,
//   friends : ['ram', 'shyno']
// };
// let B = Object.assign({},A);

// B.name = "raj";
// B.friends.push('daran', 'saran');
// console.log(A);
// console.log(B);


// let obj = {
//   a: 1,
//   b: 2,
//   c: {
//       age: 30
//   }
// };

// var objclone = Object.assign({},obj);
// console.log('objclone: ', objclone);

// obj.c.age = 45;
// console.log('After Change - obj: ', obj);           // 45 - This also changes
//  console.log('After Change - objclone: ', objclone); // 45

//////////////////////////////

// const arr = [1,2,3,4,5];
// const arr2 = arr.reverse();
// console.log(arr2);

// // const  dupArr = [...arr,...arr];
// const dupArr = arr.concat(arr);
// console.log(dupArr);
// console.log(arr);

//////////////////////////////////////////

// let arr = ['','','']
// console.log(arr.map((e) => e*55));

//////////////////////////////////////////

// let arr = ['\n','\n','\n'];
// console.log(arr.map((e) => e*55));

///////////////////////////////////////////////

// const fetchData = (reqObj) =>
// new Promise(function(resolve,reject){
//   if(reqObj.code === 1){
//     resolve("code passed")
//   }else{
//     reject ("code failed")
//   }
// })


// fetchData({code:1}).then((res) =>{
//   console.log(res);
// }).catch((e)=>{
//   console.log(rej);
// });

// fetchData({code:2}).then((res) =>{
//   console.log(res);
// }).catch((e)=>{
//   console.log(rej);
// });

///////////////////////////////////////////////////////

/*example2:
(function () {
  const header = document.querySelector("h1");
  Headers.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
});*/

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // destructuring assignment split in multiple lines for clarity
// let {
//   size,
//   items: [item1, item2], // assign items here
//   title = "Menu" // not present in the object (default value is used)
// } = options;

// alert(title);  // Menu

// alert(item1);  // Cake
// alert(item2);  // Donut
// console.log(size);

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"]
// };


// meetup.place = room;
// // room.occupiedBy = meetup;
// alert(JSON.stringify(meetup)); 


// function pow(x, n) {
//   let result = 1;

//   // multiply result by x n times in the loop
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log( pow(2, 3) );


// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// alert( pow(2, 3) );

// let company = { // the same object, compressed for brevity
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // The function to do the job
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // case (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//   } else { // case (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }

// alert(sumSalaries(company));






