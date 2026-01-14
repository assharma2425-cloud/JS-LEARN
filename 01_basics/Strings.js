const userName = "Aman"
const userLastname = "Sharma"
const repoCount = 20

// console.log(userName + userLastname);
// console.log(`My First name is ${userName.toUpperCase()} and Last name is ${userLastname} and i make lam sam ${repoCount} Repository `);

const gameId = new String('AmanSharma')    // new way of using strinf in js

// console.log(gameId[0]);
// console.log(gameId.__proto__);
// console.log(gameId.charAt(3));
// console.log(gameId.toLowerCase());
// console.log(gameId.toUpperCase());
// console.log(gameId.anchor(3));

// //////A function which returns the last character of a given string
// function returnLast(str) {
//   return str.at(-1);
// }

// let invoiceRef = "my-invoice01";

// console.log(returnLast(invoiceRef)); // '1'

// invoiceRef = "my-invoice02";

// console.log(returnLast(invoiceRef)); // '2'

// Try It .at() function in string
const myString = "The quick brown fox jumps over the lazy dog."

let index = 5
// console.log(`give me index no. ${index} and print the word ${myString.at(index)}`); // at() are used in both +ve and -ve value

index = 4
// console.log(`give me index no. ${index} and print the word ${myString.charAt(index)}`);  // charAt() are not used in negative value (-1, -2)

index = 6
// console.log(`character is ${myString.charCodeAt(index)} is equal to ${myString.charAt(index)}`); // charCodeAt() are used for ASCII value present
// console.log('i'.charCodeAt(0));
// console.log(myString.charAt(5));


const myName = "😊"
// console.log(myName.charCodeAt(0));  // this are not work with emoji 
// both are used for ASCII value but ^
// console.log(myName.codePointAt(0));  // and this are used for full code value and also support emoji and symbol

// concat() function
const str1 = "hello"
const str2 = "world"

// console.log(str1.concat(" " + str2));
// console.log(str2.concat(", " + str1));

// endwith() function
const newStr = " this is my dog?"
console.log(newStr.endsWith("dog?"));
 
// includes() function
const sentence = "this is cat..!"
console.log(sentence.includes(".."));

// indexOf() function
const para = " this is cute dog and cat"
console.log(para.indexOf("dog"));

// match() function
const line = "This is Very important for us. It is rare."
let regex = /[A-Z]/g   // o/p is 'T' 'V' 'I'
regex = /[a-f]/gi     // a-f thak jitne bhi uper ya lower case wale word print ho jaye gye
const found = line.match(regex)
console.log(found);

// matchAll() function are similar to match() but it produce some extra information 
const text = "cat dog cat";
const reggex = /cat/g;

const result = text.matchAll(reggex);  
console.log([...result]); // output 
// [
//   ["cat", index: 0, input: "cat dog cat"],
//   ["cat", index: 8, input: "cat dog cat"]
// ]

