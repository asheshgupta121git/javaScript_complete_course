/*
//if

in if condition true inner material of if will execute 
and if condition is false then it will not execute.
----------------------------
if(condition){
}
----------------------------

//else 
    in if condition is false then else execute
else{
    
    }

//else if

in case where if condition not executed so after that this else if condition will check if its condition is true then it will execute other wise the else condtion will be checked


if(condition){
 //statement
}else if(condition){
    //statement
}else{
   //statement 
    }
*/




let isLoggedIn = false;
let haveTempCard = true;

if(isLoggedIn){
    console.log(`user is logged in`)
}else if(haveTempCard){
    console.log(`have temperorary care also logged in `)
}
else{
    console.log(`user not logged in`)
}

//---------------------------------------------------------

//wwitch case

let condition = 31;

switch(condition){
    case 1:
        console.log('sunday')
        break;
    case 2:
        console.log('monday');
        break;
    case 3:
        console.log('tuesday');
        break;
    case 4:
        console.log('wednesday');
        break;
    default:
        console.log('enter the correct value ');
}


//till now we are working on the value of true and flase 


//truthy value and falsey values.

/*
//falsey values
    - false
    - 0
    - -ve0
    - BigInt 0n
    - null
    - undefined
    - Nan
    - "" //empty string

//except above all values all are truthy value
//some suprises
 - "0"
 - "fasle"
 - " "  //non empty string.
 - []
 - {}
 - function(){} //empty function is also truthy value
 - //nullish coalescing operator (??): null undefined

*/

const userEmail = " ";

if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}


//nullish coalescing operator (??): null undefined



