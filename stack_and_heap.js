// there are two datatypes in javascript
// 1. Primitive datatypes (stored in stack memory)  
// 2. (Non Primitive) Reference datatypes (stored in heap memory)

// Primitive datatypes are immutable, meaning they cannot be changed after creation. It gives copy of the value when assigned to a new variable. changes in one variable will not reflect in the original variable.

// Reference datatypes are mutable, meaning they can be changed after creation. It gives reference of the value when assigned to a new variable. changes in one variable will reflect in the original variable.


let username = "Vikrant";
let owner = username
owner = "Vikrant Dubey";
// console.log(owner); 
// console.log(username);

// owner has copy of the value of username, so when we change owner, it does not affect username.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++



let user1 = {
    email:'vikrantnda1@gmail.com',
    age:22,
    upi: "xyz@upi"
}

let user2 = user1;

user2.email = "vikrant@yahoo.com"
user2.age = 16


console.log(user1.email);
console.log(user1.age);

console.log(user2.email) 
console.log(user2.age);

// In this case, user2 has a reference to the user1 object. So when we change user2, it also affects user1 because both variables point to the same object in memory.
