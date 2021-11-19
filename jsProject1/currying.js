//CURRYING : currying takes a function that receives more than
// one parameter and breaks it into a series of unary (one parameter) functions
//so,currying function takes one parameter at a time

//Function Currying using bind method.
//We create a multiply function and create more functions out of it by presetting some argument inside the function

// let multiply = function(x,y){
//     console.log(x*y);
// }
// //multiply()        //NaN
// // multiply(2,3);   //6
// // multiply(2)(3);  //Uncaught TypeError: multiply(...) is not a function

// let multiplyByTwo = multiply.bind(this,2,6); //this=f multiply
// // multiplyByTwo(); //12  both arguments are pre-set already

// let multiplyByThree = multiply.bind(this,2); //this=f multiply
// // multiplyByThree()  //NaN 
// // multiplyByThree(3);    //6
// // multiplyByThree(5);    //10
// // multiplyByThree(25);    //50
// // multiplyByThree(3,5);   //6 (2 is a fixed as first argument and only 3 is taken as second argument and 5 is ignored)


// let multiplyByFour = multiply.bind(this ,4);  
// //  multiplyByFour(6);   //24

// let multiplyByFive = multiplyByTwo.bind(this ,4);
// // multiplyByFive(6);    //6*4=24

// let multiplyBySix = multiplyByFour.bind(this ,5);
// // multiplyBySix();   //NaN
// // multiplyBySix(7);   //4*7=28  (4 is first argument frommultiplyByThree 7 is taken as second argument and 5 is ignored)


// //Function Currying using Closure

// let mult = function(a){
//     return function(b){
//         console.log(a*b);   
//     }
// };

// let multByTwo = mult(2)   //2 is fixed to a
// // multByTwo(3);  //6
// // multByTwo(5);   //10
// // multByTwo(7);   //14

// let multByThree = mult(3)   //3 is fixed to a
// // multByThree(5)


////////////////////////////////////////////////

// const buildMySandwich = (ingredient1) =>{
//     return (ingredient2) =>{
//         return(ingredient3) =>{
//             return `${ingredient1}, ${ingredient2}, ${ingredient3}`
//         }
//     }
// }

// const mySandwich = buildMySandwich('Bacon')('Lettuce')("Tomato");
// console.log(mySandwich);


//Refactoring above code

const buildMySandwich = ingredient1 => ingredient2 => ingredient3 => 
`${ingredient1}, ${ingredient2}, ${ingredient3}`;

const mySandwich= buildMySandwich('Bacon')('Lettuce')("Tomato");
console.log(mySandwich);

///////////////////////////////////////////////////////////

const multiply = (x,y) => x*y;

const curriedMultiply = x => y => x*y;

console.log(multiply(2,3));
console.log(curriedMultiply(2)); //y => x*y
console.log(curriedMultiply(2)(3));
console.log(curriedMultiply(2,3)); //y => x*y


//Partially applied functions are a common use of currying
//using closure
const timesTen = curriedMultiply(10)
console.log(timesTen);    //y => x*y
console.log(timesTen(8));


//////////////////////////////////////////////////

const addCustomer = fn => (...args) => {
console.log(`saving customer info...`);
return fn(...args);
}

const processOrder = fn => (...args) => {
    console.log(`saving customer info...`);
    return fn(...args);
    }
    









