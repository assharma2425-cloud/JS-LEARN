// DATE

let myDate = new Date();
console.log(myDate.toString()); // Output: Thu Jan 15 2026 08:08:08 GMT+0000 (Coordinated Universal Time)
console.log((myDate.toDateString())); // Output: Thu Jan 15 2026
console.log(myDate.toISOString()); // Output: 2026-01-15T08:09:45.134Z
console.log(myDate.toJSON()); // Output: 2026-01-15T08:09:45.134Z
console.log((myDate.toLocaleDateString())); // Output: 1/15/2026
console.log(myDate.toLocaleString()); // Output: 1/15/2026, 8:09:45 AM

// console.log((typeof(myDate))); // Output: Object


// let myCreateDate = new Date(2026, 6, 21)
let myCreateDate = new Date(2026, 6, 21, 05, 30)

console.log(myCreateDate.toString());
console.log(myCreateDate.toLocaleString());
