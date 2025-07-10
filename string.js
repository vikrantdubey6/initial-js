

// Using positive indices: extracts from index 4 to
const NumProjects = 5;

/*
console.log(name + NumProjects + " projects completed.");  
***not a good way to do it.***
*/

// String interpolation (``)
// Template literals (backticks) allow for multi-line strings and string interpolation.

console.log(`Hi there, my name is ${name} and I have completed ${NumProjects} projects.`);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// another way to decalare strings is using the New keyword by creating a new String object.

const Game = new String("Valorant");


// here String saves the values in key pair format inside the object. String is saved in heap memory.

/*Examples of String methods: 
anchor: anchor()
at: at()
big: big()
blink: blink()
bold: bold()
charAt: charAt()
charCodeAt: charCodeAt()
codePointAt: codePointAt()
concat: concat()
constructor: String()
endsWith: endsWith()
fixed: fixed()
fontcolor: fontcolor()
fontsize: fontsize()
includes: includes()
indexOf: indexOf()
isWellFormed: isWellFormed()
italics: italics()
lastIndexOf: lastIndexOf()
length: 0
link: link()
localeCompare: localeCompare()
match: match()
matchAll: matchAll()
normalize: normalize()
padEnd: padEnd()
padStart: padStart()
repeat: repeat()
replace: replace()
replaceAll: replaceAll()
search: search()
slice: slice()
small: small()
split: split()
startsWith: startsWith()
strike: strike()
sub: sub()
substr: substr()
substring: substring()
sup: sup()
toLocaleLowerCase: toLocaleLowerCase()
toLocaleUpperCase: toLocaleUpperCase()
toLowerCase: toLowerCase()
toString: toString()
toUpperCase: toUpperCase()
toWellFormed: toWellFormed()
trim: trim()
trimEnd: trimEnd()
trimLeft: trimStart()
trimRight: trimEnd()
trimStart: trimStart()
valueOf: valueOf()
Symbol(Symbol.iterator): [Symbol.iterator]()
*/


console.log(Game[4]);

console.log(Game.length); 

console.log(Game.toUpperCase()); 
console.log(Game.toLowerCase());
console.log(Game.charAt(1));

const xyz = Game.substring(0, 4);
console.log(xyz);


const xy = Game.slice(-8,-1);  
console.log(xy);

//  slice extracts a section of a string and returns it as a new string, without modifying the original string. It can take negative indices to count from the end of the string. when we use negative indices, it starts counting from the end of the string. it does not include the end index in the result. 

const str = "JavaScript";

// Using positive indices: extracts from index 4 to 10 (not including 10)
console.log(str.slice(4, 10)); 
// Using negative indices: extracts from index -6 to -1 (not including -1)
console.log(str.slice(-6, -1)); 

// Mixing positive and negative: from index 2 to -3 (not including -3)
console.log(str.slice(2, -3)); 



// const newstring1 = "     trying to trim this string     ";
console.log(newstring1);
console.log(newstring1.trim()); 

const url = "https://unplagify.com/plagirsm%20checker"

// url.replace("%20", "-");

console.log(url.replace("%20", "_"));

console.log(url.includes("_"));