//print numbers from 1 to 10
// (function (number){
//  let arr=[];
//  for(i=1;i<=number;i++){
// arr.push(i);
//  };
//  console.log(arr);
// })(10);

//////////////////////////////////////////////
//find odd numbers
// let arr=[1,2,3,4,5,6,7,8];
// let arr2 = arr.filter((num) =>{ 
//   return !(num%2 === 0);

// })
// console.log(arr2);

//////////////////////////////////////////// DOUBT

// searching an array

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// // let result = fruits.indexOf('orang');
// let result = fruits.filter( (el) => el.toLowerCase().indexOf('g') !== -1);
// console.log(result);

/////////////////////////////////////////////////

// for(i=1; i<=10; i++){
//     let mulResult = i*7;
//     console.log(`7 * ${i} = ${mulResult} `);
    
// }

////////////////////////////////////////////////
//add numbers 1to10
// let sum = 0;

// for(let i = 12; i <= 30; i+=2)
// {
    
//     sum += i;
// }

// console.log ( sum );

////////////////////////////////////////////

// const studentsArray = [
//     { class: '1', section: 'A', name: 'Name1' },
//     { class: '1', section: 'B', name: 'Name2' },
//     { class: '2', section: 'A', name: 'Name3' },
//     { class: '3', section: 'B', name: 'Name12' },
//     { class: '1', section: 'A', name: 'Name23' },
//     { class: '5', section: 'C', name: 'Name11' },
//     { class: '6', section: 'A', name: 'Name121' },
//     { class: '8', section: 'A', name: 'Name1123' },
//     { class: '12', section: 'A', name: 'Name113' },
//     { class: '11', section: 'E', name: 'Name1432' },
//     { class: '1', section: 'A', name: 'Name112123' },
//     { class: '5', section: 'A', name: 'Name1123' },
//     { class: '7', section: 'D', name: 'Name11123' },
//     { class: '8', section: 'A', name: 'Name154' },
//     { class: '2', section: 'C', name: 'Name164' },
//     { class: '3', section: 'A', name: 'Name175' },
//     { class: '4', section: 'G', name: 'Name175' },
// ];

// const studentObj = {};

// studentsArray.forEach( (classObj) => {
// if( !studentObj[classObj.class]){
//     studentObj[classObj.class]={};
// }
// if( !studentObj[classObj.section]){
//     studentObj[classObj.class][classObj.section]=[];
// }
// studentObj[classObj.class][classObj.section].push(classObj.name);

// });
// console.log(studentObj)

// ///////////////////////////////////////////////////////////////////
// let object={};
// const vowels1 = string =>{
// //  const vow=['a','e','i','o','u'];
//  const matches = string.toLowerCase().match(/[aeiou]/g);
// // let replace = string.replace(/[ae]/g,'');
// // return replace;
//  return object = {count:matches?matches.length:0,letters:matches}
 
// }
// console.log(vowels1('pradeep'));
// console.log(vowels1('wqppda'));


// const obj = vowels1();
// console.log(object);

// object.count=4;
// console.log(object);

// const vowels = string =>{
//     let count =0;
//     let letters = '';
//     const choices ='aeiou';
//     for(let char of string.toLowerCase()){
    
//     // if(choices.includes(char)){
//     //     count++;
//     //     letters += char;
//     // }

//     }

// // return count;
// return letters;
// }
// console.log(vowels('pradeep'));


//////////////////////////////////////////////////////

// let array=['a','b'];

// console.log(array.toString().replace(',',''));


///////////////////////////////////////////////////////
// shallow copy
// const object2 = {
//     'a' : [name1='ren',name2='raj'],
//     'b' : 2,
//     'c' : 3,
// }
// object2.a[0]='riya';
// let object3 = {...object2};
// console.log(object3);

// object3.a.name1='ram';
// console.log(object3);
// console.log(object2);
///////////////////////////////////////////////////////////

// const magazine = "i am magazine and i have got some words here";
// const notes = "i i got some words magazine got ren";
// const magazineWords={};
// function checkWordsExist (magazine,notes){

//     const magazineArray = magazine.split(' ')
    
// magazineArray.forEach(word=>{
//     if(!(magazineWords[word])){
//         magazineWords[word]=1;
//     }
//     else{
//         magazineWords[word]++;
//     }
// })

// console.log(magazineWords);

// const notesArray = notes.split(" ");
// let result = true;
// let words =" ";

// notesArray.forEach(word => {
//     if(magazineWords[word]){
//          magazineWords[word]--;

//     if(magazineWords[word] < 0) {
//         result =  false;
//     }
//     }else{
//         result = false;
//         words +=word+' ';

//     }
// });
// return {result,words};
// };

// console.log(checkWordsExist (magazine,notes));

///////////////////////////////////////////////////////////
// let str = 'hello world';
// let removeDuplicates = str.split('');
// console.log(removeDuplicates);

// const removed = new Set (removeDuplicates);
// console.log(removed); //set
// console.log(Array.from(removed).join('')) //set to Array to string
//[removed].join('') //set to array
// const removedup = [...new Set(removeDuplicates)].join('')

// function removeStr(str){
//     const remStr = str.split('').filter((el,index,array) =>{
//     return array.indexOf(el) === index;
// });
// return remStr.join('');


// }
// console.log(removeStr('pradeep'));
/////////////////////////////////////////

// reverse string 

// const reverseString = str =>{
//     return str ? reverseString (str.substr(1)) + str[0] : str;
// };
// console.log(reverseString('368dnkfn'));

// str.split('').reverse().join('');

// const reverseString = str =>{
//     return str.split('').reduce((acc,el)=> el+acc ,'')
// }
// console.log(reverseString('368dnkfn'));

///////////////////////////////////////////

//remove a character

// const removeCharacters = (str,char) => {
// //     // return str.split('').filter(i=>{
// //     //     return i !== char
// //     // })
// // }
// console.log(removeCharacters('pradeep','e'));

//to remove multiple characters from a string

// let string = 'hello world';
// let res=string.replace(/[el]/g,'');
// console.log(res);  //ho word

////////////////////////////////////////////////////
//finding max occuring char (DOUBT:what if 2 characters has same occurance)

let string = 'hello woorld';
let obj = {};

for(const char of string){
    obj[char]= obj[char]+1 ||1;
};

console.log(obj);

let maxChar =[];
let maxCount = 0;

function maxOccurance(string){
    for(const char in obj){
        if(obj[char] >= maxCount ){
            maxChar=char;
            maxCount=obj[char];
            console.log(maxChar,maxCount)
        }
    }
    return {maxChar,maxCount}
}

console.log(maxOccurance(string));

//////////////////////////////////////////////////////

const arr = [1,2,3,4,5,6,7,8,9];

const chuckArray =(arr,n)=>{
const chunks=[];
// let index = 0;
for(let i=0; i< arr.length ;i+=n){
     chunks.push(arr.slice(i,i+n));
    console.log(chunks);
}
// while(index < arr.length){
//     chunks.push(arr.slice(index, index + n));
//     index += n;
// }
return chunks;
}
console.log(chuckArray(arr,2));