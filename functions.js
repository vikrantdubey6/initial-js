function sayMyname(){

console.log("my name is vikrant");
console.log("what is your name");
}

// sayMyname() 

function addition(num1, num2) //parameters
{
    let result = num1+num2
    return result
}

const a = addition(6,3) //arguments

// console.log("result:",a);

function loginUserMessage(username = "mukesh"){
    if(!username){
        console.log("Enter you name first");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Vikrant"));
