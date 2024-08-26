// const { error } = require("console");
let fs = require("fs");

// console.log("fs-=",fs)

let promiseReadFile1 = fs.promises.readFile('file1.txt');
let promiseReadFile2 = fs.promises.readFile('file2.txt');
let promiseReadFile3 = fs.promises.readFile('file3.txt');

function readFile(data) {
    console.log("data"+ data)    
}

function handleError(err) {
    console.log("Erro"+err)
}

promiseReadFile1.then(readFile).catch(handleError);
promiseReadFile2.then(readFile).catch(handleError);
promiseReadFile3.then(readFile).catch(handleError);


console.log("After");