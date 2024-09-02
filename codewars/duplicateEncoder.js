function duplicateEncoder(word){

    word = word.toLowerCase();
    let format = word.split("").map(function(a,i,w){
       return w.indexOf(a)== w.lastIndexOf(a)?"(":")"
    }).join("")
    console.log(format)
}

duplicateEncoder("Din")