// loops are also known as iterators
//for
for (let index = 1; index <= 10; index++)
     {
    const element = index;

//     console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // const element = i;
    // console.log(`this is outer loop  ${i}`);
    
    for (let j = 1; j <=10; j++) {
        // const element = j;
    // console.log(`this is inner loop ${j}`);
    // console.log(`${i} x ${j} = ${i*j}`); //table till 10
    }
}

let Heros = ["flash", "batman", "superman", "shaktiman"]

// console.log(Heros.length);
for (let index = 0; index < Heros.length; index++) {
    const element = Heros[index];
    // console.log(element);  
}

// break and continue

for (let index = 1; index <= 20; index++) {
   if (index<=15) {
    break;
       console.log(index)
   }
}