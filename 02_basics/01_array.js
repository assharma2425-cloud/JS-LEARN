const arr = [0, 1, 2, 3, 4, 5]
const myHeros = ['shaktiman', 'Krrish', 'batman', 'superman']
const myarr = new Array( 1, 2, 3)
// console.log(myarr[2]);

// Array Method

arr.push(6)
arr.pop()

arr.unshift(8)
arr.shift()

// console.log(arr.includes(7));
// console.log(arr.indexOf(4));

const newArr = arr.join();
// console.log(arr);

// console.log(newArr);
// console.log(typeof newArr);


// Slice or Splice
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
let newfruits = fruits.slice(2,4)   // Slice are work like slice(start, end) here, start=kaha se and end=kaha thak (end include nhi hota)
console.log(fruits);
console.log(newfruits);

let heros = ['superman', 'batman', 'flash', 'aquaman']
let newheros = heros.splice(1,2) // Splice are work like splice(start, deletecount) here, start= kaha se and deletecount= kitne delete karne h 
console.log(newheros);
console.log(heros);
