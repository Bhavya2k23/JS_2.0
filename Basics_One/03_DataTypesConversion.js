let score = "Zoro"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// undefined => NaN
// null => 0

let isloggedIn = 1

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0=> false
// "" => false
// "Zoro" => true

let someNumber = 67

let stringNumber = String(someNumber)
console.log(stringNumber)

// ****************** Operations ****************

let value = 3
let negValue = -value
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2= "Zoro"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


console.log((3 + 4) * 5 % (3 - 1));

console.log(true);
console.log(+true);
// console.log(true+);  // Note Useful
console.log(+"");


let num1, num2, num3
 
num1 = num2 = num3 = 2+2

console.log(num1, num2, num3);

let gameCounter = 100
gameCounter++; // Postfix
console.log(gameCounter);
gameCounter--;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
--gameCounter; // Prefix
console.log(gameCounter);



