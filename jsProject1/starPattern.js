 'use strict'

//Square star pattern

// let n = 6;// row or column count
// let string = "";// defining an empty string

// for(let i = 0; i < n; i++){// external loop

//     for(let j = 0;j < n; j++){ // internal loop
//        string +=  "*";

//     }
//      string+="\n";// newline after each row
// }
// console.log(string);// newline after each row
// console.log(string.length);


//Hollow square pattern

// let string = "";// defining an empty string
// let n = 7;// row or column count

// for(let i = 0; i < n; i++){
//     for(let j = 0;j < n; j++){
//         if(i === 0 || i === n-1){
//             string+="*";
//          }else{
//             if(j === 0 || j === n-1 ){
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

//     for (let j = 0; j < n - i; j++){
//        string +=" ";
//         }

//     for (let k=0 ; k < i; k++){
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

///////////////////////////////////////

//downward triangle

// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
     
//     for(let j =5 ;j>i ;j--){
//         string +="*"
//     }

//     string +="\n";
// }
//  console.log(string);

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

//     for (let j = 0; j < n - i; j++){
//        string +=" ";
//         }

//     for (let k=0 ; k < 2*i-1; k++){
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



