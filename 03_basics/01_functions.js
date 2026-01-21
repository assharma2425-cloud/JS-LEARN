function myName(){
    console.log("A");
    console.log("m");
    console.log("A");
    console.log("n");
}
// myName()

// function sumNumber(number1 , number2){
//     console.log(number1 + number2);
// }

function sumNumber(number1 , number2){
    // let result = (number1 + number2)
    // return result
    return number1 + number2
}
const result = sumNumber(44,55)
// console.log(result);


function loginUser(username="aman"){
    if(!username){
        console.log("Please enter username");
        return
    }
    else{
    return `${username} you logged in`
    }
}
// console.log(loginUser(""))


// function

function calculateUser(...num1){
    return num1                                     // its a rest operator or spred operator
}
// console.log(calculateUser(200, 300, 400));


const users = {
    username : "Aman",
    price : 199
}

function userLogin(anyobject){
    return `username is ${anyobject.username} and the price is ${anyobject.price}`
}
// console.log(userLogin(users));


// array

const newArr = [200, 300, 500, 400]

function userArr(anyArr){
    return anyArr[2]
}
console.log(userArr(newArr))