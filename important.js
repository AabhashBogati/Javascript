//spread

arr = [2, 6, 7];
function avg(a, b, c){
    return a+b+c/3
}

let a = avg(...arr);
console.log(a);

// let a = [4, 5, ...arr, 4]
// console.log(a)

//applying the values of one object into another and replacing one value with another
let obj1 = {
    name1: "Aabhash",
    age: 21,
    favLang: "Java"
}
let obj2 = {...obj1, favLang:"Python"}
console.log(obj1)
console.log(obj2)

// let name1 = obj1.name;
// let age = obj1.age;
// let favLang = obj1.favLang;
//the above code can be written as the following
let {name1, age, favLang} = obj1;

console.log(name1, age, favLang)
