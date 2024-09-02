function outerFunction(){
    let count = 0;
    function innerFunc(){
        count++;
        console.log(count);
    }
    return innerFunc
}

let innerFn = outerFunction()
let counter1 = innerFn()
let counter2 = innerFn()

console.log(counter2)