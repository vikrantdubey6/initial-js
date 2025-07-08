// Primitive datatypes

// 7 types : String, Number, Boolean, Undefined, Null, Symbol, BigInt


var Num = 20
var Str = "Hello World"
var isloggedin = true
let myVar; 
let Temp = null
let mySymbol = Symbol("trying symbol")
let myBigInt = BigInt(1234567890123456789012345678901234567890n)




// Reference (NON PRIMITIVE DATATYPES)

// 4 types : Object, Array, Function, Date

const cars = ['dezire', 'swift', 'alto', 'baleno', 'vitara', 's-cross', 'ertiga', 'ciaz', 'brezza', 'ignis'];

let Obj = {
name: "Vikrant",
age: 22,
}

let myFunction = function() {
    console.log("this is the function")
}

let myDate = new Date();



console.log(typeof cars);
console.log(typeof Obj);
console.log(typeof myFunction);
console.log(myDate);
console.log(typeof myBigInt);


console.log(typeof Num);
console.log(typeof Str);