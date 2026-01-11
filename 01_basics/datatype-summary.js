// Primitive

// 7 datatype = String, Boolean, Null, Undefined, Number, BigInt, Symbol
/*
const id = Symbol(123)
const anotherId = Symbol(123)

console.log(id === anotherId);


let score = 32456789876543n
console.log(typeof score); */


// Reference (Non-Primitive)

// Array, Objects, Function

const arr = ["Krish", "Shaktiman", "Mogli"] // Array

let obj = {
    name: "Aman",
    age: 20,                            // objects
}                             

const myFunction = function(){
    console.log("Hello World");                     // Function
}

// Primitive Datatype
// String = String
// Boolean = Boolean
// null = Object                   // Typeof
// Number= Number
// BigInt = BigInt
// Symbol = Symbol
// undefined = undefined

// Non-Primitive Datatype

// Array = Object
// function = Object               // Type of
// Object = Object


////////////////////////////////////////////// STACK & HEAP MEMORY \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// STACK (Primitive Datatype)  => Pass by Value
// HEAP (Non-Primitiev Datatype) => Pass by Refernece


let userName = "Aman Sharma"
let anothername = userName
anothername = "Rishi"                                
console.log(userName);  // Aman Sharma
console.log(anothername); // Rishi
// for example : suppose you have a photocopy [ original are not changed, copy are changed  ]

let userOne ={
    email : "as@mail.com",
    upi  : "sbi@ybl"
}


let userTwo = userOne  // Same reference copy hua 
userTwo.email = "ss@mail.com"

console.log(userOne.email); // ss@mail.com
console.log(userTwo.email); // ss@mail.com 
// because it pick the refernece of userOne and use then both are changed

// for example : ek common cupboard [sab log same saman use kar rahe hai]
