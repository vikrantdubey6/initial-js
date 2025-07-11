//objects
// constructor method or singleton

// object literals

const mySym = Symbol("FirstSymbol");
// console.log(mySym); // Symbol(FirstSymbol)

const JsUser ={
    name: "Vikrant",
    [mySym]: "This is a symbol",
    age: 22,
    Email:"Vikrant@gmail.com",
    location: "delhi",
    lastLoginDays: ["Monday", "Wednesday"]
    // "full Name": "Vikrant Dubey", (could not be accessed with dot method)
}

// console.log(JsUser.location);  (old and disapproved way)

// console.log(JsUser["location"]); // new way to access object properties
// console.log(JsUser[mySym])

// Object.freeze(JsUser); 
// this will make the object immutable, no changes can be made to it

JsUser.warning = function() {
    console.log("this is a warning message")
}
console.log(JsUser.warning()); 

JsUser.Greet = function() {
    console.log(`Hi ${this.name}, welcome to the world of JavaScript`);
}
console.log(JsUser.Greet());
