'use strict';

const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.bYear = birthYear;    
} 

const jonas = new Person('jonas', 1991);
const mathilda = new Person('mathilda', 1981);
const jack = new Person('jack', 1991);

console.log(Person.prototype);

Person.prototype.calcAge = function(){

    console.log(2037-this.bYear);   
}

Person.prototype.hey = function(){
    console.log('hey there');    
}
jonas.hey();
jonas.calcAge();
mathilda.calcAge();
console.log(Person.prototype);

Person.prototype.species = 'homo sapiens';
console.log(jonas.species);
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.log(jonas);
