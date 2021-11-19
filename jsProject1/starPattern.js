//  'use strict'

// for loop

// let n=5;

// for(let i = 0; i < 5 ; i++){
//     console.log('1');

// // process.stdout.write('1');  //in node.js
// }

// for(let i = 0; i < 5 ; i++){
//     console.log('1',i);
//}
    


//Square star pattern

// let n = 5;// row or column count
// let string = "";// defining an empty string

// for(let i = 0; i < n; i++){// external loop

//     for(let j = 1;j <= n; j++){ // internal loop
//        string +=  "*";
//     // console.log('1',j);
//     }
//      string+="\n";// newline after each row
//     //  console.log('\n');

// }
// console.log(string);// newline after each row
// // console.log(string.length);


//Hollow square pattern

// let string = "";// defining an empty string
// let n = 5;// row or column count

// for(let i = 1; i <= n; i++){
//     for(let j = 1;j <= n; j++){
//         if(i === 1 || i === n){
//             string+="*";
//          }else{
//             if(j === 1 || j === n ){
//                 string += "*";
//              }else{
//                  string += " "
//              }
//         }

//   }
//    string +='\n';
// }
// console.log(string);
// console.log(string.length);

/////////////////////////////////////////////

//Right angle triangle

// let n = 5;// row or column count
// let string = "";// defining an empty string

// for (let i = 1; i <= n; i++){

//     for (let j = 1; j <= n - i; j++){
//        string +=" ";
//         }

//     for (let k=1 ; k <= i; k++){
//        string +="*";
//      } 

//     string +="\n";
// }
// console.log(string);
// console.log(string.length);

///////////////////////////////////////////////////


//Left angle triangle

//case-1:

// let n = 5;// row or column count
// let string = "";// defining an empty string

// for (let i = 1; i <= n; i++){

//     for (let j = 0; j < n - i; j++){
//        string +="";
//         }

//     for (let k=0 ; k < i; k++){
//        string +="*";
//      } 

//     string +="\n";
// }
// console.log(string);
// console.log(string.length);


//case-2:
// let n = 5;
// let string = "";
// for (let i =1; i <=  n ; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// output:
// *
// **
// ***
// ****
// *****


// let n = 5;
// let string = "";
// for (let i =1; i <=  n ; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);

// // output:
// 1
// 12
// 123
// 1234
// 12345


// let n = 5;
// let string = "";
// for (let i =1; i <=  n ; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);

// // output

// 1
// 12
// 123
// 1234
// 12345

// let n = 5;
// let string = "";
// let count=1;
// for (let i =1; i <=  n ; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += count +" ";
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

// output:
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 

///////////////////////////////////////

//downward triangle

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
     
//     for(let j =5 ;j>=i ;j--){
//         string +="*";
//     }

//     string +="\n";
// }
//  console.log(string);

// output:
// *****
// ****
// ***
// **
// *

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
     
//     for(let j =1 ;j<=(n-i)+1 ;j++){
//         string +=j ;
//     }

//     string +="\n";
// }
//  console.log(string);

// output:
// 12345
// 1234
// 123
// 12
// 1



// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
     
//     for(let j =5 ;j>=i ;j--){
//         string +=j;
//     }

//     string +="\n";
// }
//  console.log(string);

// output:
// 54321
// 5432
// 543
// 54
// 5

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
     
//     for(let j = 1 ;j <= n-i+1 ;j++){
//         string += n-j+1 ;
//     }

//     string +="\n";
// }
//  console.log(string);

//  output:
// 54321
// 5432
// 543
// 54
// 5

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
     
//     for(let j = 1 ;j <= n-i+1 ;j++){
//         string += n-j-i+2 ;
//     }

//     string +="\n";
// }
//  console.log(string);

// output:
// 54321
// 4321
// 321
// 21
// 1

/////////////////////////////////////

//Hollow triangle pattern

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for(let j = 0; j < i; j++){
//         if(i === n){
//             string +="*";
//         }
//         else{
//             if(j ===0 || j=== i-1){
//                 string +="*";
//             }else{
//                 string += " ";
//             }
//         }
//     }   
//   string +="\n";

// }
//  console.log(string);

 ////////////////////////////////////////////

//  //pyramid pattern

// let n = 5;// row or column count
// let string = "";// defining an empty string

// for (let i = 1; i <= n; i++){

//     for (let j = 1; j <= n - i; j++){
//        string +=" ";
//         }

//     for (let k=1 ; k <= 2*i-1; k++){
//        string +="*";
//      } 

//     string +="\n";
// }
// console.log(string);
// console.log(string.length);

/////////////////////////////////////////////

 //Reverse pyramid pattern

//  let n = 5;// row or column count
//  let string = "";// defining an empty string
 
//  for (let i = 0; i < n; i++){
 
//      for (let j = 0; j < i; j++){
//         string +=" ";
//          }
 
//      for (let k=0 ; k < 2*(n-i)- 1; k++){
//         string +="*";
//       } 
 
//      string +="\n";
//  }
//  console.log(string);
//  console.log(string.length);

// let n = 5;// row or column count
// let string = "";// defining an empty string

// for (let i = 1; i <= n; i++){

//     for (let j = 1; j <= i; j++){
//        string +=" ";
//         }

//     for (let k = 1; k <= 2*(n-i)+1; k++){
//        string +="*";
//      } 

//     string +="\n";
// }
// console.log(string);

////////////////////////////////////////

//hollw pyramid


// let n = 5;
// let string = "";

// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1 || i === n) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);

//////////////////////////////////////////////


// let n=5;
// let string = "";

// for(let i = 1;i <= n; i++){

//     for(let j = 1;j <= i; j++){
//         if(i == 1 || i == n){
//             string += "* ";
//         }
//         else{
//             if(j == 1 || j == i ){
//                 string += "* ";
//             }else{
//                 string += "  ";

//             }

//         }
    
//     }
//     string += "\n";
// }
// console.log(string);

//////////////////////////////////////////////////////

//Diamond pattern

// let n = 5;
// let string = "";
// // Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n - i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// // Reverse Pyramid
// for (let i = 1; i <= n-1; i++) {
//   for (let j = 1; j < i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * (n - i) - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);

///////////////////////////////////////

// let arr = [];
// for(let i=1; i<=100;i++){
//     arr.push(i);
// }
// console.log(arr);


// const arr2 = arr.filter((i)=> i%2===0)
// console.log(arr2)

// const arr3 = arr.filter((i)=> i%7!==0)
// console.log(arr3)



// function some(num){
//     if(num/2 && num/3){
//         console.log(true);
        
//     }else{
//         console.log(false);
        
//     }
// }
// some(18);




