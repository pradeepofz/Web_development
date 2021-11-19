// "use strict"

// A simple example for understanding closure

let globalVar = "a";

function outerFunction(outerArg){
   let outerVar = "b";
   function innerFunction(innerArg){
    let innerVar = "c";

    console.log(outerArg);
    console.log(innerArg);
    console.log(globalVar);
    console.log(outerVar);
    console.log(innerVar);
   }
innerFunction(456);

};
outerFunction(123);

///////////////////////////////////////////////////////////////////////////


const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount}passengers`);
  };

};

const booker = secureBooking();

secureBooking();
secureBooking();
secureBooking();
booker();
booker();
secureBooking();
booker();

// output:
// 1passengers
// 2passengers
// 3passengers

///////////////////////////////////////////////////////////


// CLOSURE USE 1 : using private variable and methods using closure

// Define the closure 

const rentPrice = function(initialRent){

  let rent = initialRent;

//Define private variables for closure

  return {

    getRent(){
    return console.log(rent);
    },

    incRent(amount){
    rent += amount;
    console.log(rent);
    },

    decRent(amount){
    rent -= amount;
    console.log(rent);   
    }

  }

}

let RentDetail = rentPrice(8000);

RentDetail.getRent();
RentDetail.incRent(1000);
RentDetail.decRent(500);
RentDetail.incRent(1000);
RentDetail.getRent();

// output
// 8000
// 9000
// 8500
// 9500
// 9500

//CLOSURE USE 2: Maintaining state between each call

(function() { 

  let multFn = function() { 
    // This variable is local to the closure and holds 
    // its value inbetween multiple calls 
   let mult = 9; 

   return function(val) { 
     mult = mult * val; 
     return mult; 
   }

  }; 

  let actMult = multFn(); 

  // Call the method multiple times 

  console.log(actMult(2)); 
  console.log(actMult(3)); 
  console.log(actMult(5)); 

}());
 
// output:
// 18
// 54
// 270

/////////////////////////////////////////////////////////////////////////////////////////////

let f;
const g = function () {
  const a = 23;
 f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 555;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//reassign f
h();
f();
console.dir(f);

// output:
// 46
// f f()
// 1110
// f f()

//////////////////////////////////////////////////////////////



// // Define the closure 

// function multFn() { 

//    var mult = 9; 
//    return function (val) { 
//     mult = mult * val;
//      return mult;
//    } 
//  } 
  
//  // Use the closure 
 
//    var mult2 = multFn(); 
//  console.log(mult2(18));
//  console.log(multFn());

//  output:
//  162
//  ƒ (val) { 
//   mult = mult * val;
//    return mult;
//  }

////////////////////////////////////////

//Function returning function examples

// function a() {
      
//   console.log('A!');

//   function b(){
//     console.log('B!'); 
//   }

//   return b();
// }

// var s = a();
// console.log('break');
// console.log(s);

//output
// A
// B
// break
// undefined

////////////////////////////////////////////

//Function returning function examples


// function a() {
//   console.log('A');
// }
// //alerts 'A', returns undefined

// function b() {
//   console.log('B');
//   return a;
// }
// //alerts 'B', returns function a

// function c() {
//   console.log('C');
//   return a();
// }
// //alerts 'C', alerts 'A', returns undefined

// console.log("Function 'a' returns " + a());
// console.log("Function 'b' returns " + b());
// console.log("Function 'c' returns " + c());

// output:
// A
// Function 'a' returns undefined
// B
// Function 'b' returns a() {
//   console.log('A');
// }
// C
//A
// Function 'c' returns undefined


