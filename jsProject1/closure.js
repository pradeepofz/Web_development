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


// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount}passengers`);
//   };
// };

// const booker = secureBooking();

// secureBooking();
// secureBooking();
// secureBooking();
// booker();
// booker();
// secureBooking();
// booker();

/////////////////////////////////////////////////////////////////////////////////////////////

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 555;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// //reassign f
// h();
// f();
// console.dir(f);

