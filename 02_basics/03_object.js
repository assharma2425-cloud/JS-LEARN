// const item = new Object(undefined);
// item.foo = 42;
// console.log(item);
const mySym = Symbol("key1")
const myObj = {
    name : "Aman",
    "full name": "Aman Sharma",
    [mySym] : "mykey1",
    email : "as@google.com"
}

// console.log(myObj["name"]);
// console.log(myObj["full name"]);
// console.log(typeof myObj[mySym]);

myObj.email = "ass@microsoft.com"
// Object.freeze(myObj)
myObj.email = "assss.com"
// console.log(myObj);

myObj.gretting = function(){
    console.log("hello JS user");
}
myObj.grettingTwo = function(){
    console.log(`hello Mr. ${this.name}`);
    
}
console.log(myObj.gretting());
console.log(myObj.grettingTwo());

