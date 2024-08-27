// const input = "George Raymond Richard Martin";
// output = GRRM

// const input = "George Raymond Richard Martin";

// let output = input.split(" ").map(function(ele){
//     return ele[0]
// }).join("");

// console.log(output);

//   Q2. Given an array of objects users, print user of particular age along with their frequency.

//   const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26}, 
//     {firstName:"Sachin",lastName:"Tendulkar",age:50}, 
//     {firstName:"Sachin",lastName:"Tendulkar",age:50},
//   ];
//   let ageObj = users.reduce(function(acc,currVal){
//     if (acc[currVal.age]) {
//         acc[currVal.age]++;
//     } else {
//         acc[currVal.age] = 1;
//     }
//     return acc;
//   },{})

//   console.log(ageObj);

// let students =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];

// let res = students.filter(function(student){
//     if (student.marks>60) {
//         return student.name        
//     }
// })


// console.log(res)

// Q1. Given an array of objects users, print fullname.


// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ];

//   let data = users.map(function(user){
//     return user.firstName +" "+ user.lastName;
//   })

//   console.log(data);

// // Q3.Print object having marks greater than 60 and rollNumber greater than 15.

let students =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
];

let res = students.filter(function(student){
    return student.marks>60 && student.rollNumber>=15
})
console.log(res)