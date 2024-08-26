let myPromise = new Promise(function(resolve,reject){
    let a = 5;
    let b = 4;
    if (a==b) {
        resolve("Resolved the promise")
    } else {
        reject("Promise is rejected");        
    }
})

// console.log(myPromise);
myPromise.then(function(result){
    console.log(result);
})

myPromise.catch(function(err){
    console.log(err);
})