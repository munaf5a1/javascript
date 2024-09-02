function isIsogram(str){
    str = str.toLowerCase();
    let newStr = str.split("").every(function(a,i,w){
      return w.indexOf(a) == w.lastIndexOf(a);
    })
    console.log(newStr);

}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));


