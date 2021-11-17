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