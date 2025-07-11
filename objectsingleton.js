//const tinderUser = new Object() singleton object
const tinderUser = {
    id : "xyz123",
    username: "Sujit",
    Location: "Lucknow"
}
// console.log(tinderUser.id);
// console.log(tinderUser.username);
// console.log(tinderUser.Location);

const regularuser ={
    email: "vikrant@gmail.com",
    Fullname: {
        UserFullname:{
            firstname: "vikrant",
            lastname: "Dubey"
        }
    }
}

// console.log(regularuser.Fullname.UserFullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        email:"vikrant@gmail.com",
        id: 1234
    },
    {
        name:"Vikrant",
        OS: "Android"
    }
]

console.log(users[0].email);
console.log(Object.keys(regularuser));
console.log(Object.keys(tinderUser));

  

