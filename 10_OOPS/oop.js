const user = {
    name : "ashesh",
    loginCount: 8,
    signedCount: true,

    getuserDetails: function(){
        console.log("user detailes")
    }
}


// console.log(object);

//contructors
function users(username, loginCount, isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    //methods defined also
    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }

    return this;//if we dont define this is will be automatically defined.
}

//now what happen with this we declear it 
// s1- new obj created 
// s2 - construction function call because of new keyword 
// s3 - this keyword arguments injected in this 
// s4 - we got our value.


const user1 = new users('ashesh', 12, true);
const user2 = new users('manav', 22, true);

// console.log(user1);
console.log(user2);
console.log(user2.constructor());

console.log(user1 instanceof users);
