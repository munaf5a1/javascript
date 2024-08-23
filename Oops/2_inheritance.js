Array.prototype.sum = function(){
    var total = 0;
    for(let i=0;i<this.length;i++){
        total += this[i] 
    }
    console.log(total);
}

let arr = [1,2,3];

arr.sum();