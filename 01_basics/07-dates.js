//  Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());

// type of data 
// console.log(typeof myDate);


//spefic date.
// let myCustomDate = new Date(2025,11,19); //Fri Nov 14 2025
// let myCustomDate = new Date("11-14-2025"); //Fri Nov 14 2025
// console.log(myCustomDate.toDateString());


//timestamp 

// let timestamp = Date.now();

// console.log(timestamp);
// console.log(myCustomDate.getTime());

// console.log(Math.floor(timestamp/1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"narrow"
})



console.log(newDate)