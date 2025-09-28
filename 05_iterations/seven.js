const mynums = [1,2,3,4,5,6,7,8,9,10];

let newnums = mynums.map((item)=> {return item + 10});
// console.log(newnums);

//chainning.

// array.map().map().filter()  --> something like this.

let newnums2 = mynums
                    .map((num)=> num*10)
                    .map((num)=> num + 1)
                    .filter((num)=> num >= 50);

// console.log(newnums2);

//---------------------
//reduce function.

const total =  mynums.reduce((acc, currVal) => {
    // console.log(`acc is ${acc} and current value is ${currVal}`);
    return acc + currVal;
},0)

// console.log(total);

const shopingCart = [
    {
        item : "js course",
        price: 299,
    },{
        item : "python course",
        price: 999,
    },{
        item : "mobile dev course",
        price: 4999,
    },{
        item : "DS course",
        price : 20000
    }
]

// sum of all item pices.

let totalPrice = shopingCart.reduce((acc, course) => {
    console.log(`acc is ${acc} and couserPrice is ${course.price}`);
    return acc + course.price;
},0);
console.log(totalPrice);