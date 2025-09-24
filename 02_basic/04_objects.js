// singleton object declerarion 

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "ashesh";
tinderUser.isLogedin = false;

// console.log(tinderUser)

//declearing object inside a object.

const regularUser = {
    fullname:{
        userFullname: {
            fristname:"ashesh",
            lastname: "gupta"
        }
    }
}

// console.log(regularUser.fullname.userFullname.lastname);


const obj1 = {
    1:"a",
    2:"C"
}

const obj2 = {
    3:"c",
    4:"d"
}

//combining two arrays.
const obj3 = Object.assign(obj1,obj2)
// console.log(obj3)


//syntax use when value come with database.

const user = [
    {
        id:1
    },{
        id:2
    }
]

// console.log(user[0].id);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLogedin' ]
// console.log(Object.values(tinderUser));//[ '123abc', 'ashesh', false ]
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'ashesh' ], [ 'isLogedin', false ] ]


//---------------------------------------------------------

//destructuring.

const course = {
    courseName:"ja hindi",
    price:999,
    courseInstructor : "ashehs"
}

let {courseInstructor,price} = course;

console.log(price, courseInstructor);