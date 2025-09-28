const coding = ["js", "java", "c", "python", "cpp"];

let values = coding.forEach((item)=>{
    // console.log(item);
    return item;
})

// console.log(values);// here basically it return undefined.

//note for each method never returns any value.

//-----------------------

let mynums = [1,2,3,4,5,6,7,8,9,10];
//filter chek every value on the basis of condition.

let res = mynums.filter((items)=>{
    return items >5
});

// console.log(res);

// return it explicetly.
let res2 = mynums.filter(item => item > 5);
// console.log(res2);

//book array object example 
const books = [
  {
    name: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960
  },
  {
    name: "1984",
    genre: "Dystopian Fiction",
    publish: 1949
  },
  {
    name: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813
  },
  {
    name: "The Great Gatsby",
    genre: "Romance",
    publish: 1925
  },
  {
    name: "Dune",
    genre: "Science Fiction",
    publish: 1965
  }
];


// const userBooks = books.filter((bk)=> bk.genre === 'Romance');
// const userBooks = books.filter((bk)=> bk.publish >= 1950);
const userBooks = books.filter((bk)=> bk.publish >= 1900 && bk.genre === 'Romance');

console.log(userBooks);