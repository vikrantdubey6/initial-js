const Marvel_heros = ['Ironman', 'Hulk', 'Thor',]

const Dc_heros = ['Batman', 'Superman', 'Wonder']

// Marvel_heros.push(Dc_heros)
// console.log(Marvel_heros);

const all_heros = Marvel_heros.concat(Dc_heros)
// console.log(all_heros);


// spread operator
const all_heros2 = [...Marvel_heros, ...Dc_heros]
// console.log(all_heros2);
 
const Another_array = [1,2,3,4,[1,2,3],6,7,[1,2,[4,5]]]

const flatnned_array = Another_array.flat(Infinity)
// console.log(flatnned_array);

// console.log(Array.isArray("Vikrant"));
// console.log(Array.from("Vikrant"));

// console.log(Array.from({name: "Vikrant", age: 25})); 

const score1 = 300
const score2 = 200
const score3 = 100
console.log(Array.of(score1, score2, score3));
