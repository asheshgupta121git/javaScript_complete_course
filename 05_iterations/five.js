//for each loop.

const coding = ["js", "java", "c", "python", "cpp"];

let newval = coding.forEach(function(val){
    // console.log(val);
});

//can we create a seprate function and pass it to the for each yes.
function print(val){
    console.log(val);
}

// coding.forEach(print); // here we have to give the function definitoion not the functionn calloing. 

// for each not only have value paremeter it have index and array list parameter also.


coding.forEach((item, index, array)=>{
    // console.log(item, index, array);
})

/**
 output-------
    js 0 [ 'js', 'java', 'c', 'python', 'cpp' ]
    java 1 [ 'js', 'java', 'c', 'python', 'cpp' ]
    c 2 [ 'js', 'java', 'c', 'python', 'cpp' ]
    python 3 [ 'js', 'java', 'c', 'python', 'cpp' ]
    cpp 4 [ 'js', 'java', 'c', 'python', 'cpp' ]
 */


    // for with array object.

    let stu = [
        {
            id:1,
            age:23
        }, {
            id:2,
            age:24
        }, {
            id:3,
            age:25
        },
    ]

    stu.forEach((item)=>{
        console.log(item.id);
        console.log(item.age);
    })
