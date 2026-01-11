// console.log(null > 0);
// console.log(null == 0);
// console.log(null === 0);
// console.log(null <= 0);

console.log(undefined === 0);
console.log(undefined > 0);

/* The reason is that in equlity check == and comparison < > >= <= work Differently
Comparison convert null to a number , treating as a 0 
That's why null >= 0 is true and null > 0 is false */


console.log("2" === 2);
