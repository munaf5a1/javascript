const obj = {
    name:"Abdul",
    occupation:"Sr.Software Engineer"
}

function sayHello(age,lastname){
    return `${this.name} ${this.occupation} ${age} ${lastname}`;
}

//Call

let ans = sayHello.call(obj,26,"Munaf");
let ans2 = sayHello.apply(obj,[26,"Munaf"])
// console.log(ans)
// console.log(ans2)

let ans3 = sayHello.bind(obj)
let binded = ans3(26,"Munaf")
console.log(binded)
