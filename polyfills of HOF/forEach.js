const names = ["Mark","John","Biden"];

const nums = [1,2,3,4,5,6]

// names.forEach(function(name){
//     console.log("name->", name);
// })

Array.prototype.myForeach = function(callback){
    for (let index = 0; index < this.length; index++) {
        callback(this[index]);
    }
}

nums.myForeach(function(num){
    console.log(num);
})