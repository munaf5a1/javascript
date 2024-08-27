
// let sum = arr.reduce((acc,currVal)=>{
//     return acc+currVal
// },0)

// console.log(sum)
    Array.prototype.myReduce = function(cb, currVal){
        let accumulator;
        let indexVal;
        if (arguments.length=1) {
            accumulator = this[0]
            indexVal = 1;            
        }else {
            accumulator = currVal;
            indexVal = 0;
        }
        for(let i=indexVal;i<this.length;i++){
            accumulator = cb(accumulator, this[i]);
        }
        return accumulator;
    }

    function calculateSum(accumulator, currentVal) {
        return accumulator + currentVal
    }
    let arr2 = [1,2,3,4,5];

    let sum = arr2.myReduce(calculateSum)

    console.log(sum)

