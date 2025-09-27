//for loop

for (let index = 1; index <= 10; index++) {
    const element = index;
    // console.log(element);
}


//loops inside loops
for (let index = 1; index <= 10; index++) {
    // console.log(`this is outter loops ${index}`);
    for (let j = 1; j <= 10; j++) {
        const element = j;
        // console.log(`this is inner loop ${j}`);    
    }   
}

//table form 1 to 10.

for (let index = 1; index <= 10; index++) {
    // console.log(`table of  ${index}`)
    for (let j = 1; j <= 10; j++) {
        const element = j;
        // console.log(`${index} * ${j} = ${index*j}`);    
    }   
}


//with arrays
let array = ["jam", "ram", "raj", "jay", "ray"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);   
}

//---keywords in arrays

//break and continue

for(let i =1;i<=10;i++){
    //break
    if(i == 5){
        // console.log(`detected 5`);
        break;
    }
    // console.log(`value of i is ${i}`);
}

for(let i =1;i<=10;i++){
    //continue
    if(i == 5){
        console.log(`detected 3`);
        continue;
    }
    console.log(`value of i is ${i}`);
}