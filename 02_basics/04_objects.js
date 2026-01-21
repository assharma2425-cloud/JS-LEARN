const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Aman"
// console.log(tinderUser);
// console.log(tinderUser.name);


const dailyUser = {
    email : "as@google.com",
    fullname : {
        userFullname : {
            firstName : "Aman",
            lastName : "Sharma"
        }
    }
}

// console.log(dailyUser.email);

const obj1 = { 1: "a" , 2: "b" }
const obj2 = {3: "c" , 4: "d"}

// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
        id : 1,
        email : "google.com"
    },
    {
        id : 1,
        email : "google.com"
    },
    {
        id : 1,
        email : "google.com"
    },
]

users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('fullname'));


const course = {
    courseName : "JS",
    price : 999,
    courseInstractor : "Aman Sharma"
}

const {courseInstractor : instractor} = course
console.log(instractor);


// {
//     "name" : "Aman"
//     "price" : "free"
// }

// Random User Me famous for api 
// and check any JSON formater