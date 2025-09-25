//Immediatelu Invoked Function Expression (IIFE);

(function chai(){
    console.log("DB connected");
})();



//syntax

/**
    (   function definition )(function calling);
 */

//to save the function form global scope polution we use IIFI.


//with arrow function
(()=>{
    console.log("DB connected 2");
})();


// if function expect argument.
//named iifi
((name)=>{
    console.log(`DB connected ${name}`)
})('ashesh')

