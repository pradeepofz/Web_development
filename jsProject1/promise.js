 const fetchData = (reqObj)=>{
  const promiseData = new Promise(function(resolve,reject){
    if(reqObj.code === 1){
      resolve("code passed")
    }else{
      reject ("code failed")
    }
  });
  

 }
  

fetchData({code:1}).then((res) =>{
  console.log(res);
}).catch((rej)=>{
  console.log(rej);
});

// fetchData({code:2}).then((res) =>{
//   console.log(res);
// }).catch((rej)=>{
//   console.log(rej);
// });

///////////////////////////////////////////////////////////////

// let job = async function (){
// try{
//   const promiseData = 
//   new Promise(function(resolve,reject){
//    if(reqObj.code === 1){
//      resolve("code passed")
//    }else{
//      reject ("code failed")
//    }
//  })

//  fetchData({code:1}).then((res) =>{
//   console.log(res);
// }).catch((e)=>{
//   console.log(rej);
// });

// fetchData({code:2}).then((res) =>{
//   console.log(res);
// }).catch((e)=>{
//   console.log(rej);
// });

// }catch(e){

// }




// }
