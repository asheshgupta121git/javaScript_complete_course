const language ={
    js : "javaScript",
    cpp :"c++",
    rb :"ruby"
}

//to iterate in object we have for in loop.

for (const key in language) {
    // console.log(key);
    /*
        js
        cpp
        rb
    */
}

for (const key in language) {    
    const element = language[key];
    // console.log(`${key} shortcut is for ${element}`);
    /*
    js shortcut is for javaScript
    cpp shortcut is for c++
    rb shortcut is for ruby
    */
}


//will this work for arraus also lets check.

let arr = ["apple", "mango", "banana", "lichi"];

for (const key in arr) {    
    const element = arr[key];
    // console.log(`key = ${key} and value is ${element}`);
}

// will this also work for map lets check

// let map = new Map();
// map.set('IN',"India");
// map.set('UK',"United Kingdom");
// map.set('USA',"United States Of America");
// map.set('FR',"France");

// // console.log(map);
// for (const key in map) {    
//     console.log(key);    // here this will not work because map is not iterable.
// }
// // as conclusion maps are not iterable we cant use loops over it.



