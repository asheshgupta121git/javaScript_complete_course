//for of loop
//--------this loops are more array specifics.
// ["","",""]
// [{},{},{}]

const arrays = [1,2,3,4,5]

for (const elem of arrays) {
    // console.log(elem);
}

// same will work for the string also. 

let str = "ASHESH"

for (const elem of str) {
    // console.log(elem);
}

//Maps

const map = new Map();
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('USA',"United States Of America")
map.set('FR',"France");

// console.log(map);

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}


//using for of loop with object. 

const myObject = {
    name: "ashesh",
    age:23
}

// this will not work because object is not iteratable like this
// for (const [key, value] of myObject) {
//     console.log(key, value); // this will not work
// }