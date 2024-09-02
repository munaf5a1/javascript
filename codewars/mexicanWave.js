function wave(str){
    let waves = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){ // Skip spaces
            let newStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            waves.push(newStr);
        }
    }
    console.log(waves);
}

wave("hello");
