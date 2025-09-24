// function sum(a,b){
//     console.log(a+b);
// }

// sum(2,3);


//return in function
function sum(a,b){
    return a+b;
}
// console.log(sum(4,6));

function greet(username){
    // if its username empty then
    // if(username === undefined){
    if(!username){ // here undefined read as false.
        console.log("please return a user name");
        return;
    }
    return `${username} you logged in`;
}

// console.log(greet());

//default parameter.
function greet2(username = "ashesh"){
    // it will never come here because min to min its value is going to be ashesh but not undefined
    if(!username){ // here undefined read as fasle.
        console.log("please return a user name");
        return;
    }
    return `${username} you logged in`;
}
// console.log(greet2("rahul"));

//-------------------------------------------------------
//soping cart problem
//in this case if user keep adding items in the cart and you dont have idea how many argument you have to keep taking in function like fow now we only have to add 2 items but in tha shopping case we dont have any idea how many numbers i ahve to add.

// for that we ahve to use the rest operator concept.

function calculatCartPrice(...val){
    console.log(val);
}

// console.log(calculatCartPrice(1,2,3,4,5,6));

function calculatCartPrice2(val1, val2,...val){
    console.log(val1,val2,val);
}
// console.log(calculatCartPrice2(1,2,3,4,5,6));


//with object.

const user = {
    name : "ashesh",
    price:123
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);

//with  array 

let arr = [1,2,3,4,5];

function getSecondValue(array){
    console.log(array[1]);
}

// getSecondValue(arr);