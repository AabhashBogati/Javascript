//Javascript Map

let a = [1, 2, 3, 4]
let a1 = a.map((value)=>{
    return value+1;
})

//console.log(a, a2)


//Javascript Filter

let a2 = a.filter((value)=>{
    return value > 6;
})
//console.log(a, a3)


//Javascript Reduce

let a3 = a.reduce((val1, val2)=>{
    return val1*val2;
})

console.log(a3)