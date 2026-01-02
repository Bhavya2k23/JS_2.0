// 1. Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol(For making value Unique), BigInt

//Number
const score = 100    // Not defined Tpes in this (Number/Boolean etc)
const score2 = 100.3    // Not defined Tpes in this (Number/Boolean etc)

// Boolean
const isLoogedIn = false
// Null
const outsideTemp = null
// Undefined
let userEmail;

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// BigInt
const bigNumber = 2432454323121243n





// 2. Reference (Non Primitive)

// Array, Objects, Functions

//Array
const heroes = ["Thor", "IronMan","Hulk", "CaptainAmerica"]; 

//Object
let myObj = {
    name: "Zoro",
    age: 21,

}

//Function
const myFunction = function(){
    console.log("Hello Zoro");
}

console.log(typeof score2);  //typeof Fuction to know about any DataType



// Typeof Function
console.log("Typeof Function")
console.log(typeof score);
console.log(typeof score2);
console.log(typeof isLoogedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);