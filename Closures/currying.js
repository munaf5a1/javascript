// function fn1(a){
//     return function fn2(b){
//         return function fn(c){
//             return a+b+c;
//         }
//     }
// }

// let sum = fn1(2)(3)(4)

// console.log(sum)
// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2
// function calculate(operation) {
//     return function(a){
//         return function(b){
//             if (operation =="sum") {
//                 return a+b;
//             }else if (operation=="multiply") {
//                 return a*b;                
//             }else if (operation=="substract") {
//                 return a-b;
//             }else if (operation=="divide") {
//                 return a/b;                
//             }
//         }
//     }    
// }

// let divide = calculate('divide')(12)(4);

// console.log(divide);

// Partial Application

function addPartial(a,b) {
    return function(c,d){
        return function(e,f,g){
            return a+b+c+d+e+f+g;
        }
    }
}

console.log(addPartial(1 ,2)(3 ,4)(5,6,7))