//arrwo functions and this keyword.

const user = {
    username:  "ashesh",
    price :999,

    welcomeNessage:  function(){
        console.log(`${this.username} welcome to website`);
        // console.log(this);
    }
}

// user.welcomeNessage();
// user.username = "anurag";
// user.welcomeNessage();

// console.log(this); // in node enviroment this refer to empty object.


// function chai(){
//     let name = "ashesh";
//     console.log(this.name); // this will give undefied
// }

// chai()


// const chai2 = function (){
//     let username = "ashesh"
//     console.log(this); //here it will give manyvalue
//     console.log(this.username); // this will also give undefined.
// }
// chai2();

//arrow function

// const chai = () =>{
//     let username = "ahsesh";
//     console.log(this); // this will give empty object
//     console.log(this.username); // here it will give undefined
// }

// chai();


//pure discussion on arrow function  

//expelicit return in arrow function 

// const addTwo = (a,b)=> {
//     return a + b ;
// }

//implecite return in arrow function

// const addTwo = (a,b) => a+b;

// const addTwo = (a,b) => (a+b);

//object return in arrow function
const addTwo = (a,b) => ({username: "ashesh"});

// console.log(addTwo(3,4));

