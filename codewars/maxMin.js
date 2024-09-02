function highAndLow(numbers){
    // ...
    // let max = -Infinity;
    // let min = Infinity;
    // numbers = numbers.split(" ");
    // for (let index = 0; index < numbers.length; index++) {
    //     if(Number(numbers[index])>max) {
    //         max = numbers[index];            
    //     }
    //     if (Number(numbers[index])<min) {
    //         min = numbers[index];            
    //     }
        
    // }
    // return max +" " +min;
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
    
  }

  console.log(highAndLow("1 2 3 4 5"));