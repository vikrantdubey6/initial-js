let mydate = new Date()

// console.log(mydate);

// console.log(mydate.toString()); // Converts the date to a string representation

// console.log(mydate.toDateString()); // Returns the date portion of the Date object as a string

// console.log(mydate.toTimeString()); // Returns the time portion of the Date object as a string

// console.log(mydate.toLocaleString()); // Returns the date and time in a format appropriate for the user's locale

// console.log(mydate.toISOString()); // Returns the date in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ

// console.log(mydate.toJSON()); // Returns the date as a JSON string

// console.log(mydate.getTime()); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

// console.log(mydate.getFullYear()); // Returns the year of the date

// console.log(mydate.getMonth()); // Returns the month of the date (0-11, where 0 is January and 11 is December)

// console.log(mydate.getDate()); // Returns the day of the month (1-31)

// console.log(typeof mydate); // Returns the day of the week (0-6, where 0 is Sunday and 6 is Saturday)


let mycreatedDate = new Date(2025, 6, 11) 
// let mycreatedDate = new Date(2025, 6, 11, 4, 28) 

// Month is zero-based (0 = January, 1 = February, ..., 9 = October)

// console.log(mycreatedDate);
// console.log(mycreatedDate.toDateString());
// console.log(mycreatedDate.toLocaleString());


let mytimestamp = Date.now(); 

console.log(mytimestamp); 
console.log(mydate.getTime()); 
