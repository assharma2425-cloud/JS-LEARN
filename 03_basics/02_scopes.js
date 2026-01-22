// var c = 400
let a = 300
if(true){
    let a = 20
    const b = 30
    // console.log("inner:", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Aman"

    function two(){
        const website = "as@mail.com"
        // console.log(username)
    }
    // console.log(website);
    two()
    
}
one()


if (true){
    const userName = "Aman"
    if(userName === "Aman"){
        const website = '  asss@mail.com'
        // console.log(userName + website);
    }
    // console.log(website)
}
// console.log(userName);



// ++++++++++++++++++++++++++ interseting +++++++++++++++++++++++=

function userOne(num){
    return num +1;
}
userOne()

const userTwo = function(num2){
    return num2 + 4;
}
userTwo()