// //Create an array
// const arr = new Object([1,2,3,4,5,6,7])
// console.log(arr);  //[1, 2, 3, 4, 5, 6, 7]

// //fill method  (mutates array)

// //  console.log(arr.fill(25));
// // console.log(arr.fill(30,1,3));
// // console.log(arr);

// //map method    (Create new array)

// const arr2 = console.log(arr.map(value=> value*2));  //[2, 4, 6, 8, 10, 12, 14]
// console.log(arr);   //[1, 2, 3, 4, 5, 6, 7]

// //filter method   (create new method)

// console.log(arr.filter((value,key)=> !(value>3)));  //[1, 2, 3]
// console.log(arr);  //[1, 2, 3, 4, 5, 6, 7]

// //some method

// console.log(arr.some((value,key)=>value>7)); //false
// console.log(arr.some((value,key)=>value<=1));  //true

// //every method

// console.log(arr.every((value,key)=>value>7));  //false
// console.log(arr.every((value,key)=>value>1));   //false
// console.log(arr.every((value,key)=>value>=1));   //true

// //concat method
// console.log(arr.concat([3,4],5,6))  //[1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6]



// //Reverse the string

// const str= 'pradeep';

// const reverseStr = str.split('').reverse().join('');
// console.log(reverseStr);   //peepard

// const reverseStr1 = (str) => {
//     let out = '';
//     for(let char of str){
//         //out = 'p' + ''
//         // out =  'r' + 'p'
//         //out = 'a' + 'r' + 'p'
//         out = char + out;
//         // out = out + char; //gives same string 'pradeep'
//     }
//     return out;
// }
// console.log(reverseStr1('pradeep'));

// const reverseStr2 = (str) => {
// // return str.split('').reduce((acc,char)=>{
// //    return acc = char+acc},'');
// return str.split('').reduce((acc,char)=>char+acc);
// }
// console.log(reverseStr2('pradeep'));


// //Finding factorial with recursion

// // const factorial = num =>{
// // if(num <= 1 ) return 1;
// // else return (num * factorial(num-1));
// // }

// const factorial = num => num > 2 ? num * factorial(num - 1): 1;

// // const factorial1 = num =>{
// //     let out = 1;
// //     for(let i=1; i <= num; i++){
// //         out=out*i;
// //     }
// //     return out;
// // }
// // console.log(factorial1(6));

// //Palindrome

// function isPalindrome(str){
// const str1 =str.toLowerCase().replace(/\W/g,'');
// const str2 = str1.split('').reverse().join('');
// console.log(str,str1,str2);
// return str1 === str2;
// }

// function isPalindrome1(str){
// return str.split('').every((char,index)=>{
// return (char ===  str[str.length -1-index]) 
// });
// }
// console.log(isPalindrome1('nurses run'));
// console.log(isPalindrome1('nivin'));
// console.log(isPalindrome('nu#%#rses ##run'));
// console.log(isPalindrome('NiVin'));


// function isPalindrome2(str){
// const str1 =str.toLowerCase().replace(/\W/g,'');
// console.log(str1);

// for(i=0;i < str1.length/2; i++){
  
//     if(str1[i] !== str1[str1.length -1 - i]){
//         return false
//     }
        
// }
// return true;
// };
// console.log(isPalindrome2('bheeb'));
// console.log(isPalindrome2('nurses run'));

// //Palindrome using for of loop

// const isPalindrome3 = (str) =>{
//     const str1 =str.toLowerCase().replace(/\W/g,'');
//     const array = str1.split('');
//     for(let char of array){
//         if(char !== array.pop()){
//             return false;
//         }  
//     }
//     return true;
// }
// console.log(isPalindrome3('nu#%#rses ##run'));
// console.log(isPalindrome3('NiVin'));

//Palindrome using forEach  DOUBT

// const isPalindrome4 = str =>{
// const clearString = str.replace(/\W/g,'').toLowerCase();
// console.log(clearString);

// clearString.split('').forEach((char,index)=>{
//     console.log(char);
//     console.log(clearString[clearString.length-1-index]);
//     if(char !== clearString[clearString.length-1-index]) {
//         return false
//     }
// })
// return true;
// }
// console.log(isPalindrome4('nu#%#rses ##run'));
// console.log(isPalindrome4('NiVinx'));

////////////////////////////////////////////////////////
//reverse array

// const arr= [1,2,3,4,5,6,7,8];
// const revArr=arr.reverse();
// console.log(revArr);

/////////////////////////////////////////////////////////
//reverse number

// const num = -1324174271;
// let revNum = parseInt(num.toString().split('').reverse().join(''))
// console.log(revNum);

// /////////////////////////////////////////////////////////
// //get first number

// let n=523.252;
// // let firstNum = parseInt(n.toString().slice(0,1));
// // console.log(firstNum);

// //get last number
// // let clear = Math.trunc(n);
// // console.log(clear);

// let lastNum = parseInt(Math.trunc(n).toString().slice(-1))
// console.log(lastNum);  //3

// let decimalNum = parseInt(n.toString().split('.').slice(-1).join(''))
// console.log(decimalNum);  //252

// ////////////////////////////////////////////////////////////

// //fizzbuzz problem

// const fizzBuzz = (number) =>{
// let out =[];
// for(let i =1; i <= number; i++){

// if(i%6 ===0) out.push('fizzbuzz')
// else if(i%2 ===0) out.push('fizz')
// else if(i%3 ===0) out.push('buzz')
// else out.push(i)

// }
// return out;
// }
// console.log(fizzBuzz(12));

// ///////////////////////////////////////////////////////

// //Max occurance of character in a string

// const getMaxCharFromString=string=>{
//     const obj={};
//     for(let char of string){
//           obj[char] =obj[char]+1 || 1;
//     }
//     console.log(obj);
//     let maxCount = 0; // let maxCount = 0; if maxChar,maxCount = h 1
//     let maxChar = null;
//     for(let char in obj){
//         if(obj[char] > maxCount){
//             maxCount = obj[char];
//             maxChar = char;
//         }
//     }
//     console.log(maxChar,maxCount);

//     return maxChar
// }
// console.log(getMaxCharFromString('hello world'));



// const getMaxCharFromNumber=number=>{
//     console.log(number);
//     number = number.toString();
//     console.log(number);
    
//     const obj={};
//     // console.log(obj);
    
//     for(let char of number){
//         //   obj[char] =obj[char]+1 || 1;
//         if(obj[char]){
//             obj[char]++;
//         }else{
//             obj[char] = 1;
//         }

// // console.log(char);
// // console.log(obj[char]);
//     }
//     console.log(obj);
    
//     let maxCount = 0; // let maxCount = 0; if maxChar,maxCount = h 1
//     let maxChar = null;
//     for(let char in obj){
//         if(obj[char] > maxCount){
//             maxCount = obj[char];
//             maxChar = char;
//         }
//     }
//     console.log(maxChar,maxCount);

//     return maxChar
// }
// console.log(getMaxCharFromNumber(2435246721395222));

//////////////////////////////////////////
// let ar = [3, 5, 7];
// ar.foo = "hello";
// console.log(ar);

// // for..in iterates over all enumerable property keys of an object
// for(let i in ar){
//     console.log(i); //0 1 2 foo
//     console.log(ar[i]); //3 5 7 hello
// }

// //for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
// for(let i of ar){
//     console.log(i); //3 5 7
// }

// for(let i in Object.entries(ar)){
//     console.log(i); //0 1 2 3
//     console.log(ar[i]); // 3 5 7 undefined
// }

// for(let [i,el] of Object.entries(ar)){
//     console.log(i,el); //0 3, 1 5, 2 7, foo hello
// }

//use for...in loop only for objects
// iterables must have synbol.iterator property. string,array,array-like objects(e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

//////////////////////////////////////////////////////////////

//Anagram

// let str = 'army';
// let str1 = 'mary';

// function isAnagram (str,str1){
// str = str.replace(/\W/g,'').toLowerCase().split('').sort().join('')
// str1 = str1.replace(/\W/g,'').toLowerCase().split('').sort().join('')
// console.log(str,str1);

// return str === str1;

// }
// console.log(isAnagram('ar#my','ma@#ry'))
// console.log(isAnagram('west','stew'))
// console.log(isAnagram('adhag','gadua'))

// ///////////////////////////
// //To check object length

// const object1 = {
//     a : 1,
//     a : 2,
//     a : 3,
// }

// console.log(Object.keys(object1).length);
// console.log(object1.a);

// const object2 = {
//     a : 5,
//     b : 2,
//     c : 3,
// }

// console.log(Object.keys(object2).length);
// console.log(object2.a);

// ///////////////////////////////////////////////

// const vowels = string =>{
//     let count =0;
//     let letters = '';
//     const choices ='aeiou';
//     for(let char of string.toLowerCase()){
//   
//     if(choices.includes(char)){
//         count++;
//         letters += char;
//     }

//     }

// // return count;
// return letters;
// }
// console.log(vowels('pradeep'));


// const vowels1 = string =>{
//  const matches = string.toLowerCase().match(/[aeiou]/g);
//  return matches?matches.length:0
// }
// console.log(vowels1('pradeep'));
// console.log(vowels1('wqppdv'));


/////////////////////////////////////////////////

// chunking an array

// const arr = [1,2,3,4,5,6,7,8,9];

// const chuckArray =(arr,n)=>{
// const chunks=[];
// // let index = 0;
// for(let i=0; i< arr.length ;i+=n){
//      chunks.push(arr.slice(i,i+n));
//     console.log(chunks);
// }
// // while(index < arr.length){
// //     chunks.push(arr.slice(index, index + n));
// //     index += n;
// // }
// return chunks;
// }
// console.log(chuckArray(arr,2));

////////////////////////////////////////////

//Reverse an array

// const revArray = arr.reverse();
// console.log(revArray);
// console.log(arr);

// const revArray1 = arr =>{
//     for(i=0; i < arr.length/2;i++){
//         // const temp = arr[i];
//         // arr[i] = arr[arr.length-1-i];
//         // arr[arr.length-1-i] = temp
//         [arr[i],arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[i]]
//     }

// return arr
// }
// console.log(revArray1(arr));

// /////////////////////////////////////////////

// //reverse the word in a sentence

// let string = "Welcome to this Javascript Guide!";

// // let revStr = string.split('').reverse().join('')
// //              .split(' ').reverse().join(' ')
// // console.log(revStr);

// //Reverse the word and also the sentence

// let revStr = string.split('').reverse().join('')
// .split(' ').reverse().join(' ').split(' ').reverse().join()
                
            
// console.log(revStr);

// const revstr = string =>{

//     // const stringReversed = string.split(' ').map((str)=>{
//     // return str.split('').reverse().join('')   
//     // }).join(' ');

//     //Reverse the word and also the sentence

//     const stringReversed = string.split(' ').map((str)=>{
//         return str.split('').reverse().join('')   
//         }).reverse().join(' ');

//    return stringReversed;
// }
// console.log(revstr("Welcome to this Javascript Guide"));

// console.log(revStr);

// console.log(revstr("Welcome to this Javascript Guide"));

// ///////////////////////////////////////////////////////////

// //Capitalise words

// const toCapitalise = string =>{
// const capitalisedStr = string.toLowerCase().split(' ')
// .map(str=>str[0].toUpperCase()+str.slice(1)).join(' ')

// return capitalisedStr;
// }
// console.log(toCapitalise('pradeep kumar'));

// const toCapitalise1 = string =>{
// let title= string[0].toUpperCase();
// //P "radeep kumar"
// for(i=1 ;i < string.length;i++){
//     title += string[i-1] === "" ? string[i].toUpperCase():string[i];
// }
// return title;
// }
// console.log(toCapitalise1('pradeep kumar'));

// ////////////////////////////////////////////////////////////

// //Rotate array (nth rotate)

// let array4 = [1,2,3,4,5,6,7,8];
// let string1 = 'hello world';

// //[1,2,3,4,5,6,7,8]
// //[4,5,6,7,8,1,2,3]

// const arrayRotation = (array,n) =>{
// for(i=0;i < n; i++){
//     arr.push(array.shift());
// }
// return array;
// }
// console.log(arrayRotation(array4,3));
// console.log(array4);

// let array5 = [1,2,3,4,5,6,7,8];
// //[1,2,3,4,5,6,7,8]
// //[6,7,8,1,2,3,4,5]

// const arrayRotation1 = (array,n) =>{
    
//     for(i=0;i < n; i++){
//         array.unshift(array.pop());
//     }
//     return array;
//     }
// console.log(arrayRotation1(array5,3));
// console.log(array5);


// //string rotation

// const stringRotation = (string1,n) =>{
//     let str =string1.split('')
// for(i=0;i < n; i++){
//     str.push(str.shift());
// }
// return str.join('');
// }
// console.log(stringRotation(string1,3));
// console.log(string1);

// ///////////////////////////////////////////////

// const magazine = "hello world i am pradeep kumar and i am looking for a job";
// const notes = "i"


// const checkRandomNotes =(notes,noteWords) =>{
//     let notesArray=notes.split(' ');
//     const result =  noteWords.split(' ').forEach((words)=>{
//         console.log(words);
        
//         return console.log(notesArray.includes(words))
//     })

//     console.log(result);
    
// return result;
// }
// console.log(checkRandomNotes(notes,noteWords));

// const checkRandomWords =(magazine,notes) =>{
//     const magazineWords = magazine.split(' ');
//     const magazineObj = {};

//     magazineWords.forEach(word=>{
//         if(!magazineObj[word]){
//             magazineObj[word]=0;
//         }else{
//             magazineObj[word]++;
//         }
//     });
//     const notesWords = notes.split(' ')
//     let flag = true;
//     notesWords.forEach(word=>{
//         if(magazineObj[word]){
//             magazineObj[word]--;
//         if(magazineObj[word] < 0){
//             flag = false;
//         }
//         }else{
//              flag= false;

//         }

//     })
// return flag;
// }
// console.log(checkRandomWords(magazine,notes));

///////////////////////////////////////////////////////////

let array = [];
let finalArray =[];
let arrayNumber =100;
let result='';
let removeLetter = '2';
for(i=1;i<=arrayNumber;i++){
    array.push(i);
}
console.log(array);

const removeNumber = (array)=>{

// let final = array.filter(arr=>{
//  return   (!(arr%10 === 2))
// }).filter(arr=>{
//     return   !(arr/10 === 2)
// })

const arrToStr = array.toString();
console.log(arrToStr);
// for(j=0;j<arrayNumber;j++){
//     // console.log(arrToStr[j]);
//     result+=arrToStr.replace('2','');
// }
 for(let char of arrToStr){
    //  result+=char.replace('2','')
    char.includes()
 }
 let final = result.split('').filter(arr=>{
    return ( arr !== ',')
}).join('') ;
return final;


}
console.log(removeNumber(array));


// console.log(array9);

   //  array7.filter((char)=>{
    //     if(!char.toString().includes('2')){

    //                array9.push(char)
    //     }
    // })
//    for(let char of array8){
//        if(!char.includes(2)){

//        array9.push(char)
          
//        }
/////////////////////////////////////////////////

// (const functionObj() =>{
//     var a = {
//         a: 1,
//         b: 2,
//         c: 3,
//     }
    // console.log(Object.keys(a).length);

// })();



// (parameters)=>{}

// const Animal = function(color,height,name){
// this.color = color;
// this.height = height;
// this.name = name;
// }
// const dog1 = new Animal('white',12,'reb')
// const dog2 = new Animal('black',12,'ren')

// console.log(dog1,dog2)

// /////////////////////////////////////////

// const add = function(a){
// return function(b){
//     return function(c){
//         return a+b+c;
//     }
// }

// }
// console.log(add(5)(6)(7));
// console.log(add(5));

// ///////////////////////////////////////////

// var a = {
//             a: 1,
//             b: 2,
//             c: 3,
//         }

// const abc= Object.assign(a);

////////////////////////////////////////////////////

