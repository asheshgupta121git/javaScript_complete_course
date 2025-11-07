function multiple5(num){
    // this.num = num 
    return num*5
}


multiple5.power = 2

// console.log(multiple5(5))
// console.log(multiple5.power)
// console.log(multiple5.prototype)


function createUser(user, score){
    this.user = user
    this.score = score
}

// creating more meethods using prototype

createUser.prototype.increment = function(){
    return this.score+1  //increasing value by 1
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}


const chai = new createUser('chai', 25)
const tea = new  createUser('tea', 250)

chai.printMe()
tea.printMe()
console.log(chai.increment())
// console.log(createUser.prototype)


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

