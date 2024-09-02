function duplicateCount(text){
    text = text.toLowerCase();
    let sentence =  text.split("").filter(function(a,i,w){
       return w.indexOf(a)!=w.lastIndexOf(a) && w.indexOf(a)==i
    })
    
    console.log(sentence);
  }

  duplicateCount("Indivisibilities");