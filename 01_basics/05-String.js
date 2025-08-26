const name = "ashesh";
const repoCount = 50;

// console.log(name + repoCount);

//dont write in hte above way use modern way use string interpolation template literals.

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`)

//another way to declear string.

let gameName = new String("ashesh");
console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('es'));
// console.log(gameName.substring(1,4));
// 
// const anotherString = gameName.slice(-3);
// console.log(anotherString);

let url = 'https://www.google.com/';

console.log(url.replace('google','ashesh'));

console.log(url.split('.'));
