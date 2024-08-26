// async function promiseFunction() {
//     return "Hello"
// }
// console.log(promiseFunction());

let newpromise = new Promise(function(res, rej){    
    setTimeout(()=>{
        res("Promise resolved succesfully");
    },4000)
});

let newpromise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise2 resolved succesfully");
    },5000)
});

async function executePromise() {
    console.log("Hello");
    const val1 = await newpromise;
    console.log("val1-=", val1);
    const val2 = await newpromise2;
    console.log("val2-=", val2);
    console.log("I'm Awesome from async function");
}

executePromise();


