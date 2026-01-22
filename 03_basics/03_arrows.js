const user = {
    username  : "Aman",
    price  : 199,

    welcomeMsg : function(){
        // console.log(`${this.username} , new user`);
        // console.log(this);
        
    }
}
// user.welcomeMsg()
// user.username = "Sharma"
// user.welcomeMsg()
// // console.log(this);


// function cup(){
//     let name = "sharma"
//     console.log(this.name);   // function ke ander variables ka use this() function ke sath nhi kar sakte....!
// }
// cup()

// const chai = () => {
//     let username = "Aman"
//     console.log(this);  // similar arrow function ke sath bhi variables ka use nhi kar sakte
// }
// chai()

const newUser = (num1,num2) => {
   return num1 + num2
}
console.log(newUser(3,8));
