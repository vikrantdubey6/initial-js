//array

const MyArr = [30, 22, 53, 40, 15]

// console.log(MyArr[0]); 

const Heroes = ['Ironman', 'Hulk', 'Thor', 'Captain America', 'Black Widow']

const myArr2 = new Array(53, 45,21,65) 

// console.log(myArr2); 

// console.log(myArr2.length); 

myArr2.push(100); 
// console.log(myArr2.length); 

myArr2.pop();
// console.log(myArr2.length);

myArr2.unshift(20); 
// console.log(myArr2)
//adds an element to the beginning of the array

myArr2.shift(); 
// console.log(myArr2)
// removes the first element from the array

// console.log(myArr2.includes(21));
// console.log(myArr2.indexOf(21));


// Slice and Splice

console.log("Original =>", MyArr)

const Arrslice = MyArr.slice(1, 3);
console.log(Arrslice);
console.log("A => ", MyArr);

const Arrsplice = MyArr.splice(1, 3);
console.log(Arrsplice);
console.log("B => ", MyArr);
