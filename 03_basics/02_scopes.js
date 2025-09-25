// var is global scoped
//let and const is bocked scope

//blocked scope in which only variable accessible in this curley braces{}

{
    let a = 20;
    const b = 23;
}

//this  vaiable are not acessible outside the curley braces.
// console.log(a);
// console.log(b);

//outside this curley braces is global scope. 



//normal function allow hoisting

// console.log(one(2));

function one(num){
    return num  + 1
}

//this is function expression that not allow function hoisting

console.log(two(3));

const two = function(num){
    return num +2
}

// console.log(two(3));
