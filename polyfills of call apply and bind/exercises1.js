const numbers = [1, 2, 3, 4, 5];
// 

let max = -Infinity;
let min = Infinity;

function findMax(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (numbers[index]>max) {
            max = numbers[index];        
        }
        if (numbers[index]<min) {
            min = numbers[index];            
        }
    }
    return max +" min: "+min;
}

console.log(findMax(numbers));

// let max = Math.max.apply(null,numbers);

// let min = Math.min.apply(null,numbers);

// console.log("min",min);
// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max.apply(null, numbers))