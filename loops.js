// loops are also known as iterators
//for
// for (let index = 1; index <= 10; index++)
//      {
//     const element = index;

// //     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     // const element = i;
//     // console.log(`this is outer loop  ${i}`);
    
//     for (let j = 1; j <=10; j++) {
//         // const element = j;
//     // console.log(`this is inner loop ${j}`);
//     // console.log(`${i} x ${j} = ${i*j}`); //table till 10
//     }
// }

let Heros = ["flash", "batman", "superman", "shaktiman"]

// console.log(Heros.length);
// for (let index = 0; index < Heros.length; index++) {
//     const element = Heros[index];
    // console.log(element);  }

// break and continue

// for (let index = 1; index <= 20; index++) {
//    if (index<=15) {
//     //    console.log(index)
//     }
//     else break;
// }


// ++++++++++++++++++++++++++ WHILE LOOP +++++++++++++++++++++++++++++

// let i=0
// while(i<= 10) {

//     // console.log(i)
//     // i = i + 1
    
// }


let cars = ["volvo", "swift", "mercedes", "supra", "mustang"]

let c = 1
while (c <= cars.length) {
    // console.log(`car number ${c} car is ${cars[c]}`);
    c++ 
}

// +++++++ do-while +++++++++++
let score = 1
do {
    // console.log(`score is ${score}`);
    score++

} while (score <= 10);

// ++++++++++ for of +++++++++++++++++

const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    // console.log(num);
}

// +++++++++++ Map +++++++++++++

const map = new Map()   //store key-value pair with unique value it is not iterable 

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr',"France")
map.set('NL', "Netherland")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}




const myobject = {
    'game1' : 'GTA3',
    'game2' : 'Spiderman',
    'game3' : 'Valorant'
}

// for (const [key, value] of myobject) {
//     // console.log(key, ':-', value);
//     }  
//     //object are not iterable using forof loop

 

// forin loop
for (const key in myobject) {
    
    // console.log(myobject[key]);   
}

const lang = ["js", "rb", "py", "java", "cpp"]

for (const key in lang) {
    // console.log(key, "and value are", lang[key]);
}
 
// +++++++++++ for-each +++++++++++

lang.forEach( function (val){
    // console.log(val);
})

lang.forEach((item) => {
    // console.log(item)
})

function printme(item) {
    console.log(item);
}

// lang.forEach(printme)
// car.forEach(printme)

lang.forEach((item, index, arr)=>{
    // console.log((item, index, arr));
    
} )

const mycoding = [
    {
        langName : "javascript",
        extension : ".js"
    },
     {
        langName : "python",
        extension : ".py"
    }, 
    {
        langName : "java",
        extension : ".java"
    },

]

mycoding.forEach((item)=> {
    console.log(item.langName, item.extension)
}
)