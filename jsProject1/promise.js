//Build simple promise and return it

//  const fetchData = (reqObj)=>{
//   const promiseData = new Promise(function(resolve,reject){
//     if(reqObj.code === 1){
//       resolve("code passed")
//     }else{
//       reject ("code failed")
//     }
//   });
  
// return promiseData;
//  }
  

// fetchData({code:1}).then((res) =>{
//   console.log(res);
// }).catch((rej)=>{
//   console.log(rej);
// });

// fetchData({code:2}).then((res) =>{
//   console.log(res);
// }).catch((rej)=>{
//   console.log(rej);
// });

///////////////////////////////////////////////////////////////
// use async...Await

// const job = async function (){

// try{
//   const fetchData = (reqObj)=>{
//     const promiseData = new Promise(function(resolve,reject){
//       if(reqObj.code === 1){
//         resolve("code passed")
//       }else{
//         reject ("code failed")
//       }
//       });
//      return promiseData;
//   }

//   const data = await fetchData({code:re});
//   console.log(data);

// }catch(e){
// console.log(e);
// console.log(e.message);
// }

// }();

/////////////////////////////////

// let job1 = async function (reqObj){

//  try{
//         const promiseData = new Promise(function(resolve,reject){
//             if(reqObj.code === 1){
//               resolve("code passed")
//             }else{
//               reject ("code failed")
//             }
//         });
   
//        const data = await promiseData;
//        console.log(data);
    
// }catch(e){
//        console.log(e);
//     }
// };

// job1({code:re});

//////////////////////////////////////

// (async function(expected,delay){

// return new Promise((resolve,reject) =>{
//  const number = Math.trunc(Math.random()*100);
//  console.log(number);
 
//  setTimeout(()=>number>expected
//                  ? resolve(number)
//                  :reject(new Error('lower than expected number')),delay);
 
// })

// })(100,50,1000)
// .then(number =>console.log(number))
// .catch(error =>console.error(error)
// )

//////////////////////////////////////////////

// //Promises resolved immediately

// Promise.resolve('yes')
// 	.then((result) => {
// 		console.log(result);        
// 	});

// //Promises rejected immediately

// Promise.reject(new Error('no'))
// 	.catch((error) => {
// 		console.error(error);        
// 	});

///////////////////////////////////////////////    

// const thenable = {
//     then: function(callback) {
//       setTimeout(() => callback(2), 100);
//     }
//   };
  
//   const value = await thenable;
//   console.log(value); // 2

//   function sleep(ms) {
//     return new Promise(res => {
//         setTimeout(()=>console.log('sleep'), ms);
//     });
// }
// sleep(2000);

////////////////////////////////


// (async function job2(){

// try{
//      function sleep(num1,num){

//  //   return  function sleep(num1,num){
    
//      function sleep(num1,num){

//         return new Promise(function(resolve,reject){
//             if(num1>num){
//         resolve('sleep')
//             }else{
//         reject('leep')
//             }
//         });
        
//         }

//     }catch(e){
//         console.log(e);
//        }
//        const data = await sleep(40,20)
//         console.log(data);

// })();

/////////////////////////////////////////////

// (async function job2(num1,num){

//     try{

//             const promise1 = new Promise(function(resolve,reject){
//                 if(num1>num){
//             resolve('sleep')
//                 }else{
//             reject('nope')
//                 }
//             });
    
         
//             const data = await promise1
//     console.log(data);
    
//         }catch(e){
//             console.log(e);
//            }
    
//     })(60,10);

////////////////////////////////////////////////////////

function curry(h) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return h(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
//   console.log(sum(1)(2));  //Uncaught TypeError: sum(...) is not a function
  let curriedSum = curry(sum);  
  
  console.log( curriedSum(1)(2) ); // 3
    


