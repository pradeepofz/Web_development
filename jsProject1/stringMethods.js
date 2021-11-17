// const str = `welcome portugal o\n`;
// console.log(str[0]);
// console.log('portugal'[5]);
// console.log('portugal'.length);
// console.log(str.length);


// //String Methods

// console.log(str.indexOf('O')); //not exists
// console.log(str.lastIndexOf('o'));
// const srt1 = str.slice(5,9)
// // console.log(str.slice(1));
// // console.log(str);
// console.log(srt1);
// // console.log(str.slice(5,str.lastIndexOf('')));
// console.log(str.slice(0,(str.lastIndexOf(' ')+2)));
// console.log(str.slice(-5,-2));
// console.log(str.slice(0,-6));

// console.log(str.substring(-4,1));
// // console.log(str.slice(6,2)); //does not work
// const str6 = "pradeep";
// console.log(str6.substr(-3,2));
// console.log(str6);




// console.log(str.slice(-1));
// const str2 =('rEn');
// // console.log(typeof(str2));
// // console.log((str2).slice(-2,-1));
// // console.log(typeof(str2).slice(1,2));
// console.log((str2));

// console.log(str2.toUpperCase());
// console.log((str2));
// console.log(str2.replace('E','e'));

// const str4 = "hey hello hey";
// console.log(str4.replace("hey",'hi').replace("hey",'hi'));
// console.log(str4.replace(/hey/g,'hi'));
// console.log(str4);

// console.log(str4.split(' '));
// console.log(str4);
// const str5 = ['hey','there']
// console.log(str5.join(' all '));
// console.log(str5);
// console.log(str.padStart(30,'+'));
// console.log(str.padEnd(30,'+'));
// console.log(str.repeat(5));

// const myJSON = '["Ford", "BMW", "Fiat"]';
// const myArray = JSON.parse(myJSON);

// const A = [1,2,3];
// const B = [4,5,5];
// const C = [6,6];
// const D = A.concat(B,C);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.valueOf());

// console.log(fruits.constructor);
// console.log(fruits.copyWithin(1,1));
// let arr=[];
// for(let [x,el] of fruits.entries()){
//   console.log(`${x}:${el}`);  
// }

// console.log(...fruits.entries());

// let my = console.log(Array.from('ABCDEFG'));
// console.log(my);
// console.log(fruits.join(" and "));
// console.log(fruits);

// let numbers = [2, 5, 9, 2,5,5];
// console.log (numbers.lastIndexOf(9,-3));     // 
// numbers.lastIndexOf(7);     // -1
// numbers.lastIndexOf(2, 3);  // 3
// numbers.lastIndexOf(2, 2);  // 0
// numbers.lastIndexOf(2, -2); // 0
// numbers.lastIndexOf(2, -1); // 3


// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
// let removed = myFish.splice(2, 1, 'drum')
// console.log(removed);
// console.log(myFish);
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

// let a = 3;

// let addTo = function(){
// const b = 2;
// return a+b;

// }
// console.log(addTo());

//  a = 5;
// console.log(addTo());

// console.dir(addTo);

// let f = () => {
//   let i = 1;
//   let j = 2;
//   return () => {
//     console.log(i);
//     console.log(j);

//   }
// };
// console.dir(f());

// const job = async () =>{

//     let promiseJob = new Promise ((resolve) =>{
//         setTimeout(() => resolve (`pass`),3000);
//     });
//     const genQues = new Promise ((resolve) => resolve (`cleared general question`));
//     const techQues = new Promise ((resolve) => resolve (`cleared technical question`));

//     console.log (`HR:lets start the interview`);
    

//     let pass = await promiseJob;

//     console.log (`HR: tell me about yourself`);
//     console.log (`me: about me`);

//     let firstRound = await genQues;

//     console.log (`HR: you have cleared ${firstRound}`);
//     console.log (`HR:lets move to technical`);

//     let secondRound = await techQues;

//     console.log (`HR: you have cleared ${secondRound}`);

//     return pass;

// }

// job().then((m) => console.log(`${m}`));

// console.log(1);
// console.log(2);
// async function sample(){
//  let something = new Promise(function(resolve,reject) {
//      count = true;
//  setTimeout(function(count){
//     console.log(3);
// },5000)
//  })
//  let data = await something;
//  }

// sample();

// const A=()=>{console.log(1);};

const job = async function (){
    try{
        let fetchData = new Promise (function(resolve,reject){
            console.log('start');
            
            if(reqObj.code === 1){
                resolve('code passed')
            }else{
                reject('code failed')
            }
        })
    
    // fetchData({code:1}).then((res)=>{
    //     console.log(res);
    // }).catch((rej)=>{
    //     console.log(rej);
    // })
    
    // fetchData({code:2}).then((res)=>{
    //     console.log(res);
    // }).catch((rej)=>{
    //     console.log(rej);
    // })
    
    
    let Data = await fetchData;
    }catch(err){
        console.log(`${err.message}`); 
    }
    };
    job({code:1}).then((m)=>console.log(`${m}`));
    // fetchData({code:1}).then((m)=>console.log(`${m}`));
    