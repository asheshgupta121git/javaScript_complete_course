const promise1 = new Promise((resolve , reject) => {
    //do an async task
    //DB calls
    //cryptography releated
    //network call
    setTimeout(() => {
        console.log("async task completed");
        resolve();
    },1000)
})

promise1.then(() => {
    console.log("Promise consumed");
});

new Promise((res,rej) => {
    setTimeout(() => {
        console.log("promise resloved")
        res();
    },1000)
}).then(() => {
    console.log("promised consumed 2");
})

const promise3 = new Promise((res, rej) => {
    setTimeout(()=>{
        res({name: "ashesh", age:23})    
    },1000)
})

promise3.then((user) => {
    console.log(user);
})

const promise4 = new Promise((res,rej) => {
    setTimeout(()=>{
        let error = false
        if(!error){
            res({username : "ashesh", pass : "123"})
        }else{
            rej('Error : something went wrong')
        }
    },1000)
})


promise4
.then((user)=>{
    console.log(user)
    return user.username;
})
.then((user) => {
    console.log(user)
})
.catch((error)=>{
    console.log(error);
})
.finally(() => {
    console.log("promise completed");
})

let promise5 = new Promise((res, rej)=> {
    setTimeout(()=>{
        let error = false
        if(!error){
            res({user: "ashesh" , emp: 7935})
        }else{
            rej('error : js went wrong');
        }
    },1000)
})


async function consemePromise5 (){
    try {
        let response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}

consemePromise5();



async function getAlldata() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);    
    } catch (error) {
        console.log(error)
    }

}

getAlldata();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     let data = response.json();
//     return data;
// })
// .then((data)=>{
//     console.log(data[0].address);
// })
// .catch((err)=>{
//     console.log(err);
// })