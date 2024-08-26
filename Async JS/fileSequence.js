// const { error } = require("console");
let fs = require("fs");

// console.log("fs-=",fs)

let promiseReadFile1 = fs.promises.readFile('file1.txt');

function cb1(data) {
    console.log("data"+data);
    let promiseReadFile2 = fs.promises.readFile('file2.txt');
    return promiseReadFile2;
}

function cb2(data) {
    console.log("data"+data);
    let promiseReadFile3 = fs.promises.readFile('file3.txt');
    return promiseReadFile3;
}

function cb3(data) {
    console.log("data"+ data);    
}

function handleError(err) { 
    console.log(err)
}

promiseReadFile1.then(cb1).then(cb2).then(cb3).catch(handleError);

console.log("After");