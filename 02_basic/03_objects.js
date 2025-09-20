// singleton object --> made with constructor
// Object.create


//object literals

//taking a symbol and defining as key in object
const mySym = Symbol("mykey1");

const users = {
    name: "ashesh",
    "full name": "ashesh gupta",
    [mySym] : "key1",
    age: 23,
    location: "blr",
    email: "ashesh@meta.com",
    isLoggedIn: false,
    lastLogiedInDays:["Monday", "Friday"]
}

//ways to access
// console.log(users.email);
// console.log(typeof users.isLoggedIn)
// console.log(users[mySym]) //printing symbol
// console.log(users["full name"])
// 

// if we haveto update value

users.email = "ashesh@google.com"
// console.log(users)

// if we want to freeze our oject so no changes applied.

// Object.freeze(users)
// users.email = "ashesh@intellipatt.com"
// console.log(users)


//adding fuction as key 

users.greet = function (){
    console.log("hello ashesh");
}

console.log(users.greet());
