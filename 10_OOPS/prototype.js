// let myname = 'ashesh     '

// //we have to create method.
// console.log(myname.truelength)


myHeros = ["thor","ironman"]


let heroPower = {
    thor : "lightening",
    ironman : "money and brain",

    getThorPower : function(){
        console.log(`thor power is ${this.thor}`)
    }

}


// can we create a mentod like ashesh that is present for all objs like heroPower.ashesh() --> that says ashesh is js lerner

// yes we can create 
Object.prototype.ashesh = function(){
    console.log(`ashesh is js learner`)
}

heroPower.ashesh()

// if we give power to array 
Array.prototype.heyAshesh = function(){
    console.log(`hey ashesh this is js`)
}

myHeros.heyAshesh()
// heroPower.heyAshesh() // it will give error because heyAshesh power is limited to ashesh

//proto typal inheritance

//older type

const User = {
    name : "ashesh",
    email: "ashesh@google.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailabvle: true
}

  const TAsupport = {
    makeAssigment : "JS assigment",
    fullTime : true,
    __proto__: teachingSupport  // it will help to access the property of teching support 
  }

teacher.__proto__ = User; // it will help teacher to access property of user


console.log(TAsupport.isAvailabvle)
console.log(teacher.name)



//7:54:01 to continue